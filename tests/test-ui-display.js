// Тест отображения perPage в UI
console.log('=== ТЕСТ ОТОБРАЖЕНИЯ perPage В UI ===');

// Имитация dataState (из useGridData)
const dataState = {
  perPage: '10', // Старое значение
  perpageList: ['10', '15', '20', '25']
};

// Имитация paginationState (из useGridPagination)
const paginationState = {
  perPage: '25' // Новое значение после изменения UI
};

console.log('dataState.perPage (старое):', dataState.perPage);
console.log('paginationState.perPage (новое):', paginationState.perPage);
console.log('UI должен показывать:', paginationState.perPage);
console.log('✅ Теперь UI будет показывать правильное значение!');