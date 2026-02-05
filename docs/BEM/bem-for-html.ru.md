HTML по БЭМ
===========

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#html-%D0%BF%D0%BE-%D0%B1%D1%8D%D0%BC)

В БЭМ HTML-разметку можно создавать [вручную](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-html-%D0%B2%D1%80%D1%83%D1%87%D0%BD%D1%83%D1%8E) или [генерировать автоматически](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F-html). Принципы организации HTML-кода в обоих случаях одинаковы:

*   [Привязка блоков к DOM-узлу](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%9F%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D0%BA%D0%B0-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2-%D0%BA-dom-%D1%83%D0%B7%D0%BB%D1%83)
*   [Вложенность элементов](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%92%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2)
*   [Использование HTML-оберток](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-html-%D0%BE%D0%B1%D0%B5%D1%80%D1%82%D0%BE%D0%BA)

Привязка блоков к DOM-узлу
--------------------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%BF%D1%80%D0%B8%D0%B2%D1%8F%D0%B7%D0%BA%D0%B0-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2-%D0%BA-dom-%D1%83%D0%B7%D0%BB%D1%83)

Разметка страницы описывается в терминах [блоков](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%BB%D0%BE%D0%BA), [элементов](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82) и [модификаторов](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80).

Чтобы указать, что блок, элемент или модификатор находятся на DOM-узле, их имена записываются в атрибуте `class`.

В простейшем случае одному DOM-узлу соответствует один блок:

<span class\="menu"\></span\>

### Несколько блоков на одном DOM-узле

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%BE%D0%B4%D0%BD%D0%BE%D0%BC-dom-%D1%83%D0%B7%D0%BB%D0%B5)

Чтобы совместить стили и поведение нескольких [БЭМ-сущностей](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%AD%D0%9C-%D1%81%D1%83%D1%89%D0%BD%D0%BE%D1%81%D1%82%D1%8C), необходимо разместить их на одном DOM-узле. Для этого в значении атрибута `class` указываются имена БЭМ-сущностей, разделенные пробелом. Такой подход называется [миксом](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9C%D0%B8%D0%BA%D1%81).

Микс используется, например, чтобы добавить блоку или элементу модификатор. В примере ниже к стилям блока `menu` добавлены новые стили модификатора этого блока `menu_theme_bright`:

<span class\="menu menu\_theme\_bright"\></span\>

> [Читать подробнее про миксы](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-css/bem-for-css.ru.md#%D0%9C%D0%B8%D0%BA%D1%81%D1%8B)

### Один блок на нескольких DOM-узлах

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%BE%D0%B4%D0%B8%D0%BD-%D0%B1%D0%BB%D0%BE%D0%BA-%D0%BD%D0%B0-%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85-dom-%D1%83%D0%B7%D0%BB%D0%B0%D1%85)

Для решения JavaScript-задач, например, для одновременной инициализации одного экземпляра блока в разных частях страницы, одну БЭМ-сущность можно разместить на нескольких DOM-узлах.

> Пример включает особенности реализации фреймворка i-bem.js. [Читать подробнее про i-bem.js](https://ru.bem.info/platform/i-bem/html-binding/#%D0%9E%D0%B4%D0%B8%D0%BD-js-%D0%B1%D0%BB%D0%BE%D0%BA-%D0%BD%D0%B0-%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85-html-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%85)

Вложенность элементов
---------------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2)

[Правила именования](https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.ru.md#%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BC%D0%B5%D0%BD) [запрещают](https://github.com/bem-site/bem-method/blob/bem-info-data/faq/faq.ru.md#%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%BD%D0%B5-%D1%81%D1%82%D0%BE%D0%B8%D1%82-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D1%82%D1%8C-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-block__elem1__elem2) отражать иерархию в названии элемента (`block__elem1__elem2`). Но в HTML элементы можно вкладывать друг в друга. Допустима любая вложенность элементов.

В примере ниже пункты меню представлены ссылками. Такая структура блока реализуется за счет вложенности элементов:

<ul class\="menu"\>
    <li class\="menu\_\_item"\>
        <a class\="menu\_\_link" href\="https://"\>...</a\>
    </li\>
</ul\>

Использование HTML-оберток
--------------------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-html-%D0%BE%D0%B1%D0%B5%D1%80%D1%82%D0%BE%D0%BA)

Чтобы [расположить один блок относительно другого](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0-%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE-%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D1%85-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2) или [позиционировать блоки внутри другого блока](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-html-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B8-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0) в БЭМ принято использовать [миксы](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9C%D0%B8%D0%BA%D1%81). Если решить эти задачи с помощью миксов невозможно, применяются HTML-обертки.

### Расположение блока относительно других блоков

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0-%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE-%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D1%85-%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2)

Чтобы позиционировать один блок относительно другого блока, используется [микс](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9C%D0%B8%D0%BA%D1%81).

В примере блоки `header` и `footer` позиционируются на странице с помощью микса с элементами блока `page`, которым заданы нужные стили. Элементы `page__header` и `page__footer` опциональные и применяются к блоку `page`, если необходимо разместить шапку (`header`) или подвал (`footer`) на странице. Блоки `page`, `header` и `footer` остаются независимыми, так как не содержат стили про взаимное позиционирование.

HTML-реализация:

<body class\="page"\>
    <!-- верхний колонтитул и навигация -->
    <header class\="header page\_\_header"\>...</header\>
    <!-- нижний колонтитул -->
    <footer class\="footer page\_\_footer"\>...</footer\>
</body\>

CSS-реализация:

.page\_\_header {
    padding: 20px;
}

.page\_\_footer {
    padding: 50px;
}

### Расположение HTML-элементов внутри блока

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/bem-for-html/bem-for-html.ru.md#%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-html-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B8-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0)

Чтобы позиционировать HTML-элементы внутри блока, используется дополнительный элемент этого блока (например, `button__inner`). Элемент `button__inner` содержит стили про позиционирование внутри блока `button` и заменяет абстрактную обертку.

В примере иконка (блок `icon`) позиционируется внутри универсальной кнопки с помощью стилей элемента `button__inner`.

HTML-реализация:

<button class\="button"\>
    <span class\="button\_\_inner"\>
        <span class\="icon"\></span\>
    </span\>
</button\>

CSS-реализация:

.button\_\_inner {
    margin: auto;
    width: 10px;
}
