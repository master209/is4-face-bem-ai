import { lazy } from 'react';

import { ILink } from './blocks/Nav';
import { IRouteItem } from './blocks/SideNavIs4';

import { HomeScreen, ShopScreen, WomenScreen, MenScreen } from './pages';

const UserManage = lazy(() => import('./pages/admin/user/manage'));
const HistSpis = lazy(() => import('./pages/admin/hist/spis'));
const HistPay = lazy(() => import('./pages/admin/hist/pay'));
const HistTariff = lazy(() => import('./pages/admin/hist/tariff'));
const HistSess = lazy(() => import('./pages/admin/hist/sess'));
const UserView = lazy(() => import('./pages/admin/user/View/View'));

const PaymentIn = lazy(() => import('./pages/main/payment/in'));
const PaymentUploadsRemoving = lazy(() => import('./pages/main/payment/UploadsRemoving'));
const PaymentSber = lazy(() => import('./pages/main/payment/Sber/Sber'));
const PaymentVtb = lazy(() => import('./pages/main/payment/Sber/Vtb'));
// const PaymentRaznos = lazy(() => import('./pages/main/payment/Raznos/Raznos'));

const ContragentList = lazy(() => import('./pages/contragent/contragent/list'));
const ContragentGroupCompaniesList = lazy(() => import('./pages/contragent/group-companies/list'));
const ContragentTypesPropertyList = lazy(() => import('./pages/contragent/types-property/list'));
const ContragentTypesList = lazy(() => import('./pages/contragent/types/list'));
const ContragentOurCompaniesList = lazy(() => import('./pages/contragent/our-companies/list'));

const AsteriskAccountList = lazy(() => import('./pages/asterisk/account/list'));
const AsteriskCdrMonitor = lazy(() => import('./pages/asterisk/cdr/monitor'));
const AsteriskCdrStatistic = lazy(() => import('./pages/asterisk/cdr/statistic'));
const AsteriskProviderList = lazy(() => import('./pages/asterisk/provider/list'));
const AsteriskProviderCreate = lazy(() => import('./pages/asterisk/provider/create'));

const ResourceServiceList = lazy(() => import('./pages/resource/service/list'));
const ResourceSubserviceList = lazy(() => import('./pages/resource/subservice/list'));
const ResourceTariffList = lazy(() => import('./pages/resource/tariff/list'));
const ResourceTariffTypeList = lazy(() => import('./pages/resource/tarifftype/list'));

const UserList = lazy(() => import('./pages/user/user/list'));

export const routsHeaderMenu: ILink[] = [
  {to: '', text: 'Home', page: HomeScreen},
  {to: 'shop', text: 'Shop', page: ShopScreen},
  {to: 'women', text: 'Women', page: WomenScreen},
  {to: 'men', text: 'Men', page: MenScreen},
  {to: 'find stores', text: 'Find stores', page: HomeScreen},
];

export const routsSideMenu: IRouteItem[] = [
  {
    module: 'admin',
    controllers: [
      {controller: 'users', actions: [
        {action: 'manage', page: UserManage},
        {action: 'view', param: 'id', page: UserView}
      ]},
      {controller: 'hist', actions: [
        {action: 'spis', page: HistSpis},
        {action: 'pay', page: HistPay},
        {action: 'tariff', page: HistTariff},
        {action: 'sess', page: HistSess},
      ]},
    ],
  },
  {
    module: 'main',
    controllers: [
      {controller: 'payment', actions: [
        {action: 'in', page: PaymentIn},
        {action: 'sber', page: PaymentSber},
        {action: 'vtb', page: PaymentVtb},
        {action: 'uploads-removing', page: PaymentUploadsRemoving},
        // {action: 'raznos', param: 'id', page: PaymentRaznos}
      ]},
    ],
  },
  {
    module: 'contragent',
    controllers: [
      {controller: 'contragent', actions: [
        {action: 'list', page: ContragentList}
      ]},
      {controller: 'group-companies', actions: [
        {action: 'list', page: ContragentGroupCompaniesList}
      ]},
      {controller: 'types-property', actions: [
        {action: 'list', page: ContragentTypesPropertyList}
      ]},
      {controller: 'types', actions: [
        {action: 'list', page: ContragentTypesList}
      ]},
      {controller: 'our-companies', actions: [
        {action: 'list', page: ContragentOurCompaniesList}
      ]},
    ],
  },
  {
    module: 'asterisk',
    controllers: [
      {controller: 'provider', actions: [
        {action: 'list', page: AsteriskProviderList},
        {action: 'create', page: AsteriskProviderCreate},
      ]},
      {controller: 'account', actions: [
        {action: 'list', page: AsteriskAccountList}
      ]},
      {controller: 'cdr', actions: [
        {action: 'statistic', page: AsteriskCdrStatistic},
        {action: 'monitor', page: AsteriskCdrMonitor},
      ]},
    ],
  },
  {
    module: 'resource',
    controllers: [
      {controller: 'service', actions: [
        {action: 'list', page: ResourceServiceList},
      ]},
      {controller: 'subservice', actions: [
        {action: 'list', page: ResourceSubserviceList},
      ]},
      {controller: 'tariff', actions: [
        {action: 'list', page: ResourceTariffList},
      ]},
      {controller: 'tarifftype', actions: [
        {action: 'list', page: ResourceTariffTypeList},
      ]},
    ],
  },
  {
    module: 'users',
    controllers: [
      {controller: 'users', actions: [
        {action: 'list', page: UserList},
      ]},
    ],
  },
];
