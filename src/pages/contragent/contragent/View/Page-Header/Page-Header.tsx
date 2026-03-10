import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { ContragentViewStateContext } from '..';

import './Page-Header.scss';

export const PageHeader: FC<IClassNameProps> = () => {
  const {state} = useContext(ContragentViewStateContext);
  const {pageHeader: {id, isJur, bookForm, name, dateRelevance, dateRelevanceEnd}} = state;

  return (
    <div>
      {id.val ? (
        <div className="Page-Header">
          <table>
            <tbody>
              <tr>
                <th>{isJur.lab}</th><td>{isJur.val}</td>
              </tr>
              {isJur.val === 'да' ?
                (<tr>
                   <th>{bookForm.lab}</th><td>{bookForm.val}</td>
                 </tr>) : null}
              <tr>
                <th>{name.lab}</th><td>{name.val}</td>
              </tr>
              <tr>
                <th>{dateRelevance.lab}</th><td>{dateRelevance.val}</td>
              </tr>
              <tr>
                <th>{dateRelevanceEnd.lab}</th><td>{dateRelevanceEnd.val}</td>
              </tr>
            </tbody>
          </table>
        </div>) : null}
    </div>
  );
};

