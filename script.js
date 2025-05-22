const body = document.querySelector("body");
const thema = document.querySelector(".thema");
const themaCircle = document.querySelector(".thema__circle");

thema.addEventListener("click", () => {
  body.classList.toggle("light");
});

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu__btn");
menuBtn.addEventListener("click", (e) => {
  menu.classList.add("active");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  const isClickInside = menu.contains(e.target);

  if (!isClickInside && !menuBtn.contains(e.target)) {
    menu.classList.remove("active");
  }
  if (e.target.tagName === "A" || e.target.tagName === "LI") {
    menu.classList.remove("active");
  }
});
// accordion --------------------------------------------------------
const items = document.querySelectorAll(".accordion__item");

items.forEach((item) => {
  const header = item.querySelector(".accordion__header");
  header.addEventListener("click", () => {
    // Проверяем, активен ли уже этот элемент
    const isActive = item.classList.contains("active");

    // Закрываем все элементы
    items.forEach((i) => i.classList.remove("active"));

    // Если элемент не был активен, открываем его
    if (!isActive) {
      item.classList.add("active");
    }
  });
});
