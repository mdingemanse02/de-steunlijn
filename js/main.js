/* ==========================================================================
   De Steunlijn — main.js
   --------------------------------------------------------------------------
   1. Mobiele navigatie (openen/sluiten)
   2. Sticky header (schaduw bij scrollen)
   3. Jaartal in de footer
   4. Contactformulier: validatie + bevestigingsmelding
   ========================================================================== */
(function () {
  'use strict';

  /* 1. Mobiele navigatie */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
    });

    // Sluit het menu wanneer een link wordt aangeklikt (mobiel)
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Menu openen');
      }
    });
  }

  /* 2. Sticky header: subtiele schaduw bij scrollen */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* 3. Jaartal in de footer */
  var yearElements = document.querySelectorAll('[data-year]');
  if (yearElements.length) {
    var currentYear = String(new Date().getFullYear());
    yearElements.forEach(function (el) {
      el.textContent = currentYear;
    });
  }

  /* 4. Contactformulier: validatie + bevestigingsmelding */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var success = document.querySelector('[data-form-success]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Verberg een eerdere bevestiging bij een nieuwe poging
      if (success) {
        success.hidden = true;
      }

      // Front-end validatie (HTML5-constraints)
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        form.reportValidity();
        return;
      }

      // Toon bevestigingsmelding
      if (success) {
        success.hidden = false;
        success.focus();
      }

      form.reset();
      form.classList.remove('was-validated');
    });
  }
})();
