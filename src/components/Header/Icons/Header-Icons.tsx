import React, { FC } from 'react';

import { IClassNameProps, compose } from '@bem-react/core';

import { cnHeader } from '..';
import { Icon } from '../../../blocks/Icon';
import { withIconTypeLink } from '../../../blocks/Icon/_type/Icon_type_link@desktop';

import { fetchLogout } from '../../../store/api-actions';
import { useAppDispatch } from '../../../hooks';
import { IMG_PATH } from '../../../const';

import './Header-Icons.scss';

const IconTypeLink = compose(withIconTypeLink)(Icon);

export const HeaderIcons: FC<IClassNameProps> = ({...props}) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <div {...props} className={cnHeader('Icons')}>
      {/*
      <Icon
        src={`${IMG_PATH}search.svg`}
        alt='search'
        title="поиск"
        onClick={() => true}
        className={cnHeader('IconSearch')}
      />
      */}
      <IconTypeLink
        type="link"
        src={`${IMG_PATH}exit-door.svg`}
        alt='cart'
        tip="завершить сеанс работы"
        onClick={() => handleLogout()}
        className={cnHeader('IconExit')}
      />
    </div>
  );
};
