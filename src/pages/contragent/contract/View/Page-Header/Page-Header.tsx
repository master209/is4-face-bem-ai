import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { ContractViewStateContext } from '..';

import './Page-Header.scss';

export const PageHeader: FC<IClassNameProps> = () => {
  const {state} = useContext(ContractViewStateContext);
  const {pageHeader: {id, name, numberContract, conclusionDate, email}} = state;

  return (
    <div>
      {id.val ? (
        <div className="Page-Header">
          <table>
            <tbody>
              <tr>
                <td><span className="th">{name.lab}:</span> {name.val}</td>
              </tr>
              <tr>
                <td><span className="th">{numberContract.lab}:</span> {numberContract.val}</td>
              </tr>
              <tr>
                <td><span className="th">{conclusionDate.lab}:</span> {conclusionDate.val}</td>
              </tr>
              <tr>
                <td><span className="th">{email.lab}:</span> {email.val}</td>
              </tr>
            </tbody>
          </table>
        </div>) : null}
    </div>
  );
};

