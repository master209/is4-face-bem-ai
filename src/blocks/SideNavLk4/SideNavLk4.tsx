import React, { FC/*, useEffect*/, useState } from 'react';

import {
  cnSideNav,
  ISideNavProps,
  SideNavTitle,
  SideNavContent,
  SideNavLink
} from '.';

import './SideNavLk4.scss';
import './_active/SideNav-Item_active.scss';
import './_expanded/SideNav-Item_expanded.scss';

export const SideNavLk4: FC<ISideNavProps> = ({
  navItems,
  activeNavItem,
  handleNavItemClick,
  handleNavLinkClick,
  className
}) => {
  const [expandedItemId, setExpandedItemId] = useState(activeNavItem.id);
  const isActive = (navItemId:string) => navItemId === activeNavItem.id;

  /* при перезагрузке страницы нужно развернуть активный узел меню
  useEffect(() => {
    setExpandedItemId((prevState) => {
      let ret = prevState;
      prevState !== activeNavItem.id && (ret = prevState);
      !prevState && (ret = activeNavItem.id);

      return ret;
    });
  }, [activeNavItem]);
*/

  return (
    <ul
      className={cnSideNav(null, [className])}
    >
      {navItems && navItems.map(({id: navItemId, title, links}) => (
        <li
          key={navItemId}
          className={cnSideNav('Item', {
            active: isActive(navItemId),
            expanded: expandedItemId === navItemId
          })}
        >
          <SideNavTitle
            className={cnSideNav('Title')}
            handleNavItemClick={() => {
              setExpandedItemId(expandedItemId === navItemId ? '' : navItemId);
              handleNavItemClick(navItemId);
            }}
          >
            {title}
          </SideNavTitle>
          <SideNavContent
            className={cnSideNav('Content')}
            visible={expandedItemId === navItemId}
          >
            {links.map(({to, text}) => (
              <SideNavLink
                key={`${navItemId}-${to}`}
                href={to}
                active={to === activeNavItem.link}
                handleClick={(ev) => handleNavLinkClick({ev, navLinkId: to})}
              >
                {text}
              </SideNavLink>
            ))}
          </SideNavContent>
        </li>
      ))}
    </ul>
  );
};
