import React, { FC, useContext } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { UserViewStateContext } from '..';

import './Page-Header.scss';

export const PageHeader: FC<IClassNameProps> = () => {
  const {state} = useContext(UserViewStateContext);
  const {pageHeader: {username, balance, userStatus, serviceStatus}} = state;

  return (
    <div>
      {username.val ? (
        <div className="Page-Header">
          <table>
            <tbody>
              <tr>
                <td><span className="th">{username.lab}:</span> {username.val}</td>
                <td><span className="th">{balance.lab}:</span> {balance.val}</td>
              </tr>
              <tr>
                <td><span className="th">{userStatus.lab}:</span> {userStatus.val}</td>
                <td><span className="th">{serviceStatus.lab}:</span> {serviceStatus.val}</td>
              </tr>
            </tbody>
          </table>
        </div>) : null}
    </div>
  );
};

