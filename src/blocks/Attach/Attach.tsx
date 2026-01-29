import { compose } from '@bem-react/core';
import { withRegistry, Registry } from '@bem-react/di';

import {
  Button as ButtonDesktop,
  withSizeM as withButtonSizeM,
  withViewDefault as withButtonViewDefault,
} from '@yandex/ui/Button/desktop';

import { cnAttach, Attach as AttachDesktop } from '@yandex/ui/Attach/desktop';

import './Attach.scss';

const Button = compose(withButtonSizeM, withButtonViewDefault)(ButtonDesktop);

const attachRegistry = new Registry({ id: cnAttach() });
attachRegistry.set('Button', Button);

export const Attach = withRegistry(attachRegistry)(AttachDesktop);

