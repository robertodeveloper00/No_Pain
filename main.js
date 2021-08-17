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

////////////////////
// CONTACT FORM ERROR STYLING
// Selectors
const contactForm = document.querySelector('.contact-form');
const contactName = document.querySelector('#nombre');
const contactTel = document.querySelector('#telefono');
const contactEmail = document.querySelector('#correo');
const contactMessage = document.querySelector('#mensaje');

const contactFormInputs = [contactName, contactTel, contactEmail, contactMessage];

const inputValidation = function (e) {
  contactFormInputs.forEach(formInput => {
    if(formInput.validity.valid) {
      formInput.classList.remove('error');
      formInput.nextElementSibling.classList.remove('show');
    } else {
      formInput.classList.add('error');
      formInput.nextElementSibling.classList.add('show');
      e.preventDefault();
    }
  })
}

contactForm.addEventListener('input', inputValidation);
contactForm.addEventListener('submit', inputValidation);
