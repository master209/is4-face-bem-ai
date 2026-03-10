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
                <th>{name.lab}</th><td>{name.val}</td>
              </tr>
              <tr>
                <th>{numberContract.lab}</th><td>{numberContract.val}</td>
              </tr>
              <tr>
                <th>{conclusionDate.lab}</th><td>{conclusionDate.val}</td>
              </tr>
              <tr>
                <th>{email.lab}</th><td>{email.val}</td>
              </tr>
            </tbody>
          </table>
        </div>) : null}
    </div>
  );
};

