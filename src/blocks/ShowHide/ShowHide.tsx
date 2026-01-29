import React, { FC, MouseEvent, useState } from 'react';

import { cnShowHide, IShowHideProps } from '.';
import { Link } from '../Link';

import './ShowHide.scss';

export const ShowHide: FC<IShowHideProps> = ({
  children,
  label = '',
  isShowExtdata = false,
  className,
  ...props
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = (ev: MouseEvent, show: boolean) => {
    ev.preventDefault();
    setIsShow(show);
  };

  const needShow = isShow || isShowExtdata;

  return (
    <div className={cnShowHide()}>
      <Link
        handleClick={(ev) => handleClick(ev, true)}
        className={cnShowHide(!needShow ? 'Show' : 'Hide')}
        {...props}
      >
        {`Показать ${label}`}
      </Link>

      <fieldset className={cnShowHide(needShow ? 'Show' : 'Hide')}>
        <legend
          onClick={(ev) => handleClick(ev, false)}
          className="Link"
        >
          {`Скрыть  ${label}`}
        </legend>
        {children}
      </fieldset>
    </div>
  );
};
