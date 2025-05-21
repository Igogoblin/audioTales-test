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
