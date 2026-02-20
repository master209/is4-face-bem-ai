import React, { FC } from 'react';
import { cnTab } from '../types';

export const TabDiffMarker: FC = () => (
  <span className={cnTab('DiffMarker')}>
    расхождения в базах по этому полю
  </span>
);