// Napan Group — interazioni del sito. Nessun cookie, nessun tracciamento, nessuna memoria nel browser.
document.documentElement.classList.remove("no-js");

(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menu su telefono ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    var close = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
    };
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Chiudi" : "Menu";
      if (open) header.classList.add("scrolled"); else onScroll();
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { close(); toggle.focus(); }
    });
  }

  /* ---------- Testata trasparente sulla home ---------- */
  var header = document.querySelector(".site-header");
  var isHome = document.body.classList.contains("is-home");
  function onScroll() {
    if (!header || !isHome) return;
    var menuOpen = nav && nav.classList.contains("is-open");
    header.classList.toggle("scrolled", menuOpen || window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Video di apertura: fermo se l'utente preferisce meno movimento ---------- */
  var hv = document.querySelector(".hero-video");
  if (hv && reduce) { hv.removeAttribute("autoplay"); hv.pause(); }

  /* ---------- Video del gruppo ---------- */
  var player = document.getElementById("player");
  if (player) {
    var v = player.querySelector("video"), pb = player.querySelector(".play-btn");
    pb.addEventListener("click", function () {
      player.classList.add("playing");
      v.setAttribute("controls", "");
      var pr = v.play(); if (pr && pr.catch) pr.catch(function () {});
      v.focus();
    });
    v.addEventListener("ended", function () { player.classList.remove("playing"); v.removeAttribute("controls"); v.load(); });
  }

  /* ---------- Comparsa allo scorrimento e numeri ---------- */
  function countUp(el) {
    var to = parseInt(el.getAttribute("data-count"), 10); if (!to || reduce) return;
    var t0 = null, dur = 900 + to * 120;
    function step(ts) {
      if (!t0) t0 = ts;
      var k = Math.min(1, (ts - t0) / dur);
      el.textContent = Math.max(1, Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(step);
    }
    el.textContent = "0"; requestAnimationFrame(step);
  }
  var targets = document.querySelectorAll(".rv, .org, .ico-draw");
  if (!reduce && "IntersectionObserver" in window) {
    document.documentElement.classList.add("anim");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll("[data-count]").forEach(countUp);
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Schede delle società: leggera inclinazione al passaggio del mouse ---------- */
  if (!reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".company").forEach(function (c) {
      c.addEventListener("pointermove", function (e) {
        var r = c.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        c.style.transform = "perspective(900px) rotateX(" + (-y * 4).toFixed(2) + "deg) rotateY(" + (x * 5).toFixed(2) + "deg) translateY(-6px)";
      });
      c.addEventListener("pointerleave", function () { c.style.transform = ""; });
    });
  }
})();
