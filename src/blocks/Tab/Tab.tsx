import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cnTab, ITabProps } from './types';
import { TabLabel } from './Label/Tab-Label';
import { TabContent } from './Content/Tab-Content';

import './Tab.scss';

export const Tab: FC<ITabProps & IClassNameProps> = ({
  tab,
  active,
  onClick,
  className = ''
}) => {
  return (
    <div className={`${cnTab()} ${className}`.trim()}>
      <TabLabel active={active} onClick={onClick}>
        {tab.lab}
      </TabLabel>
      <TabContent active={active}>
        {tab.content}
      </TabContent>
    </div>
  );
};