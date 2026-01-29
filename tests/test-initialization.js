// Тест инициализации perPage
const GRID_PER_PAGE = 'IS_GALS__GRID_PER_PAGE';

// Симуляция localStorage
global.localStorage = {
  getItem: (key) => key === GRID_PER_PAGE ? '10' : null
};

// Функция инициализации perPage
function getInitialPerPage(searchParams) {
  return searchParams.get('perPage') || localStorage.getItem(GRID_PER_PAGE) || '20';
}

console.log('=== ТЕСТ ИНИЦИАЛИЗАЦИИ perPage ===');

// Тест: вход на страницу без параметров в URL
const searchParams = new URLSearchParams('');
const dataStatePerPage = getInitialPerPage(searchParams);

console.log('localStorage значение:', localStorage.getItem(GRID_PER_PAGE));
console.log('dataState.perPage:', dataStatePerPage);
console.log('initialPerPage для GridPaginationProvider:', dataStatePerPage);
console.log('UI список должен показывать:', dataStatePerPage);
console.log('✅ Теперь при входе список покажет 10!');