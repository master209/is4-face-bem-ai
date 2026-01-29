// заголовок грида в виде таблицы - для сверки сумм платежей - payment/in
export const Header = {
  type: 'table',
  date: '',
  data: {
    day: { // за день
      bank: { // по банковской выписке
        sumdaybank: ' ', // платежей на сумму
        countdaybank: ' ', // количество платежей
      },
      done: { // из них сверено
        sumdaydone: ' ',
        countdaydone: ' ',
      },
      bad: { // из них не подлежащих сверке
        sumdaybad: ' ',
        countdaybad: ' ',
      },
    },
    month: { // за месяц
      bank: {
        summonbank: ' ',
        countmonbank: ' ',
      },
      done: {
        summondone: ' ',
        countmondone: ' ',
      },
      bad: {
        summonbad: ' ',
        countmonbad: ' ',
      },
    },
  }
};
