// Napan Group — menu mobile. Nessun cookie, nessun tracciamento, nessuna memoria nel browser.
document.documentElement.classList.remove("no-js");

(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  function close() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Chiudi" : "Menu";
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { close(); toggle.focus(); }
  });
})();
