import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { LetterViewStateContext } from '..';

import './Page-Header.scss';

export const PageHeader: FC<IClassNameProps> = () => {
  const {state} = useContext(LetterViewStateContext);
  const {pageHeader: {id}} = state;

  return (
    <div>
      {id.val ? (
        <div className="Page-Header">
          <table>
            <tbody>
              <tr>
                <th>{id.lab}</th><td>{id.val}</td>
              </tr>
              <tr>
                <th>{}</th><td>{}</td>
              </tr>
              <tr>
                <th>{}</th><td>{}</td>
              </tr>
              <tr>
                <th>{}</th><td>{}</td>
              </tr>
            </tbody>
          </table>
        </div>) : null}
    </div>
  );
};

