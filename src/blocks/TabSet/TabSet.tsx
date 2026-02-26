import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { Tab } from '../Tab';
import { cnTabSet, ITabSetProps } from './types';
import { useTabUrlSync } from './hooks/useTabUrlSync';

import './TabSet.scss';

export const TabSet: FC<ITabSetProps & IClassNameProps> = ({
  tabs,
  onTabChange,
  className = ''
}) => {
  const { currentTabId, updateTabId } = useTabUrlSync(tabs);

  // Показываем загрузку, если табы еще не загружены
  if (tabs.length === 0) {
    return <div>загрузка...</div>;
  }

  const handleTabClick = (tabId: string) => {
    updateTabId(tabId); // Обновляем URL
    onTabChange?.(tabId); // Вызываем бизнес-логику страницы (опционально)
  };

  return (
    <div className={cnTabSet({}, [className])}>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          active={tab.id === currentTabId}
          onClick={() => handleTabClick(tab.id)}
        />
      ))}
    </div>
  );
};