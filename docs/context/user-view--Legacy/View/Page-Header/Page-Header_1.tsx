import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { UserViewStateContext } from '..';

import './Page-Header.scss';

export const PageHeader: FC<IClassNameProps> = () => {
  const {state} = useContext(UserViewStateContext);
  const {pageHeader} = state;

  return (
    <div>
      {+pageHeader.username.val ? (
        <div className="Page-Header">
          {Object.entries(pageHeader as object).map(([key, {lab, val}]) => (
            <p key={key} className="">
              {lab}: {val}
            </p>
          ))}
        </div>) : <p>загружаю...</p>}
    </div>
  );
};

