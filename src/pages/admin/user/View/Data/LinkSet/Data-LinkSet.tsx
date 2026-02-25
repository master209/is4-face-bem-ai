import React, { FC } from 'react';
import { Link } from '../../../../../../blocks/Link';
import { cnData } from '../Data';
import { ILink } from '../types';

export interface IDataLinkSetProps {
  links: ILink[];
}

export const DataLinkSet: FC<IDataLinkSetProps> = ({
  links
}) => {
  return (
    <div className={cnData('LinkSet')}>
      {links.map((link, index) => (
        <Link key={index} href={link.url} className={cnData('ContentLink')}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};