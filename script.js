const btnNav = document.querySelector(".btn-mobile-nav");
const btnHeader = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  btnHeader.classList.toggle("nav-open");
});

//Implementing--Sticky--Navigation--//
const sectionHeroEl = document.querySelector(".hero-bg");

const sTicky = new IntersectionObserver(
  function (entries) {
    const array = entries[0];
    if (array.isIntersecting === false) {
      document.body.classList.add("sticky-nav");
    }

    if (array.isIntersecting === true) {
      document.body.classList.remove("sticky-nav");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);
sTicky.observe(sectionHeroEl);
