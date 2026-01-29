// Тест логики формирования queryString с учетом localStorage
const GRID_PER_PAGE = 'IS_GALS__GRID_PER_PAGE';

// Симуляция localStorage
global.localStorage = {
  getItem: (key) => key === GRID_PER_PAGE ? '10' : null
};

// Функция инициализации perPage (как в коде)
function getInitialPerPage(searchParams) {
  return searchParams.get('perPage') || localStorage.getItem(GRID_PER_PAGE) || '20';
}

// Функция формирования queryString (как в коде)
function buildQueryString(searchParams, statePerPage) {
  const params = new URLSearchParams();

  const sort = searchParams.get('sort') || '-id';
  const page = searchParams.get('page') || '1';
  const perPage = statePerPage; // Берем из state

  params.set('sort', sort);
  params.set('page', page);
  params.set('perPage', perPage);

  return params.toString();
}

console.log('=== ТЕСТ ЛОГИКИ queryString ===');

// Тест 1: Обычный заход (perPage из localStorage)
const searchParams1 = new URLSearchParams('');
const statePerPage1 = getInitialPerPage(searchParams1);
console.log('Тест 1 - state.perPage:', statePerPage1);
console.log('Тест 1 - queryString:', buildQueryString(searchParams1, statePerPage1));

// Тест 2: Заход по ссылке (perPage из URL имеет приоритет)
const searchParams2 = new URLSearchParams('?perPage=15&page=2');
const statePerPage2 = getInitialPerPage(searchParams2);
console.log('Тест 2 - state.perPage:', statePerPage2);
console.log('Тест 2 - queryString:', buildQueryString(searchParams2, statePerPage2));

// Тест 3: Сортировка и пагинация из URL
const searchParams3 = new URLSearchParams('?sort=id&page=3');
const statePerPage3 = getInitialPerPage(searchParams3);
console.log('Тест 3 - state.perPage:', statePerPage3);
console.log('Тест 3 - queryString:', buildQueryString(searchParams3, statePerPage3));