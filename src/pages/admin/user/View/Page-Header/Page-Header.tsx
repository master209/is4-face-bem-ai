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
                <th>{username.lab}</th><td>{username.val}</td>
              </tr>
              <tr>
                <th>{balance.lab}</th><td>{balance.val}</td>
              </tr>
              <tr>
                <th>{userStatus.lab}</th><td>{userStatus.val}</td>
              </tr>
              <tr>
                <th>{serviceStatus.lab}</th><td>{serviceStatus.val}</td>
              </tr>
            </tbody>
          </table>
        </div>) : null}
    </div>
  );
};

