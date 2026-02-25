import React, { FC } from 'react';
import { cnData } from '../Data';

export const DataDiffMarker: FC = () => (
  <span className={cnData('DiffMarker')}>
    расхождения в базах по этому полю
  </span>
);