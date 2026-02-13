import React, { FC, MouseEvent } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { Link } from '../Link';
import { Button } from '../Button';
import { GridTable } from '../../pages/admin/user/View/Page-Data/Grid-Table';
import { ITabProps, IField, IDiffItem } from './types';

import './Tab.scss';

const Diff: FC = () => (
  <span className="Tab-DiffMarker">
    расхождения в базах по этому полю
  </span>
);

export const Tab: FC<ITabProps & IClassNameProps> = ({
  config,
  isActive,
  onClick,
  onButtonClick,
  className = ''
}) => {
  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault();
    onClick();
  };

  const renderFields = (fields: IField[]) => (
    <>
      {fields.map((field: IField) => (
        <p key={field.key}>
          <span className="Tab-FieldLabel">{field.label}:</span> {field.value}
          {field.diff && <Diff />}
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

  const renderDiff = (diffData: IDiffItem[]) => (
    <table className="Tab-DiffTable">
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
            <th className="Tab-DiffLabel">{item.lab}</th>
            <td>{item.is}</td>
            <td>{item.lk}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
    <>
      <Link
        className={`Tab-Label Tab-Label_${isActive ? 'active' : 'inactive'}`}
        handleClick={handleClick}
      >
        {config.name}
      </Link>
      <div className={`Tab-Content Tab-Content_${isActive ? 'active' : 'inactive'}`}>
        {config.buttons && config.buttons.length > 0 && (
          <div className="Tab-ButtonSet">
            {config.buttons.map((button) => (
              <Button
                key={button.id}
                onClick={() => onButtonClick?.(button)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        )}

        {config.links && config.links.length > 0 && (
          <div className="Tab-LinkSet">
            {config.links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {renderContent()}
      </div>
    </>
  );
};