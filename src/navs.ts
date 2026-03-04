import { INavItem } from './blocks/SideNavIs4';

export const navSideMenu: INavItem[] = [
  {
    id: 'admin',
    title: 'Админка',
    links: [
      {to: '/admin/user/manage', text: 'Клиенты'},
      {to: '/admin/hist/spis', text: 'История списаний средств'},
      {to: '/admin/hist/pay', text: 'История пополнений средств'},
      {to: '/admin/hist/tariff', text: 'История тарифов'},
      {to: '/admin/hist/sess', text: 'История сессий'},
    ],
  },
  {
    id: 'main',
    title: 'Платежи',
    links: [
      {to: '/main/payment/in', text: 'Входящие'},
      {to: '/main/payment/sber', text: 'Сбер - загрузка выписки'},
      {to: '/main/payment/vtb', text: 'ВТБ - загрузка выписки'},
      {to: '/main/payment/uploads-removing', text: 'Удаление выгрузок'},
      {to: '/main/payment/debetor', text: 'Дебеторка'},
    ],
  },
  {
    id: 'contragent',
    title: 'Контрагенты',
    links: [
      {to: '/contragent/contragent/list', text: 'Контрагенты'},
      {to: '/contragent/contract/list', text: 'Договоры'},
      {to: '/contragent/group-companies/list', text: 'Группы компаний'},
      {to: '/contragent/types-property/list', text: 'Орг-правовые формы'},
      {to: '/contragent/types/list', text: 'Типы контрагентов'},
      {to: '/contragent/our-companies/list', text: 'Наши компании'},
    ],
  },
  {
    id: 'asterisk',
    title: 'Астериск',
    links: [
      {to: '/asterisk/provider/list', text: 'Список провайдеров'},
      {to: '/asterisk/provider/create', text: 'Создание провайдера'},
      {to: '/asterisk/account/list', text: 'Просмотр счетов'},
      {to: '/asterisk/cdr/statistic', text: 'CDR'},
      {to: '/asterisk/cdr/monitor', text: 'Мониторинг CDR'},
    ],
  },
  {
    id: 'resource',
    title: 'Ресурсы',
    links: [
      {to: '/resource/service/list', text: 'Услуги'},
      {to: '/resource/subservice/list', text: 'Доп. услуги'},
      {to: '/resource/tariff/list', text: 'Тарифы'},
      {to: '/resource/tarifftype/list', text: 'Виды услуг'},
    ],
  },
  {
    id: 'user',
    title: 'Сотрудники',
    links: [
      {to: '/user/user/list', text: 'Сотрудники'},
    ],
  },
];
