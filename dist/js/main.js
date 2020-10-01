// select dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const menuNavBachgrountOne = document.querySelector('.menu-nav-background-one');
const menuNavBachgrountTwo = document.querySelector('.menu-nav-background-two');

//set initial state of menu
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    menuNavBachgrountOne.classList.add('show');
    menuNavBachgrountTwo.classList.add('show');
    navItems.forEach((item) => {
      item.classList.add('show');
    });

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNavBachgrountOne.classList.remove('show');
    menuNavBachgrountTwo.classList.remove('show');
    navItems.forEach((item) => {
      item.classList.remove('show');
    });

    //set menu state
    showMenu = false;
  }
};

menuBtn.addEventListener('click', toggleMenu);
