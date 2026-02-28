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
        {field.lab}:
      </span> {field.val}
      {field.diff && <DataDiffMarker />}
    </p>
  );
};