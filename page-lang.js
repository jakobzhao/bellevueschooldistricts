const pageTitles = {
  en: document.title,
  zh: document.body.dataset.zhTitle || document.title
};

let staticPageLang = "en";

function applyStaticPageLanguage(lang) {
  staticPageLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  document.title = pageTitles[lang] || pageTitles.en;

  document.querySelectorAll("[data-en][data-zh]").forEach((element) => {
    element.textContent = element.dataset[lang];
  });

  document.querySelectorAll(".lang-en").forEach((element) => {
    element.hidden = lang !== "en";
  });

  document.querySelectorAll(".lang-zh").forEach((element) => {
    element.hidden = lang !== "zh";
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => applyStaticPageLanguage(button.dataset.lang));
});

applyStaticPageLanguage(staticPageLang);
