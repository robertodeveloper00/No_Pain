'use strict';

/////////////////
// MOBILE MENU

// Selectors
const hamBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const closedMenu = document.querySelector('#closed-menu');
const openMenu = document.querySelector('#open-menu');

// Listeners
hamBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        // Open Hamburger mobileMenu
        mobileMenu.classList.remove('fade-out', 'hidden');
        mobileMenu.classList.add('fade-in');
        closedMenu.classList.toggle('hidden');
        openMenu.classList.toggle('hidden');
      } else {
        // Close Hamburger mobileMenu
        mobileMenu.classList.remove('fade-in');
        mobileMenu.classList.add('fade-out');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 500);
        closedMenu.classList.toggle('hidden');
        openMenu.classList.toggle('hidden');
      }
})