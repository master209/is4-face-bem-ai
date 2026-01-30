import React, { FC, ChangeEvent, useRef, useState, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

import './Attach.scss';

const cnAttach = cn('Attach');

// Расширение файла -> тип иконки
const extensionsMap: { [key: string]: string } = {
  '7z': 'archive',
  avi: 'avi',
  doc: 'doc',
  docx: 'doc',
  eml: 'eml',
  exe: 'exe',
  flv: 'video',
  gif: 'gif',
  gz: 'archive',
  jpeg: 'jpg',
  jpg: 'jpg',
  m4a: 'audio',
  mov: 'mov',
  mp3: 'mp3',
  mp4: 'mp4',
  ogg: 'audio',
  pdf: 'pdf',
  png: 'png',
  ppt: 'ppt',
  rar: 'archive',
  tar: 'archive',
  txt: 'txt',
  wav: 'wav',
  wma: 'wma',
  wmv: 'wmv',
  xls: 'xls',
  xlsx: 'xls',
  zip: 'archive',
};

export interface IAttachProps extends IClassNameProps {
  children?: React.ReactNode;
  multiple?: boolean;
  accept?: string;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClearClick?: () => void;
  buttonText?: string;
  hasHolder?: boolean;
  holderText?: string;
  holderTextWidth?: number;
  view?: string;
  size?: string;
  name?: string;
  id?: string;
}

type AttachState = {
  fileName?: string;
  fileExtension?: string;
};

export const Attach: FC<IAttachProps> = ({
  children,
  multiple = false,
  accept,
  disabled = false,
  onChange,
  onClearClick,
  buttonText = 'Выбрать файл',
  hasHolder = true,
  holderText = 'файл не выбран',
  holderTextWidth,
  view,
  size,
  name,
  id,
  className,
}) => {
  const [{ fileName, fileExtension }, setFileMeta] = useState<AttachState>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = id || `xuniq-${Math.random().toString(36).substr(2, 9)}`;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    if (!isDialogOpen && inputRef.current) {
      setIsDialogOpen(true);
      inputRef.current.click();
    }
  };

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      // Извлекаем имя файла и расширение
      const fileName = file.name;
      const rawFileExtension = fileName.split('.').pop()?.toLowerCase() || '';
      const fileExtension = extensionsMap[rawFileExtension] || 'unknown';

      setFileMeta({ fileName, fileExtension });

      // Вызываем внешний обработчик
      onChange?.(event);
    }

    // Диалог закрыт
    setIsDialogOpen(false);
  }, [onChange]);

  const handleClearClick = useCallback(() => {
    // Очищаем состояние
    setFileMeta({ fileName: undefined, fileExtension: undefined });
    setIsDialogOpen(false);

    // Вызываем внешний обработчик очистки
    onClearClick?.();
  }, [onClearClick]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <span className={cnAttach(null, [className])}>
      <span
        aria-label={buttonText}
        tabIndex={disabled ? -1 : 0}
        className={`Button2 Button2_size_${size || 'm'} Button2_view_${view || 'default'} Attach-Button`}
        role="button"
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
      >
        <span className="Button2-Text">{children || buttonText}</span>
        <input
          ref={inputRef}
          autoComplete="off"
          className="Attach-Control"
          id={uniqueId}
          name={name || 'file'}
          tabIndex={-1}
          type="file"
          multiple={multiple}
          accept={accept}
          disabled={disabled}
          onChange={handleInputChange}
        />
      </span>
      {hasHolder && (
        <span
          aria-hidden="true"
          className={cnAttach('Holder', { file: fileExtension })}
        >
          {fileExtension && <span className={cnAttach('IconFile')} />}
          <label
            style={{ width: fileExtension && holderTextWidth ? `${holderTextWidth}px` : undefined }}
            className={cnAttach('Text')}
            htmlFor={uniqueId}
          >
            {fileName || holderText}
          </label>
          {fileExtension && (
            <span
              className={cnAttach('Reset')}
              onClick={handleClearClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClearClick();
                }
              }}
            />
          )}
        </span>
      )}
    </span>
  );
};