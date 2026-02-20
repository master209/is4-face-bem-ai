import React, { FC } from 'react';
import { Link } from '../../Link';
import { cnTab, ILink } from '../types';

interface ITabLinkSetProps {
  links: ILink[];
}

export const TabLinkSet: FC<ITabLinkSetProps> = ({
  links
}) => {
  return (
    <div className={cnTab('LinkSet')}>
      {links.map((link, index) => (
        <Link key={index} href={link.url} className={cnTab('ContentLink')}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};