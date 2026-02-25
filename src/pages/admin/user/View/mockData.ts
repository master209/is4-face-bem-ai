import { IDataConfig } from './Data';

export const mockUserViewData = {
  loading: false,
  pageHeader: {
    username: { lab: "Логин", val: "9173172699" },
    balance: { lab: "Баланс по договору", val: 15.67 },
    userStatus: { lab: "Статус юзера", val: "активен" },
    serviceStatus: { lab: "Статус услуги", val: "Активно" }
  },
  tabActive: 'user',
  tabs: [
    {
      id: "user",
      name: "Юзер",
      type: "fields" as const,
      fields: [
        { key: "id", label: "Service ID", value: "247" },
        { key: "userId", label: "User ID", value: "94" },
        { key: "username", label: "Логин", value: "9173172699" },
        { key: "lastname", label: "Фамилия", value: "Ниндзя" },
        { key: "firstname", label: "Имя", value: "Неранжан" },
        { key: "userStatus", label: "Статус юзера", value: "активен" }
      ],
      buttons: [
        {
          id: "synchronize",
          label: "Синхронизировать данные в базах",
          handlerUrl: "synchronize-data"
        }
      ]
    },
    {
      id: "service",
      name: "Услуга",
      type: "fields" as const,
      fields: [
        { key: "serviceName", label: "Название услуги", value: "Интернет" },
        { key: "radUsername", label: "Логин из Радиуса", value: "9173172699" },
        { key: "radGroup", label: "Группа из Радиуса", value: "group_internet" },
        { key: "isBalance", label: "Баланс по договору", value: 15.67 },
        { key: "isServiceStatus", label: "Статус услуги", value: "Активно" },
        { key: "isTariff", label: "Тариф", value: "Студенческий безлимит 40М" },
        { key: "isAbonCost", label: "Абон. плата без НДС, руб.", value: 650 },
        { key: "isAbonCostNDS", label: "Абон. плата с НДС, руб.", value: 660.72 },
        { key: "isRate", label: "Скорость интернета, Мбит/с", value: 40 }
      ],
      buttons: [
        {
          id: "lockService",
          label: "Заблокировать услугу административно",
          handlerUrl: "lock-service"
        }
      ]
    },
    {
      id: "radius",
      name: "Радиус",
      type: "fields" as const,
      fields: [
        { key: "radUsername", label: "Логин из Радиуса", value: "9173172699" },
        { key: "radGroup", label: "Группа из Радиуса", value: "group_internet" },
        { key: "radPassword", label: "Пароль к услуге из Радиуса", value: "ehpxbw3qKK" }
      ],
      buttons: [
        {
          id: "resetSessRadius",
          label: "Сбросить сессию",
          handlerUrl: "reset-sess",
          payload: "username"
        }
      ]
    },
    {
      id: "payments_history",
      name: "История списаний средств",
      type: "table" as const,
      columns: [
        { key: "id", label: "id" },
        { key: "s_internet_id", label: "ID услуги" },
        { key: "numberContract", label: "Номер договора" },
        { key: "tariffName", label: "Тариф" },
        { key: "payNameShort", label: "За что списано" },
        { key: "dateAccural", label: "Дата за которую списано" },
        { key: "counts", label: "Кол-во" },
        { key: "cost", label: "Цена за единицу" },
        { key: "amount", label: "Сумма списания" }
      ],
      rows: [
        {
          id: "28337",
          s_internet_id: "50208",
          numberContract: "ОФ64",
          tariffName: "Студенческий безлимит 40М",
          payNameShort: "Ежемесячная абон.плата",
          dateAccural: "11-02-2026",
          counts: "1",
          cost: "23.21",
          amount: "23.21"
        },
        {
          id: "28252",
          s_internet_id: "50208",
          numberContract: "ОФ64",
          tariffName: "Студенческий безлимит 40М",
          payNameShort: "Ежемесячная абон.плата",
          dateAccural: "10-02-2026",
          counts: "1",
          cost: "23.21",
          amount: "23.21"
        }
      ],
      links: [
        {
          label: "Полная история списаний средств",
          url: "/admin/hist/spis?sort=-id&page=1&BAccural[username]=9173172699"
        }
      ]
    },
    {
      id: "recharges_history",
      name: "История пополнений средств",
      type: "table" as const,
      columns: [
        { key: "id", label: "id" },
        { key: "resultUrlTime", label: "Время запроса на оплату" },
        { key: "spisDate", label: "Время оплаты по данным от банка" },
        { key: "spisAmount", label: "Сумма, руб." }
      ],
      rows: [
        {
          id: "1073",
          resultUrlTime: "19-01-2026 21:59:31",
          spisDate: "19-01-2026 20:59:29",
          spisAmount: "660.72"
        },
        {
          id: "973",
          resultUrlTime: "19-12-2025 11:07:33",
          spisDate: "19-12-2025 10:07:31",
          spisAmount: "500"
        }
      ],
      links: [
        {
          label: "Полная история пополнений средств",
          url: "/admin/hist/pay?sort=-id&page=1&PayLog[username]=9173172699"
        }
      ]
    },
    {
      id: "tariffs_history",
      name: "История тарифов",
      type: "table" as const,
      columns: [
        { key: "tariffName", label: "Название тарифа" },
        { key: "startDate", label: "Дата включения" },
        { key: "endDate", label: "Дата отключения" }
      ],
      rows: [
        {
          tariffName: "Студенческий безлимит 40М",
          startDate: "20-01-2026",
          endDate: ""
        },
        {
          tariffName: "Студенческий безлимит 20М",
          startDate: "20-12-2025",
          endDate: "19-01-2026"
        }
      ],
      links: [
        {
          label: "Полная история тарифов",
          url: "/admin/hist/tariff?sort=-id&page=1&Clients[username]=9173172699"
        }
      ]
    },
    {
      id: "sessions_history",
      name: "История сессий",
      type: "table" as const,
      columns: [
        { key: "id", label: "ID" },
        { key: "acctstarttime", label: "acctstarttime" },
        { key: "acctupdatetime", label: "acctupdatetime" },
        { key: "acctstoptime", label: "acctstoptime" },
        { key: "acctsessiontime", label: "acctsessiontime" },
        { key: "acctinputoctets", label: "acctinputoctets,MB" },
        { key: "acctoutputoctets", label: "acctoutputoctets,MB" },
        { key: "nasportid", label: "Адрес" },
        { key: "callingstationid", label: "MAC" },
        { key: "framedipaddress", label: "IP" },
        { key: "acctterminatecause", label: "Причина заверш сессии" }
      ],
      rows: [
        {
          id: "65849",
          acctstarttime: "11-02-2026 07:00:19",
          acctupdatetime: "12-02-2026 18:40:19",
          acctstoptime: "",
          acctsessiontime: "01дн,  11ч 40м 00с",
          acctinputoctets: 1167.3,
          acctoutputoctets: 13504,
          nasportid: "eth1.1302",
          callingstationid: "98:DE:D0:89:F1:95",
          framedipaddress: "172.16.7.189",
          acctterminatecause: null
        },
        {
          id: "64528",
          acctstarttime: "09-02-2026 16:45:53",
          acctupdatetime: "11-02-2026 06:59:49",
          acctstoptime: "11-02-2026 06:59:49",
          acctsessiontime: "01дн,  14ч 13м 56с",
          acctinputoctets: 2232.4,
          acctoutputoctets: 14188.7,
          nasportid: "eth1.1302",
          callingstationid: "98:DE:D0:89:F1:95",
          framedipaddress: "172.16.7.189",
          acctterminatecause: "Lost-Carrier"
        }
      ],
      buttons: [
        {
          id: "resetSess",
          label: "Сбросить сессию",
          handlerUrl: "reset-sess",
          payload: "username"
        }
      ],
      links: [
        {
          label: "Полная история сессий",
          url: "/admin/hist/sess?sort=-id&page=1&Radacct[username]=9173172699"
        }
      ]
    },
    {
      id: "differences",
      name: "Расхождения в базах",
      type: "diff" as const,
      diffData: []
    }
  ],
  currentTime: "18:42:19"
};