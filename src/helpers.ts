// преобразует массив объектов в коллекцию объектов с ключом byKey
/*export const convertArrayToMap = (arr:any, byKey: string) =>
  arr.reduce((acc: any, next: any) =>
    ({...acc, [next[byKey]]: next}), {}); */

const ID_LEN = 4;
// генерит уникальный числовой ID длиной ID_LEN
export const getUniqueId = (len = ID_LEN): number =>
  parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(len).toString().replace('.', ''), 10);

export const getFormattedDate = (date: string) =>
  new Date(date).toLocaleDateString('en', { month: 'long', year: 'numeric'});

export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

// приводит булево значение isFavorite к инвертированному числовому значению offerStatus (0/1)
export const getOfferStatus = (isFavorite: boolean): number => +!isFavorite;

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

// преобразует число секунд в формат MM:SS
export const toTimeString = (seconds?:number) =>
  seconds && new Date(seconds * 1000).toISOString().substr(14, 5);

// время сейчас в UNIX-time в сек.
export const nowUNIXtime = () => Math.trunc(Date.now() / 1000);

// время UNIX-time в сек, когда пора разлогинивать в случае превышения порога бездействия userInactivityMaxTimeout
export const userInactivityLogoutTime = (userInactivityMaxTimeout: number) =>
  userInactivityMaxTimeout * 60 + nowUNIXtime();

type BoolList = {
  [key: string]: string;
}

// сортировка объекта в порядке возрастания его ключей (свойств)
export const sortObject = (obj: BoolList) => {
  return Object.keys(obj).sort().reduce(function (result: BoolList, key: string) {
    result[key] = obj[key];
    return result;
  }, {});
};
