import { withBemMod } from '@bem-react/core'

import { cnIcon, IIconProps } from '..'
import { Link } from '../../Link';

export interface IIconTypeLinkProps {
  type?: 'link';
  href?: string;
}

export const withIconTypeLink = withBemMod<IIconTypeLinkProps, IIconProps>(
  cnIcon(),
  {type: 'link'},
  () => ({
     src,
     alt,
     href,
     onClick,
     className,
     // @ts-ignore
     type: _type,
     ...props
   }) => (
    <div
      {...props}
      className={cnIcon(null, [className, 'mobile'])}
    >
      <Link
        href={href || '#'}
        handleClick={onClick}
      >
        Link
      </Link>
    </div>
  )
)
