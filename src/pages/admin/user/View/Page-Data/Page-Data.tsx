import React, { FC, useContext, MouseEvent } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { toast } from 'react-toastify';

import { UserViewStateContext } from '..';
import { Link } from '../../../../../blocks'
import { Button } from '../../../../../blocks/Button'
import { dispatchSwitchTab, GridTable } from '..';

import { BACKEND_URL } from '../../../../../services/api';
import { getToken } from '../../../../../services/token';

import './Page-Data.scss';

type Tost = {type: string, text: string};

const Diff: FC = () => (
  <span className="dbDiff">
    расхождения в базах по этому полю
  </span>
);

export const PageData: FC<IClassNameProps> = () => {
  const {state, dispatch} = useContext(UserViewStateContext);
  const {tabs, buttons, links, tabActive} = state;

  const handleClick = (ev:MouseEvent, tab:string) => {
    ev.preventDefault();
    dispatch && dispatchSwitchTab(dispatch, tab);
  };

  const activeClass = (tabName:string) => tabName === tabActive ? 'active' : 'inactive';

  const getPayload = (payload = '') => tabs['Юзер'][payload] ? tabs['Юзер'][payload].val : tabs['Юзер'].id.val;

  const renderTab = (tabName:string, tab:object, buttons:object, links:object) => (
    <>
      <Link
        className={`TabLabel TabLabel-${activeClass(tabName)}`}
        handleClick={(ev:MouseEvent) => handleClick(ev, tabName)}
      >{tabName}</Link>
      <div className={`${tabName} TabData TabData-${activeClass(tabName)}`}>
        <div className="ButtonSet">
          {Object.entries(buttons).map(([idx, {lab, handlerUrl, payload}]) => (
              <Button key={idx} onClick={() => {
                handleButtonClick(idx, handlerUrl, getPayload(payload));
              }}>{lab}</Button>
          ))}
        </div>
        <div className="ButtonSet">
          {Object.entries(links).map(([idx, {lab, linkUrl}]) => (
            <Link key={idx} href={linkUrl}>{lab}</Link>
          ))}
        </div>
        {Object.entries(tab).map(([idx, {lab, val, diff}]) => (
          <p
            key={idx}>
            <span className="th"
          >
            {lab}: </span>{val}
            {diff ? <Diff/> : null}
          </p>
        ))}
      </div>
    </>
  );

  const renderDiff = (tabName:string, tab:object) => (
    <>
      <Link
        className={`TabLabel TabLabel-${activeClass(tabName)}`}
        handleClick={(ev:MouseEvent) => handleClick(ev, tabName)}
      >{tabName}</Link>
      <div className={`${tabName} TabData TabData-${activeClass(tabName)} TabDiff`}>
        <table>
          <thead>
          <tr>
            <th>&nbsp;</th><th>ИС</th><th>ЛК</th>
          </tr>
          </thead>
          <tbody>
          {Object.entries(tab).map(([key, val]) => (
            <tr key={key}>
              <th className="right">{val.lab}</th>
              <td>{val.is}</td>
              <td>{val.lk}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const renderTabGrid = (tabName:string, Grid:JSX.Element, buttons:object, links:object) => (
    <>
      <Link
        className={`TabLabel TabLabel-${activeClass(tabName)}`}
        handleClick={(ev:MouseEvent) => handleClick(ev, tabName)}
      >{tabName}</Link>
      <div className={`${tabName} TabData TabData-${activeClass(tabName)}`}>
        <div className="ButtonSet">
          {Object.entries(buttons).map(([idx, {lab, handlerUrl, payload}]) => (
              <Button key={idx} onClick={() => {
                handleButtonClick(idx, handlerUrl, getPayload(payload));
              }
              }>{lab}</Button>
          ))}
          </div>
          <div className="ButtonSet">
            {Object.entries(links).map(([idx, {lab, linkUrl}]) => (
              <Link key={idx} href={linkUrl}>{lab}</Link>
            ))}
          </div>
        {Grid}
      </div>
    </>
  );

  const showToast = ({type, text}: Tost) => type === 'error' ? toast.error(text) : toast.info(text);

  const handleButtonClick = (
    btn: string,
    handlerUrl: string,
    payload?: string
  ) => {
    fetch(`${BACKEND_URL}/users/${handlerUrl}`, {
      method: 'POST',
      body: payload, // serviceId
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/text',
      }
    })
      .then((res) => res.json())
      .then((tost: Tost) => showToast(tost))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <div>
      {+tabs['Юзер'].id.val ? (
        <div className="TabSet">
          {renderTab('Юзер', tabs['Юзер'], buttons['Юзер'], {})}
          {renderTab('Услуга', tabs['Услуга'], buttons['Услуга'], {})}
          {renderTab('Радиус', tabs['Радиус'], buttons['Радиус'], {})}

          {renderTabGrid('История списаний средств',
            <GridTable
              tableHead={tabs['История списаний средств'].tableHead}
              tableRows={tabs['История списаний средств'].tableRows}
            />, {}, links['История списаний средств'])}

          {renderTabGrid('История пополнений средств',
            <GridTable
              tableHead={tabs['История пополнений средств'].tableHead}
              tableRows={tabs['История пополнений средств'].tableRows}
            />, {}, links['История пополнений средств'])}

          {renderTabGrid('История тарифов',
            <GridTable
              tableHead={tabs['История тарифов'].tableHead}
              tableRows={tabs['История тарифов'].tableRows}
            />, {}, links['История тарифов'])}

          {renderTabGrid('История сессий',
            <GridTable
              tableHead={tabs['История сессий'].tableHead}
              tableRows={tabs['История сессий'].tableRows}
            />, buttons['История сессий'], links['История сессий'])}

          {renderDiff('Расхождения в базах', tabs['Расхождения в базах'])}
        </div>) : <p>загружаю...</p>}
    </div>
  );
};
