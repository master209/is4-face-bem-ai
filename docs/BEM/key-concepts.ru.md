Определения
===========

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F)

*   [Блок](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%BB%D0%BE%D0%BA)
*   [Элемент](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)
*   [Модификатор](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80)
*   [БЭМ-сущность](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%AD%D0%9C-%D1%81%D1%83%D1%89%D0%BD%D0%BE%D1%81%D1%82%D1%8C)
*   [Микс](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9C%D0%B8%D0%BA%D1%81)
*   [БЭМ-дерево](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%AD%D0%9C-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE)
*   [Реализация блока](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0)
*   [Технология реализации блока](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8)
*   [Переопределение блока](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9F%D0%B5%D1%80%D0%B5%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0)
*   [Уровень переопределения](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A3%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C-%D0%BF%D0%B5%D1%80%D0%B5%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F)

Блок
----

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%B1%D0%BB%D0%BE%D0%BA)

Логически и функционально независимый компонент страницы, аналог компонента в Web Components. Блок инкапсулирует в себе поведение (JavaScript), шаблоны, стили (CSS) и другие [технологии реализации](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8). Независимость блоков обеспечивает возможность их повторного использования, а также удобство в [разработке и поддержке проекта](https://github.com/bem-site/bem-method/blob/bem-info-data/method/solved-problems/solved-problems.ru.md).

**Возможности блоков:**

*   [Вложенная структура](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%92%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0)
*   [Свободное перемещение](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5)
*   [Повторное использование](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9F%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D0%BD%D0%BE%D0%B5-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)

### Вложенная структура

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0)

Блоки можно вкладывать в любые другие блоки.

Например, блок `head` может содержать логотип (`logo`), форму поиска (`search`) и блок авторизации (`auth`).

[![Составляющие блока Шапка](https://github.com/bem-site/bem-method/raw/bem-info-data/method/key-concepts/key-concepts__head_marked.png)](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts__head_marked.png)

### Свободное перемещение

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5)

Блоки можно перемещать в пределах одной страницы и разных проектов. Независимость блока позволяет изменять его положение на странице и обеспечивает корректную работу и внешний вид.

Так, например, логотип и форму авторизации можно поменять местами. При этом вносить изменения в CSS или JavaScript-код блоков не нужно.

[![Смена положения блоков](https://github.com/bem-site/bem-method/raw/bem-info-data/method/key-concepts/key-concepts__head.png)](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts__head.png)

[![Смена положения блоков](https://github.com/bem-site/bem-method/raw/bem-info-data/method/key-concepts/key-concepts__head_changed.png)](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts__head_changed.png)

### Повторное использование

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%BF%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D0%BD%D0%BE%D0%B5-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)

В интерфейсе может одновременно присутствовать несколько экземпляров одного и того же блока.

[![Товары в интернет-магазине](https://github.com/bem-site/bem-method/raw/bem-info-data/method/key-concepts/key-concepts__goods-list.png)](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts__goods-list.png)

Элемент
-------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)

Составная часть [блока](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%BB%D0%BE%D0%BA), которая не может использоваться в отрыве от него. Элементы не существуют вне блока. Каждый элемент может принадлежать только одному блоку.

Например, пункт меню вне блока меню не используется, значит является его элементом.

[![Пункты меню](https://github.com/bem-site/bem-method/raw/bem-info-data/method/key-concepts/key-concepts__menu-items.png)](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts__menu-items.png)

> [Когда создавать блок, когда элемент?](https://github.com/bem-site/bem-method/blob/bem-info-data/faq/faq.ru.md#%D0%9A%D0%BE%D0%B3%D0%B4%D0%B0-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D1%82%D1%8C-%D0%B1%D0%BB%D0%BE%D0%BA-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0--%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)
> 
> [Можно ли в методологии БЭМ создавать элементы элементов?](https://github.com/bem-site/bem-method/blob/bem-info-data/faq/faq.ru.md#%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%BD%D0%B5-%D1%81%D1%82%D0%BE%D0%B8%D1%82-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D1%82%D1%8C-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-block__elem1__elem2)

Модификатор
-----------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%BC%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80)

БЭМ-сущность, определяющая внешний вид, состояние и поведение [блока](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%BB%D0%BE%D0%BA) или [элемента](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82).

Использование модификаторов опционально, количество — неограничено. Блоку или элементу нельзя одновременно присвоить разные значения модификатора.

По своей сути модификаторы похожи на атрибуты в HTML. Один и тот же блок выглядит по-разному благодаря применению модификатора.

Например, внешний вид блока меню (`menu`) может меняться в зависимости от примененного модификатора.

[![Добавить меню в подвале](https://github.com/bem-site/bem-method/raw/bem-info-data/method/key-concepts/key-concepts__site-footer-menu.png)](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts__site-footer-menu.png)

Модификаторы могут изменяться в процессе работы блока (например, как реакция на DOM-события блока) и по запросу из других блоков.

Например, при клике по кнопке `Sign In` (DOM-событие click), в случае неверно заполненных полей `Login` или `Password`, на скрытый блок сообщений об ошибках устанавливается модификатор (`visible`).

БЭМ-сущность
------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%B1%D1%8D%D0%BC-%D1%81%D1%83%D1%89%D0%BD%D0%BE%D1%81%D1%82%D1%8C)

БЭМ-сущностями называются [блоки](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%BB%D0%BE%D0%BA), [элементы](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82) и [модификаторы](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80).

Это понятие может применяться как частное, если рассматривается отдельная БЭМ-сущность, и как собирательное для блоков, элементов и модификаторов. 

Микс
----

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%BC%D0%B8%D0%BA%D1%81)

Способ использования разных [БЭМ-сущностей](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%91%D0%AD%D0%9C-%D1%81%D1%83%D1%89%D0%BD%D0%BE%D1%81%D1%82%D1%8C) на одном [DOM-узле](https://ru.wikipedia.org/wiki/Document_Object_Model).

Миксы позволяют:

*   совмещать поведение и стили нескольких БЭМ-сущностей без дублирования кода;
*   создавать семантически новые компоненты интерфейса на основе имеющихся БЭМ-сущностей.

Рассмотрим пример микса блока и элемента другого блока.

Допустим, в проекте ссылки реализованы блоком `link`. Необходимо сделать ссылками пункты меню. Существует несколько способов:

*   Создать модификатор для пункта меню, который превратит пункт в ссылку. Но в таком случае для реализации модификатора придется скопировать поведение и стили блока `link`. Это приведет к дублированию кода.
*   Воспользоваться миксом универсального блока `link` и элемента `link` блока `menu`. Микс двух БЭМ-сущностей позволит применить базовую функциональность ссылок из блока `link` и дополнительные CSS-правила из блока `menu` без копирования кода.

БЭМ-дерево
----------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%B1%D1%8D%D0%BC-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE)

Представление структуры веб-страницы в терминах блоков, элементов и модификаторов. Это абстракция над [DOM-деревом](https://ru.wikipedia.org/wiki/Document_Object_Model), которая описывает имена БЭМ-сущностей, их состояния, порядок, вложенность и вспомогательные данные.

В реальных проектах БЭМ-дерево можно выразить любым форматом, который поддерживает древовидную структуру.

Рассмотрим пример DOM-дерева:


	<header class="header"\>
		<img class="logo"\>
		<form class="search-form"\>
			<input class="input"\>
			<button class="button"\></button\>
		</form\>
		<ul class="lang-switcher"\>
			<li class="lang-switcher__item"\>
				<a class="lang-switcher__link" href="url"\>en</a\>
			</li\>
			<li class="lang-switcher__item"\>
				<a class="lang-switcher__link" href="url"\>ru</a\>
			</li\>
		</ul\>
	</header\>


Ему соответствует такое БЭМ-дерево:

    header
        logo
        search-form
            input
            button
        lang-switcher
            lang-switcher__item
                lang-switcher__link
            lang-switcher__item
                lang-switcher__link
    

Это же БЭМ-дерево будет иметь следующий вид в форматах XML и [BEMJSON](https://github.com/bem/bem-xjst/blob/master/docs/ru/4-data.md):

XML

<block:header\>
    <block:logo/>
    <block:search-form\>
        <block:input/>
        <block:button/>
    </block:search-form\>
    <block:lang-switcher\>
        <elem:item\>
            <elem:link/>
        </elem:item\>
        <elem:item\>
            <elem:link/>
        </elem:item\>
    </block:lang-switcher\>
</block:header\>

BEMJSON

{
    block: 'header',
    content : \[
        { block : 'logo' },
        {
            block : 'search-form',
            content : \[
                { block : 'input' },
                { block : 'button' }
            \]
        },
        {
            block : 'lang-switcher',
            content : \[
                {
                    elem : 'item',
                    content : \[
                        { elem : 'link' }
                    \]
                },
                {
                    elem : 'item',
                    content : \[
                        { elem : 'link' }
                    \]
                }
            \]
        }
    \]
}

Реализация блока
----------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0)

Набор различных [технологий](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8), определяющих следующие особенности БЭМ-сущности:

*   поведение;
*   внешний вид;
*   тесты;
*   шаблоны;
*   документацию;
*   описание зависимостей;
*   дополнительные данные (например, картинки).

Технология реализации
---------------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8)

Технология, которая используется для [реализации](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0) блока.

Блоки могут быть реализованы в одной или нескольких технологиях, например:

*   поведение — JavaScript, CoffeeScript;
*   внешний вид — CSS, Stylus, Sass;
*   шаблоны — Pug, Handlebars, XSL, BEMHTML, BH;
*   документация — Markdown, Wiki, XML.

Например, если внешний вид блока задан с помощью CSS, это означает, что блок реализован в технологии CSS. А если документация к блоку написана в формате Markdown — блок реализован в технологии Markdown.

Переопределение блока
---------------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%BF%D0%B5%D1%80%D0%B5%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0)

Изменение [реализации](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0) блока путем добавления ему новых особенностей на другом [уровне](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A3%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C-%D0%BF%D0%B5%D1%80%D0%B5%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F).

Уровень переопределения
-----------------------

[](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D1%83%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C-%D0%BF%D0%B5%D1%80%D0%B5%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F)

Набор БЭМ-сущностей и их частичных [реализаций](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0).

Конечная реализация блока может быть разделена по разным уровням переопределения. Каждый последующий уровень добавляет или перекрывает исходную реализацию блока. Конечный результат собирается из отдельных [технологий реализации](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8) блока со всех уровней переопределения последовательно в заданном порядке.

[![Уровень переопределения](https://github.com/bem-site/bem-method/raw/bem-info-data/method/key-concepts/key-concepts__levels.png)](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts__levels.png)

[Переопределять](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%9F%D0%B5%D1%80%D0%B5%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0) можно любые [технологии реализации](https://github.com/bem-site/bem-method/blob/bem-info-data/method/key-concepts/key-concepts.ru.md#%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8) БЭМ-сущностей.

Например, в проект на отдельный уровень подключается сторонняя библиотека, которая содержит готовые реализации блоков. Проектные блоки хранятся на другом уровне переопределения.

Предположим, что необходимо изменить внешний вид одного из блоков библиотеки. Для этого не нужно менять CSS-правила блока в исходном коде библиотеки или копировать код на уровень проекта. Достаточно создать дополнительные CSS-правила для этого блока на проектном уровне. При сборке в конечную реализацию подключатся исходные стили с уровня библиотеки и новые — с уровня проекта.