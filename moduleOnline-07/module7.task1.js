//В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега h2)
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categories = document.querySelector("#categories");

const categoriesChildren = categories.children;

console.log(`В списке ${categoriesChildren.length} категории`);

Array.from(categoriesChildren).forEach((currentValue) => {
  const title = currentValue.querySelector("h2");
  const liItems = currentValue.querySelectorAll("li");
  console.log(`Категория: ${title.textContent}`);
  console.log(`Количество элементов: ${liItems.length}`);
});
