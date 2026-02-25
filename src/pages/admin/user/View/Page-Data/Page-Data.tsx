import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { toast } from 'react-toastify';

import { UserViewStateContext, dispatchSwitchTab } from '..';
import { TabSet } from '../../../../../blocks/TabSet';
import { IUniversalTab } from '../../../../../blocks/Tab';
import { Data, IDataConfig, IButton } from '../Data';

import { BACKEND_URL } from '../../../../../services/api';
import { getToken } from '../../../../../services/token';

import './Page-Data.scss';

type Tost = {type: string, text: string};

export const PageData: FC<IClassNameProps> = () => {
  const {state, dispatch} = useContext(UserViewStateContext);
  const {tabs: dataTabs, tabActive} = state;

  const showToast = ({type, text}: Tost) => type === 'error' ? toast.error(text) : toast.info(text);

  const handleTabChange = (tabId: string) => {
    dispatch && dispatchSwitchTab(dispatch, tabId);
  };

  const handleButtonClick = (button: IButton) => {
    const getPayload = (payload = '') =>
      dataTabs.find(t => t.id === 'user')?.fields?.find((f) => f.key === payload)?.value ||
      dataTabs.find(t => t.id === 'user')?.fields?.find((f) => f.key === 'id')?.value;

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

  // Преобразуем IDataConfig[] в IUniversalTab[]
  const universalTabs: IUniversalTab[] = dataTabs.map((tabConfig: IDataConfig) => ({
    id: tabConfig.id,
    label: tabConfig.name,
    content: (
      <Data
        config={tabConfig}
        onButtonClick={handleButtonClick}
      />
    )
  }));

  return (
    <div>
      {dataTabs.length > 0 ? (
        <TabSet
          tabs={universalTabs}
          activeTab={tabActive}
          onTabChange={handleTabChange}
        />
      ) : (
        <p>загружаю...</p>
      )}
    </div>
  );
};
