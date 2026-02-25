import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { Tab } from '../Tab';
import { cnTabSet, ITabSetProps } from './types';

import './TabSet.scss';

export const TabSet: FC<ITabSetProps & IClassNameProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = ''
}) => {
  return (
    <div className={cnTabSet({}, [className])}>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          active={tab.id === activeTab}
          onClick={() => onTabChange(tab.id)}
        />
      ))}
    </div>
  );
};