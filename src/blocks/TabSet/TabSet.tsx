import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { Tab } from '../Tab';
import { cnTabSet, ITabSetProps } from './types';

import './TabSet.scss';

export const TabSet: FC<ITabSetProps & IClassNameProps> = ({
  tabs,
  activeTab,
  onTabChange,
  onButtonClick,
  className = ''
}) => {
  return (
    <div className={cnTabSet({}, [className])}>
      {tabs.map((tabConfig) => (
        <Tab
          key={tabConfig.id}
          config={tabConfig}
          active={tabConfig.id === activeTab}
          onClick={() => onTabChange(tabConfig.id)}
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
};