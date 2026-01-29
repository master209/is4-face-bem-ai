# Новая архитектура компонента Grid

## 🎯 Обзор

Новая архитектура Grid реализована по **Compound Components паттерну** с разделением ответственности через **кастомные хуки**. Это обеспечивает лучшую тестируемость, читаемость и поддерживаемость кода.

## 📁 Структура файлов

```
src/blocks/Grid/
├── GridNew.tsx              # Основной компонент с compound components
├── hooks/
│   ├── useGridData.ts       # API и загрузка данных
│   ├── useGridFilters.ts    # Фильтры и сортировка
│   ├── useGridPagination.ts # Пагинация
│   ├── useGridSelection.ts  # Выбор строк
│   └── useUrlSync.ts        # Синхронизация с URL
├── hooks/index.ts           # Экспорты хуков
└── index.ts                 # Основные экспорты
```

## 🚀 Использование

### Базовый пример

```tsx
import { GridNew } from '../../../blocks/Grid';

const MyPage = () => (
  <GridNew url="users/manage">
    <GridNew.Header>
      <h2>Таблица пользователей</h2>
    </GridNew.Header>

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <GridNew.Shown />
      <GridNew.Reset />
    </div>

    <GridNew.Table />

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <GridNew.Pagination />
      <GridNew.PerPage />
    </div>
  </GridNew>
);
```

### С кастомными настройками

```tsx
<GridNew
  url="users/manage"
  initialSort="-created_at"
  initialPerPage="50"
>
  {/* Компоненты */}
</GridNew>
```

## 🛠️ API компонентов

### Grid (главный компонент)

```tsx
interface GridProps {
  url: string;                    // API endpoint
  children: ReactNode;            // Compound components
  initialSort?: string;           // Начальная сортировка (default: '-id')
  initialPerPage?: string;        // Начальное кол-во строк (default: '20')
  className?: string;             // CSS класс
}
```

### Compound Components

#### Grid.Header
Контейнер для заголовка таблицы.

#### Grid.Shown
Показывает "Показаны записи X-Y из Z".

#### Grid.Reset
Кнопка сброса фильтров и сортировки.

#### Grid.Table
Основная таблица с заголовками, фильтрами и данными.

#### Grid.Pagination
Навигация по страницам.

#### Grid.PerPage
Выпадающий список количества строк на странице.

## 🎣 Кастомные хуки

### useGridData

Управляет загрузкой и хранением данных.

```tsx
const { state, loadData, updateParams } = useGridData({
  url: 'users/manage',
  initialData: { /* начальные данные */ }
});

// state содержит все данные от API
// loadData() - принудительная перезагрузка
// updateParams() - обновление параметров
```

### useGridFilters

Управляет фильтрацией и сортировкой.

```tsx
const { state, updateSort, updateFilter, resetFilters } = useGridFilters({
  formName: 'Clients',
  tableFilter: filterConfig,
  initialSort: '-id'
});

// state.filters - текущие фильтры
// state.sort - текущая сортировка
// updateSort(column) - изменить сортировку
// updateFilter(field, value) - изменить фильтр
// resetFilters() - сбросить все
```

### useGridPagination

Управляет пагинацией.

```tsx
const { state, goToPage, changePerPage } = useGridPagination({
  rowsFiltered: 186,
  perpageList: ['10', '15', '20', '25'],
  initialPerPage: '20'
});

// state.page - текущая страница
// state.perPage - строк на странице
// goToPage(page) - перейти на страницу
// changePerPage(count) - изменить кол-во строк
```

### useGridSelection

Управляет выбором строк.

```tsx
const { state, selectRow, toggleRow, doubleClickRow } = useGridSelection({
  onRowDblClick: rowAction
});

// state.selectedRow - ID выбранной строки
// selectRow(id) - выбрать строку
// toggleRow(id) - переключить выбор
// doubleClickRow(row) - обработка двойного клика
```

### useUrlSync

Синхронизация с URL параметрами.

```tsx
const { searchParams, updateParams, getParam } = useUrlSync({
  initialParams: { sort: '-id', page: '1' }
});

// searchParams - объект URLSearchParams
// updateParams(updates) - обновить параметры
// getParam(key) - получить параметр
```

## 🔄 Миграция со старой архитектуры

### Была:
```tsx
const { state, dispatch } = useAsSearch('users/manage');

return (
  <GridStateContext.Provider value={{ state, dispatch }}>
    <Grid />
  </GridStateContext.Provider>
);
```

### Стала:
```tsx
return (
  <GridNew url="users/manage">
    <GridNew.Table />
    <GridNew.Pagination />
  </GridNew>
);
```

## ✅ Преимущества новой архитектуры

### 1. **Разделение ответственности**
- Каждый хук отвечает за свою область
- Компоненты не знают о глобальном состоянии

### 2. **Легкость тестирования**
- Хуки можно тестировать изолированно
- Меньше моков и зависимостей

### 3. **Compound Components паттерн**
- Декларативное API
- Гибкая композиция компонентов

### 4. **Лучшая типизация**
- Строгие типы для каждого хука
- Автодополнение в IDE

### 5. **Производительность**
- Таргетированные ререндеры
- Меньше пропсов-дриллинга

## 🔧 Совместимость

✅ **Полная обратная совместимость**
- Старые компоненты продолжают работать
- API контракты не изменены
- URL паттерны сохранены
- Пользовательский опыт идентичен

## 📝 Следующие шаги

1. **Тестирование** - проверить все сценарии использования
2. **Документация** - обновить JSDoc комментарии
3. **Примеры** - создать больше примеров использования
4. **Миграция** - постепенно перейти на новую архитектуру