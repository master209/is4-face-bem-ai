// Тест финальной логики perPage
const GRID_PER_PAGE = 'IS_GALS__GRID_PER_PAGE';

// Симуляция localStorage
global.localStorage = {
  getItem: (key) => key === GRID_PER_PAGE ? '10' : null
};

// Функция инициализации perPage (как в коде)
function getInitialPerPage(searchParams) {
  return searchParams.get('perPage') || localStorage.getItem(GRID_PER_PAGE) || '20';
}

// Функция формирования queryString (обновленная логика)
function buildQueryString(searchParams, statePerPage) {
  const params = new URLSearchParams();

  const sort = searchParams.get('sort') || '-id';
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('perPage') || statePerPage; // URL first, then state

  params.set('sort', sort);
  params.set('page', page);
  params.set('perPage', perPage);

  return params.toString();
}

console.log('=== ТЕСТ ФИНАЛЬНОЙ ЛОГИКИ perPage ===');

// Тест 1: Начальная загрузка (perPage из localStorage)
const searchParams1 = new URLSearchParams('');
const statePerPage1 = getInitialPerPage(searchParams1);
console.log('Начальная загрузка:');
console.log('  state.perPage:', statePerPage1);
console.log('  queryString:', buildQueryString(searchParams1, statePerPage1));

// Тест 2: Изменение через UI (URL обновлен)
const searchParams2 = new URLSearchParams('?perPage=25&page=1');
const statePerPage2 = getInitialPerPage(searchParams2); // state обновится на 25
console.log('После изменения UI:');
console.log('  state.perPage:', statePerPage2);
console.log('  queryString:', buildQueryString(searchParams2, statePerPage2));

// Тест 3: Заход по закладке (URL имеет perPage)
const searchParams3 = new URLSearchParams('?perPage=15&page=1&sort=id');
const statePerPage3 = getInitialPerPage(searchParams3);
console.log('Заход по закладке:');
console.log('  state.perPage:', statePerPage3);
console.log('  queryString:', buildQueryString(searchParams3, statePerPage3));