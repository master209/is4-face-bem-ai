# Пример рефакторинга: Tab блок

## Исходная структура (плоская)

```
Tab/
├── Tab.scss (88 строк)
├── Tab.tsx
└── index.ts
```

### Содержимое Tab.scss (фрагмент):
```scss
.Tab {
  &-Label {
    display: inline-block;
    margin-right: 5px;
    padding: 1px 10px;
    cursor: pointer;

    // Каскады!
    &_active { color: $white; background-color: $link--color; }
    &_inactive { color: $link--color; background-color: $white; }
  }

  &-Content {
    display: none;
    // ... стили ...

    // Каскады с другими блоками!
    .Button-Wrap { text-align: left; margin-bottom: 11px; }
    .Link { border-bottom: none; &:hover { ... } }

    // И еще каскады!
    &_active { display: block; }
    &_inactive { display: none; }
  }

  &-DiffTable {
    // Каскады внутри таблицы!
    .Tab-DiffLabel { font-weight: bold; ... }
  }
}
```

### Код компонента (фрагмент):
```tsx
// Тернарные операторы с inactive
className={`Tab-Label Tab-Label_${isActive ? 'active' : 'inactive'}`}
className={`Tab-Content Tab-Content_${isActive ? 'active' : 'inactive'}`}

// Каскады в HTML
<div className="Tab-Content">
  <div className="Button-Wrap">...</div>  // Каскад!
  <Link className="Link">...</Link>       // Каскад!
</div>
```

## Итоговая структура (БЭМ)

```
Tab/
├── Tab.scss (главный файл импортов)
├── Label/
│   ├── Tab-Label.scss (дефолтное состояние)
│   └── _active/
│       └── Tab-Label_active.scss (активное состояние)
├── Content/
│   ├── Tab-Content.scss (скрыт по умолчанию + контекстные стили)
│   └── _active/
│       └── Tab-Content_active.scss (показывается)
├── ButtonSet/Tab-ButtonSet.scss
├── LinkSet/Tab-LinkSet.scss
├── FieldLabel/Tab-FieldLabel.scss
├── DiffMarker/Tab-DiffMarker.scss
└── DiffTable/
    ├── Tab-DiffTable.scss
    └── Tab-DiffTableHeader.scss (вместо каскада)
```

### Главный файл Tab.scss:
```scss
@import "./Label/Tab-Label";
@import "./Content/Tab-Content";
@import "./ButtonSet/Tab-ButtonSet";
// ... остальные импорты
```

### Базовые файлы с импортами:
```scss
// Label/Tab-Label.scss
@import "./_active/Tab-Label_active";

.Tab-Label {
  // Дефолтные стили (неактивное состояние)
  color: $link--color;
  background-color: $white;
  // ...
}
```

### Код компонента (после рефакторинга):
```tsx
// Упрощенные селекторы
className={`Tab-Label${isActive ? ' Tab-Label_active' : ''}`}
className={`Tab-Content${isActive ? ' Tab-Content_active' : ''}`}

// Новые БЭМ-классы вместо каскадов
<div className="Tab-Content">
  <div className="Tab-ContentButton">
    <Button>...</Button>
  </div>
  <Link className="Tab-ContentLink">...</Link>
</div>
```

## Ключевые изменения

1. **Убрали модификатор `_inactive`** - дефолтное состояние в базовом классе
2. **Каскады → Плоские селекторы** - создали `Tab-ContentButton`, `Tab-ContentLink`
3. **Файловая структура** - каждый элемент/модификатор в отдельной папке
4. **Импорты** - модификаторы импортируются в базовые файлы элементов
5. **Самодостаточность** - каждый БЭМ-класс имеет собственные стили

## Результат
- ✅ Код компилируется без ошибок
- ✅ Внешний вид и функциональность сохранены
- ✅ Структура соответствует БЭМ
- ✅ Каскады устранены
- ✅ Поддерживаемость улучшена