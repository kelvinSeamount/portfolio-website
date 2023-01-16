const btnNav = document.querySelector(".btn-mobile-nav");
const btnHeader = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  btnHeader.classList.toggle("nav-open");
});
