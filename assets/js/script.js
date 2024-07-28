'use strict';

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

navLinks.forEach(link => link.addEventListener("click", closeNavbar));

/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.mode-toggle i');
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.classList.remove('fa-moon', 'moon-icon');
        button.classList.add('fa-sun', 'sun-icon');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.classList.remove('fa-sun', 'sun-icon');
        button.classList.add('fa-moon', 'moon-icon');
    }
}


