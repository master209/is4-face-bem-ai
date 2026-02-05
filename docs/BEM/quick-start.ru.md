Быстрый старт
=============

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82)

Введение
--------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5)

БЭМ (Блок, Элемент, Модификатор) — компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки. Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код, избегая «Copy-Paste».

Содержание
----------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%B8%D0%B5)

*   [Блок](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%B1%D0%BB%D0%BE%D0%BA)
*   [Элемент](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)
*   [Когда создавать блок, когда — элемент?](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D1%82%D1%8C-%D0%B1%D0%BB%D0%BE%D0%BA-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0--%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)
*   [Модификатор](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80)
*   [Микс](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BC%D0%B8%D0%BA%D1%81)
*   [Файловая структура](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0)

Блок
----

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%B1%D0%BB%D0%BE%D0%BA)

Функционально независимый компонент страницы, который может быть повторно использован. В HTML блоки представлены атрибутом `class`.

Особенности:

*   [Название блока](https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.ru.md#%D0%98%D0%BC%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0) характеризует смысл («что это?» — «меню»: `menu`, «кнопка»: `button`), а не состояние («какой, как выглядит?» — «красный»: `red`, «большой»: `big`).

**Пример**

<!-- Верно. Семантически осмысленный блок \`error\` -->
<div class\="error"\></div\>

<!-- Неверно. Описывается внешний вид -->
<div class\="red-text"\></div\>

*   Блок не должен влиять на свое окружение, т. е. блоку не следует задавать внешнюю геометрию (в виде отступов, границ, влияющих на размеры) и позиционирование.
*   В CSS по БЭМ также не рекомендуется использовать селекторы по тегам или `id`.

Таким образом обеспечивается независимость, при которой возможно повторное использование или перенос блоков с места на место.

### Принцип работы с блоками

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D1%81-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0%D0%BC%D0%B8)

#### Вложенность

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C)

*   Блоки можно вкладывать друг в друга.
*   Допустима любая вложенность блоков.

**Пример**

<!-- Блок \`header\` -->
<header class\="header"\>
    <!-- Вложенный блок \`logo\` -->
    <div class\="logo"\></div\>

    <!-- Вложенный блок \`search-form\` -->
    <form class\="search-form"\></form\>
</header\>

Элемент
-------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)

Составная часть блока, которая не может использоваться в отрыве от него.

Особенности:

*   [Название элемента](https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.ru.md#%D0%98%D0%BC%D1%8F-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0) характеризует смысл («что это?» — «пункт»: `item`, «текст»: `text`), а не состояние («какой, как выглядит?» — «красный»: `red`, «большой»: `big`).
*   Структура полного имени элемента соответствует схеме: `имя-блока__имя-элемента`. Имя элемента отделяется от имени блока двумя подчеркиваниями (`__`).

**Пример**

<!-- Блок \`search-form\` -->
<form class\="search-form"\>
    <!-- Элемент \`input\` блока \`search-form\` -->
    <input class\="search-form\_\_input"\>

    <!-- Элемент \`button\` блока \`search-form\` -->
    <button class\="search-form\_\_button"\>Найти</button\>
</form\>

### Принципы работы с элементами

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D1%81-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8)

*   [Вложенность](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%92%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C-1)
*   [Принадлежность](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%9F%D1%80%D0%B8%D0%BD%D0%B0%D0%B4%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C)
*   [Необязательность](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%9D%D0%B5%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C)

#### Вложенность

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C-1)

*   Элементы можно вкладывать друг в друга.
*   Допустима любая вложенность элементов.
*   Элемент — всегда часть блока, а не другого элемента. Это означает, что в названии элементов нельзя прописывать иерархию вида `block__elem1__elem2`.

**Пример**

<!--
 Верно. Структура полного имени элементов соответствует схеме:
 \`имя-блока\_\_имя-элемента\`
\-->
<form class\="search-form"\>
    <div class\="search-form\_\_content"\>
        <input class\="search-form\_\_input"\>
        <button class\="search-form\_\_button"\>Найти</button\>
    </div\>
</form\>

<!--
 Неверно. Структура полного имени элементов не соответствует схеме:
 \`имя-блока\_\_имя-элемента\`
\-->
<form class\="search-form"\>
    <div class\="search-form\_\_content"\>
        <!--
 Рекомендуется:
 \`search-form\_\_input\` или \`search-form\_\_content-input\`
 -->
        <input class\="search-form\_\_content\_\_input"\>

        <!--
 Рекомендуется:
 \`search-form\_\_button\` или \`search-form\_\_content-button\`
 -->
        <button class\="search-form\_\_content\_\_button"\>Найти</button\>
    </div\>
</form\>

Имя блока задает пространство имен, которое [гарантирует зависимость](https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.ru.md#%D0%98%D0%BC%D1%8F-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0) элементов от блока (`block__elem`).

Блок может иметь вложенную структуру элементов в DOM-дереве:

**Пример**

<div class\="block"\>
    <div class\="block\_\_elem1"\>
        <div class\="block\_\_elem2"\>
            <div class\="block\_\_elem3"\></div\>
        </div\>
    </div\>
</div\>

Однако эта же структура блока в методологии БЭМ всегда будет представлена плоским списком элементов:

**Пример**

.block {}
.block\_\_elem1 {}
.block\_\_elem2 {}
.block\_\_elem3 {}

Это позволяет изменять DOM-структуру блока без внесения правок в коде каждого отдельного элемента:

**Пример**

<div class\="block"\>
    <div class\="block\_\_elem1"\>
        <div class\="block\_\_elem2"\></div\>
    </div\>

    <div class\="block\_\_elem3"\></div\>
</div\>

Структура блока меняется, а правила для элементов и их названия остаются прежними.

#### Принадлежность

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BF%D1%80%D0%B8%D0%BD%D0%B0%D0%B4%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C)

Элемент — **всегда часть блока** и не должен использоваться отдельно от него.

**Пример**

<!-- Верно. Элементы лежат внутри блока \`search-form\` -->
<!-- Блок \`search-form\` -->
<form class\="search-form"\>
    <!-- Элемент \`input\` блока \`search-form\` -->
    <input class\="search-form\_\_input"\>

    <!-- Элемент \`button\` блока \`search-form\` -->
    <button class\="search-form\_\_button"\>Найти</button\>
</form\>

<!-- Неверно. Элементы лежат вне контекста блока \`search-form\` -->
<!-- Блок \`search-form\` -->
<form class\="search-form"\>
</form\>

<!-- Элемент \`input\` блока \`search-form\` -->
<input class\="search-form\_\_input"\>

<!-- Элемент \`button\` блока \`search-form\` -->
<button class\="search-form\_\_button"\>Найти</button\>

#### Необязательность

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BD%D0%B5%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C)

Элемент — необязательный компонент блока. Не у всех блоков должны быть элементы.

**Пример**

<!-- Блок \`search-form\` -->
<div class\="search-form"\>
    <!-- Блок \`input\` -->
    <input class\="input"\>

    <!-- Блок \`button\` -->
    <button class\="button"\>Найти</button\>
</div\>

Когда создавать блок, когда — элемент?
--------------------------------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D1%82%D1%8C-%D0%B1%D0%BB%D0%BE%D0%BA-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0--%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)

### Создавайте блок

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA)

Если фрагмент кода может использоваться повторно и не зависит от реализации других компонентов страницы.

### Создавайте элемент

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)

Если фрагмент кода не может использоваться самостоятельно, без родительской сущности (блока).

Исключение составляют элементы, реализация которых для упрощения разработки требует разделения на более мелкие части — подэлементы. В БЭМ-методологии [нельзя создавать элементы элементов](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%92%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C-1). В подобном случае вместо элемента необходимо создавать служебный блок.

Модификатор
-----------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80)

Cущность, определяющая внешний вид, состояние или поведение блока либо элемента.

Особенности:

*   [Название модификатора](https://github.com/bem-site/bem-method/blob/bem-info-data/method/naming-convention/naming-convention.ru.md#%D0%98%D0%BC%D1%8F-%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D0%B0-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0) характеризует внешний вид («какой размер?», «какая тема?» и т. п. — «размер»: `size_s`, «тема»: `theme_islands`), состояние («чем отличается от прочих?» — «отключен»: `disabled`, «фокусированный»: `focused`) и поведение («как ведет себя?», «как взаимодействует с пользователем?» — «направление»: `directions_left-top`).
*   Имя модификатора отделяется от имени блока или элемента одним подчеркиванием (`_`).

### Типы модификаторов

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D1%82%D0%B8%D0%BF%D1%8B-%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2)

#### Булевый

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%B1%D1%83%D0%BB%D0%B5%D0%B2%D1%8B%D0%B9)

*   Используют, когда важно только наличие или отсутствие модификатора, а его значение несущественно. Например, «отключен»: `disabled`. Считается, что при наличии булевого модификатора у сущности его значение равно `true`.
    
*   Структура полного имени модификатора соответствует схеме:
    
    *   `имя-блока_имя-модификатора`;
    *   `имя-блока__имя-элемента_имя-модификатора`.

**Пример**

<!-- Блок \`search-form\` имеет булевый модификатор \`focused\` -->
<form class\="search-form search-form\_focused"\>
    <input class\="search-form\_\_input"\>

    <!-- Элемент \`button\` имеет булевый модификатор \`disabled\` -->
    <button class\="search-form\_\_button search-form\_\_button\_disabled"\>Найти</button\>
</form\>

#### Ключ-значение

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BA%D0%BB%D1%8E%D1%87-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)

*   Используют, когда важно значение модификатора. Например, «меню с темой оформления `islands`»: `menu_theme_islands`.
    
*   Структура полного имени модификатора соответствует схеме:
    
    *   `имя-блока_имя-модификатора_значение-модификатора`;
    *   `имя-блока__имя-элемента_имя-модификатора_значение-модификатора`.

**Пример**

<!-- Блок \`search-form\` имеет модификатор \`theme\` со значением \`islands\` -->
<form class\="search-form search-form\_theme\_islands"\>
    <input class\="search-form\_\_input"\>

    <!-- Элемент \`button\` имеет модификатор \`size\` со значением \`m\` -->
    <button class\="search-form\_\_button search-form\_\_button\_size\_m"\>Найти</button\>
</form\>

<!--
 Невозможно одновременно использовать два одинаковых модификатора
 с разными значениями
\-->
<form class\="search-form
 search-form\_theme\_islands
 search-form\_theme\_lite"\>

    <input class\="search-form\_\_input"\>

    <button class\="search-form\_\_button
 search-form\_\_button\_size\_s
 search-form\_\_button\_size\_m"\>
        Найти
    </button\>
</form\>

### Принципы работы с модификаторами

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF%D1%8B-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D1%81-%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D0%B0%D0%BC%D0%B8)

#### Модификатор нельзя использовать самостоятельно

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80-%D0%BD%D0%B5%D0%BB%D1%8C%D0%B7%D1%8F-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D1%81%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE)

С точки зрения БЭМ-методологии модификатор не может использоваться в отрыве от модифицируемого блока или элемента. Модификатор должен изменять вид, поведение или состояние сущности, а не заменять ее.

**Пример**

<!-- Верно. Блок \`search-form\` имеет модификатор \`theme\` со значением \`islands\`-->
<form class\="search-form search-form\_theme\_islands"\>
    <input class\="search-form\_\_input"\>

    <button class\="search-form\_\_button"\>Найти</button\>
</form\>

<!-- Неверно. Отсутствует модифицируемый класс \`search-form\` -->
<form class\="search-form\_theme\_islands"\>
    <input class\="search-form\_\_input"\>

    <button class\="search-form\_\_button"\>Найти</button\>
</form\>

> [Зачем в именах модификаторов и элементов указывать имя блока?](https://github.com/bem-site/bem-method/blob/bem-info-data/faq/faq.ru.md#%D0%97%D0%B0%D1%87%D0%B5%D0%BC-%D0%B2-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D1%85-%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2-%D0%B8-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D1%83%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-%D0%B8%D0%BC%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0)

Микс
----

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D0%BC%D0%B8%D0%BA%D1%81)

Прием, позволяющий использовать разные БЭМ-сущности на одном DOM-узле.

Миксы позволяют:

*   совмещать поведение и стили нескольких сущностей без дублирования кода;
*   создавать семантически новые компоненты интерфейса на основе имеющихся.

**Пример**

<!-- Блок \`header\` -->
<div class\="header"\>
    <!-- К блоку \`search-form\` примиксован элемент \`search-form\` блока \`header\`-->
    <div class\="search-form header\_\_search-form"\></div\>
</div\>

В данном примере мы совместили поведение и стили блока `search-form` и элемента `search-form` блока `header`. Такой подход позволяет нам задать внешнюю геометрию и позиционирование в элементе `header__search-form`, а сам блок `search-form` оставить универсальным. Таким образом, блок можно использовать в любом другом окружении, потому что он не специфицирует никакие отступы. Это позволяет нам говорить о его независимости.

Файловая структура
------------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/quick-start/quick-start.ru.md#%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0)

Принятый в методологии БЭМ компонентный подход применяется и к [организации проектов в файловой структуре](https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.ru.md#%D0%9E%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%8B). Реализации блоков, элементов и модификаторов делятся на независимые файлы-технологии, что позволяет нам подключать их опционально.

Особенности:

*   Один блок — одна директория.
*   Имена блока и его директории совпадают. Например, блок `header` — директория `header/`, блок `menu` — директория `menu/`.
*   Реализация блока разделяется на отдельные файлы-технологии. Например, `header.css`, `header.js`.
*   Директория блока является корневой для поддиректорий соответствующих ему элементов и модификаторов.
*   Имена директорий элементов начинаются с двойного подчеркивания (`__`). Например, `header/__logo/`, `menu/__item/`.
*   Имена директорий модификаторов начинаются с одинарного подчеркивания (`_`). Например, `header/_fixed/`, `menu/_theme_islands/`.
*   Реализации элементов и модификаторов разделяются на отдельные файлы-технологии. Например, `header__input.js`, `header_theme_islands.css`.

**Пример**

    search-form/                           # Директория блока `search-form`
    
        __input/                           # Поддиректория элемента `search-form__input`
            search-form__input.css         # Реализация элемента `search-form__input`
                                           # в технологии CSS
            search-form__input.js          # Реализация элемента `search-form__input`
                                           # в технологии JavaScript
    
        __button/                          # Поддиректория элемента `search-form__button`
            search-form__button.css
            search-form__button.js
    
        _theme/                            # Поддиректория модификатора
                                           # `search-form_theme`
            search-form_theme_islands.css  # Реализация блока `search-form`, имеющего
                                           # модификатор `theme` со значением `islands`
                                           # в технологии CSS
            search-form_theme_lite.css     # Реализация блока `search-form`, имеющего
                                           # модификатор `theme` со значением `lite`
                                           # в технологии CSS
    
        search-form.css                    # Реализация блока `search-form`
                                           # в технологии CSS
        search-form.js                     # Реализация блока `search-form`
                                           # в технологии JavaScript
    

Такая файловая структура позволяет легко поддерживать и повторно использовать код.

> Разветвленная файловая структура предполагает, что в production код будет [собираться в общие файлы проекта](https://github.com/bem-site/bem-method/blob/bem-info-data/method/build/build.ru.md#%D0%A1%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%91%D0%AD%D0%9C-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0).

Придерживаться [рекомендуемой файловой структуры](https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.ru.md#nested) не обязательно. Вы можете использовать любую альтернативную структуру проекта, соответствующую принципам организации файловой структуры БЭМ, например:

*   [Flat](https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.ru.md#flat)
*   [Flex](https://github.com/bem-site/bem-method/blob/bem-info-data/method/filestructure/filestructure.ru.md#flex)