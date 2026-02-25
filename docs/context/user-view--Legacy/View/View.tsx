import React, { FC, useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { IClassNameProps } from '@bem-react/core';

import { Layout } from '../../../../components';
import { OnRowDblClick } from '../../../../blocks/Grid';
import { ForbiddenScreen } from '../../../forbidden-screen';

import {
  UserViewStateContext,
  PageHeader,
  PageData,
  dispatchLoadData,
  useAsReducer
} from '.';

import { api } from '../../../../store';
import { setCanUser as can } from '../../../../store/main-process';
import { useAppDispatch } from '../../../../hooks';
import { checkAccess } from '../../../../helpers';
import { Roles} from '../../../../types/common';

import './View.scss';

const role = 'topmanager';

const UserView: FC<IClassNameProps> = () => {
  const globalDispatch = useAppDispatch();
  const {state, dispatch} = useAsReducer();

  const [canUser, setCanUser] = useState<Roles>({role:undefined});
  const isUserCan = canUser[role];

  const {id: ID} = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const loadData = () => {
    if(location.state) {
      const {apiHandler} = location.state as OnRowDblClick;
      dispatchLoadData(dispatch, {api, req:`${apiHandler}${ID as string}`});
    } else { // обработка перехода по прямой ссылке
      navigate('/admin/user/manage');
    }
  };

  useEffect(() => {
    globalDispatch(can({isUserCan: true}));
    checkAccess([role], setCanUser);
  },[]);

  useEffect(() => {
    isUserCan && loadData();
  },[isUserCan]);

  return (
    <Layout>
      <UserViewStateContext.Provider value={{state, dispatch}}>
        {isUserCan ?
          <div className="UserView">
              <div className="HeaderAndTime">
                <h1>Просмотр клиента #{state.tabs['Юзер'].userId.val}</h1>
                <p className="CurrentTime">Время открытия страницы: {state.currentTime}</p>
              </div>
              <PageHeader/>
              <PageData/>
          </div> : <ForbiddenScreen isUserCan={isUserCan}/> }
      </UserViewStateContext.Provider>
    </Layout>
  );
};

export default UserView;
