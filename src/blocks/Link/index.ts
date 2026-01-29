import { ReactNode, MouseEvent } from 'react';

import { IClassNameProps } from '@bem-react/core';

export interface ILinkProps extends IClassNameProps {
  href?: string;
  children?: ReactNode;
  handleClick?: (ev: MouseEvent) => void;
  typeA?: boolean; // через простой тег <a>? (когда нужна перезагрузка страницы)
  target?: string;
}

export { Link } from './Link';
export { withLinkTypeA } from './_type/Link_type_a';
