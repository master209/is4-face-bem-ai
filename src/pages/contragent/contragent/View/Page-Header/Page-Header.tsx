import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { ContragentViewStateContext } from '..';

import './Page-Header.scss';

export const PageHeader: FC<IClassNameProps> = () => {
  const {state} = useContext(ContragentViewStateContext);
  const {pageHeader: {bookForm, name, dateRelevance, dateRelevanceEnd}} = state;

  return (
    <div>
      {bookForm.val ? (
        <div className="Page-Header">
          <table>
            <tbody>
              <tr>
                <td><span className="th">{bookForm.lab}:</span> {bookForm.val}</td>
              </tr>
              <tr>
                <td><span className="th">{name.lab}:</span> {name.val}</td>
              </tr>
              <tr>
                <td><span className="th">{dateRelevance.lab}:</span> {dateRelevance.val}</td>
              </tr>
              <tr>
                <td><span className="th">{dateRelevanceEnd.lab}:</span> {dateRelevanceEnd.val}</td>
              </tr>
            </tbody>
          </table>
        </div>) : null}
    </div>
  );
};

