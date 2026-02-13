import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { Link } from '../Link';
import { Button } from '../Button';
import { GridTable } from '../../pages/admin/user/View';
import { ITabSetProps, IField, ITableRow, IDiffItem } from './types';

import './TabSet.scss';

const Diff: FC = () => (
  <span className="TabSet-DiffMarker">
    расхождения в базах по этому полю
  </span>
);

export const TabSet: FC<ITabSetProps & IClassNameProps> = ({
  tabs,
  activeTab,
  onTabChange,
  onButtonClick,
  className = ''
}) => {
  const renderFields = (fields: IField[]) => (
    <>
      {fields.map((field: IField) => (
        <p key={field.key}>
          <span className="TabSet-FieldLabel">{field.label}:</span> {field.value}
          {field.diff && <Diff />}
        </p>
      ))}
    </>
  );

  const renderTable = (columns: any[], rows: ITableRow[]) => (
    <GridTable
      tableHead={columns.reduce((acc: any, col) => {
        acc[col.key] = col.label;
        return acc;
      }, {})}
      tableRows={rows}
    />
  );

  const renderDiff = (diffData: IDiffItem[]) => (
    <table className="TabSet-DiffTable">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>ИС</th>
          <th>ЛК</th>
        </tr>
      </thead>
      <tbody>
        {diffData.map((item: IDiffItem, index: number) => (
          <tr key={index}>
            <th className="TabSet-DiffLabel">{item.lab}</th>
            <td>{item.is}</td>
            <td>{item.lk}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderTabContent = (tabConfig: any) => {
    switch (tabConfig.type) {
      case 'fields':
        return tabConfig.fields ? renderFields(tabConfig.fields) : null;
      case 'table':
        return tabConfig.columns && tabConfig.rows ? renderTable(tabConfig.columns, tabConfig.rows) : null;
      case 'diff':
        return tabConfig.diffData ? renderDiff(tabConfig.diffData) : null;
      default:
        return null;
    }
  };

  const activeTabConfig = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={`TabSet ${className}`}>
      <div className="TabSet-Header">
        {tabs.map((tabConfig) => (
          <div
            key={tabConfig.id}
            className={`TabSet-Label TabSet-Label_${tabConfig.id === activeTab ? 'active' : 'inactive'}`}
            onClick={() => onTabChange(tabConfig.id)}
          >
            {tabConfig.name}
          </div>
        ))}
      </div>
      <div className="TabSet-Content">
        {activeTabConfig && (
          <div className="TabSet-TabContent">
            {activeTabConfig.buttons && activeTabConfig.buttons.length > 0 && (
              <div className="TabSet-ButtonSet">
                {activeTabConfig.buttons.map((button: any) => (
                  <Button
                    key={button.id}
                    onClick={() => onButtonClick?.(button)}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            )}

            {activeTabConfig.links && activeTabConfig.links.length > 0 && (
              <div className="TabSet-LinkSet">
                {activeTabConfig.links.map((link: any, index: number) => (
                  <Link key={index} href={link.url}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {renderTabContent(activeTabConfig)}
          </div>
        )}
      </div>
    </div>
  );
};