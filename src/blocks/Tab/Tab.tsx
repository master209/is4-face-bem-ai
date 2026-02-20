import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { GridTable } from '../../pages/admin/user/View/Page-Data/Grid-Table';
import { cnTab, ITabProps, IField } from './types';
import { TabLabel } from './Label/Tab-Label';
import { TabContent } from './Content/Tab-Content';
import { TabButtonSet } from './ButtonSet/Tab-ButtonSet';
import { TabLinkSet } from './LinkSet/Tab-LinkSet';
import { TabFieldLabel } from './FieldLabel/Tab-FieldLabel';
import { TabDiffMarker } from './DiffMarker/Tab-DiffMarker';
import { TabDiffTable } from './DiffTable/Tab-DiffTable';

import './Tab.scss';

export const Tab: FC<ITabProps & IClassNameProps> = ({
  config,
  active,
  onClick,
  onButtonClick,
  className = ''
}) => {

  const renderFields = (fields: IField[]) => (
    <>
      {fields.map((field: IField) => (
        <p key={field.key}>
          <TabFieldLabel>{field.label}</TabFieldLabel> {field.value}
          {field.diff && <TabDiffMarker />}
        </p>
      ))}
    </>
  );

  const renderTable = (columns: any[], rows: any[]) => (
    <GridTable
      tableHead={columns.reduce((acc: any, col) => {
        acc[col.key] = col.label;
        return acc;
      }, {})}
      tableRows={rows}
    />
  );

  const renderDiff = (diffData: any[]) => (
    <TabDiffTable diffData={diffData} />
  );

  const renderContent = () => {
    switch (config.type) {
      case 'fields':
        return config.fields ? renderFields(config.fields) : null;
      case 'table':
        return config.columns && config.rows ? renderTable(config.columns, config.rows) : null;
      case 'diff':
        return config.diffData ? renderDiff(config.diffData) : null;
      default:
        return null;
    }
  };

  return (
    <div className={cnTab()}>
      <TabLabel active={active} onClick={onClick}>
        {config.name}
      </TabLabel>
      <TabContent active={active}>
        {config.buttons && config.buttons.length > 0 && (
          <TabButtonSet buttons={config.buttons} onButtonClick={onButtonClick} />
        )}

        {config.links && config.links.length > 0 && (
          <TabLinkSet links={config.links} />
        )}

        {renderContent()}
      </TabContent>
    </div>
  );
};