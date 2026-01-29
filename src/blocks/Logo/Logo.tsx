import React, { FC } from 'react';

import { cnLogo, ILogoProps, LogoLabel } from '.';
import { LogoImg } from './Img/Logo-Img';
import { Link } from '../Link';

import './Logo.scss';

export const Logo: FC<ILogoProps> = ({src, href, alt, handleClick}) => (
  <Link
    href={href || '/'}
    className={cnLogo()}
    handleClick={handleClick}
  >
    {src ? <LogoImg src={src} alt={alt || 'logo'}/> : 'Logo'}
    {<LogoLabel label="Галс-Телеком" />}
  </Link>
);
