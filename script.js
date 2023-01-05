//Making mobile nav//
const btnEl = document.querySelector(".btn-mobile-nav");
const navBar = document.querySelector(".nav-bar");

btnEl.addEventListener("click", function () {
  navBar.classList.toggle("open-nav");
});

/*this selects the anchor links prop with*/
const linksAll = document.querySelectorAll("a:link");

/*--forEach for adding multiple links to the eventlistner++*/

linksAll.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //e.preventDefault();

    //Read the href attribute from the link to scroll to coressponding link//

    //const href = link.getAttribute("href");

    /* if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }*/

    //closing mobile navigation
    if (link.classList.contains("nav-links"))
      navBar.classList.toggle("open-nav");
  });
});

//https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
