// Test file to check if yandex-ui library imports work
import React from 'react';
import { configureRootTheme, theme } from './lib/yandex-ui/Theme';
import { Tooltip } from './lib/yandex-ui/Tooltip';
import { Modal } from './lib/yandex-ui/Modal';
import { Button } from './lib/yandex-ui/Button';
import { Attach } from './lib/yandex-ui/Attach';

const TestComponent = () => {
  return (
    <div>
      <h1>Yandex UI Test</h1>
      <Button>Button Test</Button>
      <Attach buttonText="Attach Test" />
    </div>
  );
};

export default TestComponent;