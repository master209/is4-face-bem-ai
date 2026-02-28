import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { toast } from 'react-toastify';

import { UserViewStateContext } from '..';
import { TabSet } from '../../../../../blocks/TabSet';
import { IUniversalTab } from '../../../../../blocks/Tab';
import { Data, IDataConfig, IButton } from '../Data';

import { BACKEND_URL } from '../../../../../services/api';
import { getToken } from '../../../../../services/token';

import './Page-Data.scss';

type Tost = {type: string, text: string};

export const PageData: FC<IClassNameProps> = () => {
  const {state} = useContext(UserViewStateContext);
  const {tabs: dataTabs} = state;

  const showToast = ({type, text}: Tost) => type === 'error' ? toast.error(text) : toast.info(text);

  const handleButtonClick = (button: IButton) => {
    const getPayload = (payload = '') =>
      dataTabs.find(t => t.id === 'user')?.fields?.find((f) => f.key === payload)?.val ||
      dataTabs.find(t => t.id === 'user')?.fields?.find((f) => f.key === 'id')?.val;

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
    lab: tabConfig.name,
    content: (
      <Data
        config={tabConfig}
        onButtonClick={handleButtonClick}
      />
    )
  }));

  return (
    <div>
      <TabSet
        tabs={universalTabs}
        onTabChange={(tabId) => {
          // Опциональная бизнес-логика при переключении таба
          console.log('Tab changed to:', tabId);
        }}
      />
    </div>
  );
};
