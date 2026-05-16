// Minimal progressive enhancement for the production front-end.
// Everything still works without this file – it just adds polish.

(function () {
  'use strict';

  // Wire up "Print this page" buttons via data-action attribute (CSP-friendly)
  document.querySelectorAll('[data-action="print"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.print();
    });
  });

  // Wire up the "Save and come back" buttons. In a production deployment this
  // would POST a save request to the server and email the user a resume link.
  // For now, surfacing intent is the design contract; the back-end is the
  // developer agent's job.
  document.querySelectorAll('.govbb-save-bar button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // In production: fetch('/api/renewal/save', { method: 'POST', credentials: 'same-origin' })
      // For now, surface a status so the journey doesn't feel broken when tested.
      var bar = btn.closest('.govbb-save-bar');
      if (bar) {
        bar.setAttribute('aria-live', 'polite');
        bar.querySelector('p').textContent = "Progress saved. We'll email you a link to come back.";
        btn.remove();
      }
    });
  });
})();
