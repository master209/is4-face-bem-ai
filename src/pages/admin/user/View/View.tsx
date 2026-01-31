import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { api } from '../../../../store';
import { Layout } from '../../../../components';
import { OnRowDblClick } from '../../../../blocks/Grid';
import { IGridRow } from '../../../../types/common';
import {
  UserViewStateContext,
  PageHeader,
  PageData,
  dispatchLoadData,
  useAsReducer
} from '.';


import './View.scss';

const UserView: FC<IClassNameProps> = () => {
  const {state, dispatch} = useAsReducer();
  const {id: ID} = useParams();

  const loadData = () => {
    // Проверяем данные в sessionStorage (для переходов через двойной клик)
    const sessionState = sessionStorage.getItem('gridRowViewState');
    console.log('🔍 UserView loadData, sessionState:', sessionState);

    if (sessionState) {
      const {apiHandler, row} = JSON.parse(sessionState) as OnRowDblClick & {row: IGridRow};
      console.log('✅ UserView has sessionState. apiHandler, row:', apiHandler, row);

      // Очищаем sessionStorage после использования
      sessionStorage.removeItem('gridRowViewState');
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
    <Layout>
      <UserViewStateContext.Provider value={{state, dispatch}}>
		  <div className="UserView">
			  <div className="HeaderAndTime">
				<h1>Просмотр клиента #{state.tabs['Юзер'].userId.val}</h1>
				<p className="CurrentTime">Время открытия страницы: {state.currentTime}</p>
			  </div>
			  <PageHeader/>
			  <PageData/>
		  </div>
      </UserViewStateContext.Provider>
    </Layout>
  );
};

export default UserView;
