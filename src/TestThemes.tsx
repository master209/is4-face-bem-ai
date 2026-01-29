import React, { useState, useRef } from 'react';
import { Tooltip } from './lib/yandex-ui/Tooltip';

const TestThemes: React.FC = () => {
  const [darkVisible, setDarkVisible] = useState(false);
  const [lightVisible, setLightVisible] = useState(false);

  const darkRef = useRef<HTMLButtonElement>(null);
  const lightRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={{
      padding: '50px',
      display: 'flex',
      gap: '20px',
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'white',
      border: '1px solid #ccc',
      zIndex: 9999
    }}>
      <button
        ref={darkRef}
        onMouseEnter={() => setDarkVisible(true)}
        onMouseLeave={() => setDarkVisible(false)}
        style={{ padding: '10px 20px' }}
      >
        Тёмная тема
      </button>

      <button
        ref={lightRef}
        onMouseEnter={() => setLightVisible(true)}
        onMouseLeave={() => setLightVisible(false)}
        style={{ padding: '10px 20px' }}
      >
        Светлая тема
      </button>

      <Tooltip
        anchor={darkRef}
        visible={darkVisible}
        theme="dark"
      >
        Тёмная тема: белый текст на чёрном фоне
      </Tooltip>

      <Tooltip
        anchor={lightRef}
        visible={lightVisible}
        theme="light"
      >
        Светлая тема: чёрный текст на сером фоне
      </Tooltip>
    </div>
  );
};

export default TestThemes;