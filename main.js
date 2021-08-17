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


// Event Listeners
contactName.addEventListener('input', function() {
  if (contactName.validity.valid) {
    contactName.classList.remove('error')
    contactName.nextElementSibling.classList.remove('show')
  }
})
contactTel.addEventListener('input', function() {
  if (contactTel.validity.valid) {
    contactTel.classList.remove('error')
    contactTel.nextElementSibling.classList.remove('show')
  }
})
contactEmail.addEventListener('input', function() {
  if (contactEmail.validity.valid) {
    contactEmail.classList.remove('error')
    contactEmail.nextElementSibling.classList.remove('show')
  }
})
contactMessage.addEventListener('input', function() {
  if (contactMessage.validity.valid) {
    contactMessage.classList.remove('error')
    contactMessage.nextElementSibling.classList.remove('show')
  }
})

contactForm.addEventListener('submit', function(e) {
  if(!contactName.validity.valid) {
  contactName.classList.add('error')
  contactName.nextElementSibling.classList.add('show')
  e.preventDefault();
  }
  if(!contactTel.validity.valid) {
  contactTel.classList.add('error')
  contactTel.nextElementSibling.classList.add('show')
  e.preventDefault();
  }
  if(!contactEmail.validity.valid) {
  contactEmail.classList.add('error')
  contactEmail.nextElementSibling.classList.add('show')
  e.preventDefault();
  }
  if(!contactMessage.validity.valid) {
  contactMessage.classList.add('error')
  contactMessage.nextElementSibling.classList.add('show')
  e.preventDefault();
  }
})