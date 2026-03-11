const ID_LEN = 4;
// генерит уникальный числовой ID длиной ID_LEN
export const getUniqueId = (len = ID_LEN): number =>
  parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(len).toString().replace('.', ''), 10);

export const getFormattedDate = (date: string) =>
  new Date(date).toLocaleDateString('en', { month: 'long', year: 'numeric'});

export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

export const getAction = (action: string, param: string | undefined): string =>
  param ? `${action}/:${param}` : action;

export const cellHidden = (key: string) => key === 'id' ? 'Hidden' : '';

// для округления денег до копеек в меньшую сторону
export const round = (sum: number): number => Math.round( sum * 100 ) / 100;

export const boolYesNo = (bool: boolean) => bool ? 'да' : 'нет';
export const numYesNo = (num: number) => num > 0 ? 'да' : 'нет';

// преобразует +7 912 345 6789 к 9123456789
export const normPhone = (phone: string) =>
  phone
    .replace(/\D/g, '') // убираю все, кроме цифр
    .substring(1); // отбрасываю первую 7 - код России

export const normSmsCode = (code = '-') =>
  code.replace(/\D/g, ''); // убираю все, кроме цифр

// сортировка объекта в порядке возрастания его ключей (свойств)
export const sortObject = <T extends Record<string, unknown>>(obj: T): T => {
  return Object.keys(obj).sort().reduce(function (result: Record<string, unknown>, key: string) {
    result[key] = obj[key];
    return result;
  }, {}) as T;
};
