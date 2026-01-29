import { withRegistry, Registry } from '@bem-react/di';

import { Header as HeaderCommon, cnHeader } from '.';
import { HeaderLogo } from './Logo/Header-Logo';

const headerRegistry = new Registry({ id: cnHeader() });
headerRegistry.set('HeaderLogo', HeaderLogo);

export const Header = withRegistry(headerRegistry)(HeaderCommon);
