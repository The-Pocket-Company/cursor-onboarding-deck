/* Gentle, orchestrated entrance for a slide.
   One coordinated page-load reveal — not scattered micro-interactions.
   Targets the meaningful blocks (one level into each column) and staggers them.
   Graceful: if this script never runs, content simply stays visible. */
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function run() {
    var content = document.querySelector(".slide .content");
    if (!content) return;

    var targets = [];
    Array.prototype.forEach.call(content.children, function (col) {
      var kids = Array.prototype.filter.call(col.children, function (el) {
        return el.nodeType === 1 && el.tagName !== "SVG" && el.tagName !== "svg";
      });
      if (kids.length >= 2) {
        kids.forEach(function (k) { targets.push(k); });
      } else {
        targets.push(col);
      }
    });

    targets.forEach(function (el, i) {
      el.style.opacity = "0";
      el.style.animation = "hsRise 0.74s cubic-bezier(0.2, 0.7, 0.2, 1) both";
      el.style.animationDelay = (0.06 + i * 0.075).toFixed(3) + "s";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
