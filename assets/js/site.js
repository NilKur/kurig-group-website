// Mobile menu and submenu toggles
document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.querySelectorAll(".sub-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var li = btn.closest(".has-sub");
      var open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  // Close the mobile menu after jumping to a section
  if (nav) {
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
});
