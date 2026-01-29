// Простой тест новой логики инициализации perPage
const GRID_PER_PAGE = 'IS_GALS__GRID_PER_PAGE';

// Симуляция localStorage для теста
global.localStorage = {
  getItem: (key) => key === GRID_PER_PAGE ? '10' : null,
  setItem: () => {},
  removeItem: () => {}
};

// Функция инициализации (как в коде)
function getInitialPerPage(searchParams) {
  return searchParams.get('perPage') || localStorage.getItem(GRID_PER_PAGE) || '20';
}

console.log('=== ТЕСТ ПРОСТОЙ ЛОГИКИ perPage ===');

// Тест 1: URL имеет perPage (приоритет URL)
const urlParams1 = new URLSearchParams('?perPage=15&page=1');
console.log('Тест 1 (URL perPage=15):', getInitialPerPage(urlParams1));

// Тест 2: URL пустой, берем из localStorage
const urlParams2 = new URLSearchParams('?page=1');
console.log('Тест 2 (localStorage=10):', getInitialPerPage(urlParams2));

// Тест 3: Ничего нет, дефолт
global.localStorage.getItem = () => null;
const urlParams3 = new URLSearchParams('?page=1');
console.log('Тест 3 (дефолт):', getInitialPerPage(urlParams3));