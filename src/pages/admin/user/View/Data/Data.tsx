import React, { FC, ReactNode } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { GridTable } from '../Page-Data/Grid-Table';

import { DataButtonSet } from './ButtonSet/Data-ButtonSet';
import { DataLinkSet } from './LinkSet/Data-LinkSet';
import { DataFieldLabel } from './FieldLabel/Data-FieldLabel';
import { DataDiffTable } from './DiffTable/Data-DiffTable';
// import { DataDiffMarker } from './DiffMarker/Data-DiffMarker';

import { IDataConfig, IButton, IField, ILink } from './types';

import './Data.scss';

export const cnData = cn('Data');

export interface IDataProps extends IClassNameProps {
  config: IDataConfig;
  onButtonClick?: (button: IButton) => void;
}

export const Data: FC<IDataProps> = ({
  config,
  onButtonClick,
  className
}) => {
  const renderContent = (): ReactNode => {
    switch (config.type) {
      case 'fields':
        return config.fields?.map((field: IField) => (
          <DataFieldLabel
            key={field.key}
            field={field}
          />
        ));

      case 'table':
        const tableHead = config.columns?.reduce((acc: any, col) => {
          acc[col.key] = col.label;
          return acc;
        }, {}) || {};

        return (
          <>
            {config.buttons && config.buttons.length > 0 && (
              <DataButtonSet
                buttons={config.buttons}
                onButtonClick={onButtonClick}
              />
            )}
            {config.links && config.links.length > 0 && (
              <DataLinkSet links={config.links} />
            )}
            {config.columns && config.rows && (
              <GridTable
                tableHead={tableHead}
                tableRows={config.rows}
              />
            )}
          </>
        );

      case 'diff':
        return config.diffData ? (
          <DataDiffTable diffData={config.diffData} />
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className={className}>
      {config.buttons && config.buttons.length > 0 && config.type !== 'table' && (
        <DataButtonSet
          buttons={config.buttons}
          onButtonClick={onButtonClick}
        />
      )}
      {config.links && config.links.length > 0 && config.type !== 'table' && (
        <DataLinkSet links={config.links} />
      )}
      {renderContent()}
    </div>
  );
};