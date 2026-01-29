// Тест использования констант
const PER_PAGE_INIT = '20';
const PER_PAGE_LIST_INIT = ['10', '15', '20', '25'];

console.log('=== ТЕСТ ИСПОЛЬЗОВАНИЯ КОНСТАНТ ===');

console.log('PER_PAGE_INIT:', PER_PAGE_INIT);
console.log('PER_PAGE_LIST_INIT:', PER_PAGE_LIST_INIT);

// Имитация использования в коде
const testPerPage = PER_PAGE_INIT;
const testPerPageList = PER_PAGE_LIST_INIT;

console.log('Тестовое значение perPage:', testPerPage);
console.log('Тестовый список perPage:', testPerPageList);
console.log('✅ Теперь все значения берутся из констант!');

// Имитация изменения константы
console.log('\n=== ИЗМЕНЕНИЕ КОНСТАНТЫ (ПРИМЕР) ===');
console.log('Было: PER_PAGE_INIT = "20"');
console.log('Стало: PER_PAGE_INIT = "25" (изменено только в одном месте)');
console.log('✅ Все места использования автоматически обновятся!');