//Making mobile nav//
const btnEl = document.querySelector(".btn-mobile-nav");
const navBar = document.querySelector(".nav-bar");

btnEl.addEventListener("click", function () {
  navBar.classList.toggle("open-nav");
});
