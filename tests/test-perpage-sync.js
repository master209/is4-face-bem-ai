// Тест синхронизации perPage между state и URL
const GRID_PER_PAGE = 'IS_GALS__GRID_PER_PAGE';

// Симуляция localStorage
global.localStorage = {
  getItem: (key) => key === GRID_PER_PAGE ? '10' : null
};

// Функция инициализации (как в коде)
function getInitialPerPage(searchParams) {
  return searchParams.get('perPage') || localStorage.getItem(GRID_PER_PAGE) || '20';
}

// Функция формирования queryString (как в коде)
function buildQueryString(searchParams, statePerPage) {
  const params = new URLSearchParams();

  const sort = searchParams.get('sort') || '-id';
  const page = searchParams.get('page') || '1';
  const perPage = statePerPage;

  params.set('sort', sort);
  params.set('page', page);
  params.set('perPage', perPage);

  return params.toString();
}

console.log('=== ТЕСТ СИНХРОНИЗАЦИИ perPage ===');

// Тест 1: Инициализация с localStorage
const searchParams1 = new URLSearchParams('');
let statePerPage1 = getInitialPerPage(searchParams1);
console.log('Инициализация - state.perPage:', statePerPage1);
console.log('queryString:', buildQueryString(searchParams1, statePerPage1));

// Тест 2: Изменение через UI (обновление URL)
const searchParams2 = new URLSearchParams('?perPage=25&page=1');
const urlPerPage2 = searchParams2.get('perPage');
if (urlPerPage2 && urlPerPage2 !== statePerPage1) {
  statePerPage1 = urlPerPage2; // Синхронизация state с URL
}
console.log('После изменения UI - state.perPage:', statePerPage1);
console.log('queryString:', buildQueryString(searchParams2, statePerPage1));

// Тест 3: localStorage сохраняется для будущих сессий
const searchParams3 = new URLSearchParams('');
let statePerPage3 = getInitialPerPage(searchParams3);
console.log('Новая сессия - state.perPage:', statePerPage3);
console.log('queryString:', buildQueryString(searchParams3, statePerPage3));