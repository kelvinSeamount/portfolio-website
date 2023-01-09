const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const useravLogo = document.querySelector('#user__avatar');

// Display Mobile Menu
const mobileMenu = () => {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
const elem = document.querySelector('.highlight');
const introductionMenu = document.querySelector('#introduction-page');
let scrollPos = window.scrollY;
// console.log(scrollPos);

// adds 'highlight' class to my menu items
if (window.innerWidth > 960 && scrollPos < 600) {
    introductionMenu.classList.add('highlight');
    return;
} else if (window.innerWidth > 960 && scrollPos < 1400) {
    introductionMenu.classList.remove('highlight');
    return;
}

if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
}
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
const menuBars = document.querySelector('.is-active');
if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
}
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);