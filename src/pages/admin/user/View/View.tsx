import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { api } from '../../../../store';
import { Layout } from '../../../../components';
import {
  UserViewStateContext,
  PageHeader,
  PageData,
  dispatchLoadData,
  dispatchMockData,
  useAsReducer
} from '.';


import './View.scss';

const UserView: FC<IClassNameProps> = () => {
  const {state, dispatch} = useAsReducer();
  const {id: ID} = useParams();

  const loadData = () => {
    // Временно используем моковые данные для тестирования рефакторинга
    console.log('🔄 UserView loadData - using mock data for refactoring testing');
    dispatchMockData(dispatch);
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
				<h1>Просмотр клиента #{state.tabs.find(tab => tab.id === 'user')?.fields?.find(field => field.key === 'userId')?.value}</h1>
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
