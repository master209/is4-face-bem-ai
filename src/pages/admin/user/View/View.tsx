import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { OnRowDblClick } from '../../../../blocks/Grid';
import { dispatchLoadData, useAsReducer } from '.';
import { api } from '../../../../store';

import './View.scss';

type IGridRow = {
  id: string;
  [key: string]: string;
}

const UserView: FC<IClassNameProps> = () => {
  const {dispatch} = useAsReducer();
  const {id: ID} = useParams();

  const loadData = () => {
    // Проверяем данные в sessionStorage (для переходов через двойной клик)
    const sessionState = sessionStorage.getItem('userViewState');
    console.log('🔍 UserView loadData, sessionState:', sessionState);

    if (sessionState) {
      const {apiHandler, row} = JSON.parse(sessionState) as OnRowDblClick & {row: IGridRow};
      console.log('✅ UserView has sessionState. apiHandler, row:', apiHandler, row);

      // Очищаем sessionStorage после использования
      sessionStorage.removeItem('userViewState');
      console.log('🧹 SessionStorage cleared');

      dispatchLoadData(dispatch, {api, req:`${apiHandler}${ID as string}`});
    } else {
      // Если нет state, это прямой переход по URL - просто показываем страницу без API запроса
      console.log('ℹ️ UserView no state - direct URL access');
      // navigate('/admin/users/manage');
    }
  };

  useEffect(() => {
    console.log('🏗️ UserView mounted, calling loadData');
    loadData();
  },[]);

  return (
    <div>
      {`UserView id: ${ID}`}
    </div>
  );
};

export default UserView;
