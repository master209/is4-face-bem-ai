import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { toast } from 'react-toastify';

import { UserViewStateContext, dispatchSwitchTab } from '..';
import { TabSet } from '../../../../../blocks/TabSet';
import { ITabConfig, IButton, IField } from '../../../../../blocks/Tab';

import { BACKEND_URL } from '../../../../../services/api';
import { getToken } from '../../../../../services/token';

import './Page-Data.scss';

type Tost = {type: string, text: string};

export const PageData: FC<IClassNameProps> = () => {
  const {state, dispatch} = useContext(UserViewStateContext);
  const {tabs, tabActive} = state;

  const showToast = ({type, text}: Tost) => type === 'error' ? toast.error(text) : toast.info(text);

  const handleTabChange = (tabId: string) => {
    dispatch && dispatchSwitchTab(dispatch, tabId);
  };

  const handleButtonClick = (button: IButton) => {
    const getPayload = (payload = '') =>
      tabs.find(t => t.id === 'user')?.fields?.find((f: IField) => f.key === payload)?.value ||
      tabs.find(t => t.id === 'user')?.fields?.find((f: IField) => f.key === 'id')?.value;

    fetch(`${BACKEND_URL}/users/${button.handlerUrl}`, {
      method: 'POST',
      body: button.payload ? getPayload(button.payload) as string : undefined,
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/text',
      }
    })
      .then((res) => res.json())
      .then((tost: Tost) => showToast(tost))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {tabs.length > 0 ? (
        <TabSet
          tabs={tabs}
          activeTab={tabActive}
          onTabChange={handleTabChange}
          onButtonClick={handleButtonClick}
        />
      ) : (
        <p>загружаю...</p>
      )}
    </div>
  );
};
