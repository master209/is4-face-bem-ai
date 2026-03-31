import React, {FC, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { api } from '../../../../store';
import { Layout } from '../../../../components';
import { OnRowDblClick } from '../../../../blocks/Grid';
import { IGridRow } from '../../../../types/common';
import {
  LetterViewStateContext,
  PageHeader,
  dispatchLoadData,
  useAsReducer
} from '.';

import './View.scss';

const LetterView: FC<IClassNameProps> = () => {
  const {state, dispatch} = useAsReducer();
  const {id: ID} = useParams();

  const loadData = () => {
    // Проверяем данные в sessionStorage (для переходов через двойной клик)
    const sessionState = sessionStorage.getItem('gridRowViewState');
    console.log('🔍 LetterView loadData, sessionState:', sessionState);

    if (sessionState) {
      const {apiHandler, row} = JSON.parse(sessionState) as OnRowDblClick & {row: IGridRow};
      console.log('✅ LetterView has sessionState. apiHandler, row:', apiHandler, row);

      dispatchLoadData(dispatch, {api, req:`${apiHandler}${ID as string}`});
    }
  };

  useEffect(() => {
    console.log('🏗️ LetterView mounted, calling loadData');
    loadData();
  },[]);

  return (
    <Layout>
      <LetterViewStateContext.Provider value={{state, dispatch}}>
        <div className="LetterView">
          <div className="HeaderAndTime">
            <h1>Просмотр договора #{state.pageHeader.id.val}</h1>
            <p className="CurrentTime">Время открытия страницы: {state.currentTime}</p>
          </div>
          <PageHeader/>
        </div>
      </LetterViewStateContext.Provider>
    </Layout>
  );
};

export default LetterView;
