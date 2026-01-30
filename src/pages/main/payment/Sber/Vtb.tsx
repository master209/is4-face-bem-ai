import React, { FC, ChangeEvent, useState, useEffect } from 'react';

import { IClassNameProps } from '@bem-react/core';

import { cnBank, FileAttach } from '.';
import { Button } from '../../../../blocks/Button';
import { BACKEND_URL } from '../../../../services/api';
import { getToken } from '../../../../services/token';

import './Bank.scss';

type Data = {
  result: string;
};

const Vtb: FC<IClassNameProps> = () => {
  const [file, setFile] = useState<File>();
  const [result, setResult] = useState<string>('');

  const handleFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files && ev.target.files.length > 0) {
      setFile(ev.target.files[0]);
    } else {
      // Сброс файла (когда крестик нажат)
      setFile(undefined);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    fetch(`${BACKEND_URL}/banks-payment/vtb-upload`, {
      method: 'POST',
      body: file,
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': file.type,
        'Content-Length': `${file.size}`
      }
    })
      .then((res) => res.json())
      .then((data:Data) => {
        setResult(data.result);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  const renderResult = (): string => {
    switch (result) {
      case 'ok\n':
        return 'Платежи вгружены успешно.';
      case 'double\n':
        return 'Удалите файл загрузки и обратитесь к программистам: платежи вгружены, но есть платежи с признаками задвоения, которые фактически не задвоенные.';
      case 'errordate\n':
        return 'Ошибка. Выгрузка за сегодняшний или завтрашний день. Операция отменена.';
      case 'errortime\n':
        return 'Ошибка. Выгрузка за предыдущий день создана раньше 10:00 утра. Операция отменена.';
      case 'intersection\n':
        return 'Ошибка. повторная загрузка за какой-то день. Операция отменена.';
      case 'erraccount\n':
        return 'Ошибка. Неизвестный лицевой счет. Операция отменена.';
      case 'err\n':
        return 'При загрузке данных произошла ошибка';

      default:
        return 'Что-то пошло не так';
    }
  };

  const classError = result === 'ok\n' ? '' : 'Error';

  useEffect(() => {
    !file && setResult('');
  }, [file]);

  useEffect(() => {
    renderResult();
  }, [result]);

  return (
    <div className={cnBank()}>
      <h1>Загрузка выписки по ВТБ</h1>
        <div className="Upload">
          <FileAttach name="file" onChange={handleFileChange}/>
            <p><Button onClick={handleUploadClick} disabled={!file || !!result}>Подтвердить</Button></p>
        </div>
      <div className={`Result ${classError}`}>
        {result && renderResult()}
      </div>
    </div>
  );
};

export default Vtb;
