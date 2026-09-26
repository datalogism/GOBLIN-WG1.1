// Theme toggle shared by the survey pages (preference kept per browser).
(function () {
  const root = document.documentElement;
  const KEY = "goblin-survey-theme";
  try {
    const saved = localStorage.getItem(KEY);
    if (saved) root.dataset.theme = saved;
  } catch (e) { /* storage unavailable: follow the system theme */ }
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem(KEY, root.dataset.theme); } catch (e) { /* ignore */ }
  });
})();
