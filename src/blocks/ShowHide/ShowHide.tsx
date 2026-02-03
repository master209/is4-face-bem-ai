import React, { FC, MouseEvent, useState, useCallback } from 'react';

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

  const handleShow = useCallback((ev: MouseEvent) => {
    ev.preventDefault();
    setIsShow(true);
  }, []);

  const handleHide = useCallback((ev: MouseEvent) => {
    ev.preventDefault();
    setIsShow(false);
  }, []);

  const needShow = isShow || isShowExtdata;

  return (
    <div className={cnShowHide()}>
      <Link
        handleClick={handleShow}
        className={cnShowHide(!needShow ? 'Show' : 'Hide')}
        {...props}
      >
        {`Показать ${label}`}
      </Link>

      <fieldset className={cnShowHide(needShow ? 'Show' : 'Hide')}>
        <legend
          onClick={handleHide}
          className="Link"
        >
          {`Скрыть  ${label}`}
        </legend>
        {children}
      </fieldset>
    </div>
  );
};
