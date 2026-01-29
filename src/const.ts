export const BASE_URL = 'https://is4.gals-telecom.ru';
export const TITLE_FREFIX = 'ИС4 “Галс-Телеком” - ';
export const IMG_PATH = '/img/';
export const DOC_PATH = '/doc/';
export const PASSW_MIN = 8;
export const PASSW_MAX = 20;
export const PASSW_REGEXP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]+$/;
export const PHONE_LEN = 10; // длина телефонного номера без +7
export const SMS_CODE_LEN = 5; // длина СМС-кода подтверждения

export const ROUTE_MENU_POSITION = 1; // позиция элемента-меню в URL вида - quick-start/Введение
export const ROUTE_SUBMENU_POSITION = 2; // позиция элемента подменю

export const DBL_CLICK_DELAY = 280; // интервал в мс между одинарным и двойным кликом
export const USER_INACTIVITY_MAX_TIMEOUT = 15; // максимально допустимое время бездействия пользователя, после которого происходит принудительное разлогинивание (в мин)

export enum NameSpace {
  Main = 'MAIN',
  User = 'USER',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Main = '/',
  Auth = '/auth',
  NotFound = '/not-found-screen'
}

export enum APIRoute {
  Auth = '/auth',
  CheckAuth = '/check-auth',
  Logout = '/logout',
  CanUser = '/users/can-user'
}

export const FormError = {
  Required: 'Поле обязательно для заполнения',
  PasswordTooShort: `Не менее ${PASSW_MIN} символов`,
  PasswordTooLong: `Не более ${PASSW_MAX} символов`,
  PasswordTooSimple: `Пароль должен обязательно содержать цифры, а также большие и маленькие латинские буквы`,
  PasswordsMustMatch: 'Пароли должны совпадать',
  // LoginIncorrect = 'Поле «Логин» заполнено неверно',
  PhoneIncorrect: 'Некорректный номер телефона',
  PhoneTooShort: 'Укажите полный номер телефона',
};

export enum Color {
  Normal = 'Normal',
  Warning = 'Warning',
  Cancel = 'Cancel',
}
