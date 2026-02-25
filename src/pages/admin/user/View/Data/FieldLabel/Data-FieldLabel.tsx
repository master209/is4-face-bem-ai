import React, { FC } from 'react';
import { cnData } from '../Data';
import { IField } from '../types';
import { DataDiffMarker } from '../DiffMarker/Data-DiffMarker';

export interface IDataFieldLabelProps {
  field: IField;
}

export const DataFieldLabel: FC<IDataFieldLabelProps> = ({
  field
}) => {
  return (
    <p>
      <span className={cnData('FieldLabel')}>
        {field.label}:
      </span> {field.value}
      {field.diff && <DataDiffMarker />}
    </p>
  );
};