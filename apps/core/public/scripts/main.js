document.addEventListener("DOMContentLoaded", () => {
  initThemeSystem();
  initLanguageSwitcher();
  initTestimonialCarousel();
});

/* -------------------- Theme Switcher -------------------- */

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

const THEME_STORAGE_KEY = "user-theme-preference";
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || THEMES.SYSTEM;
const appliedTheme = savedTheme === THEMES.SYSTEM ? (systemPrefersDark ? THEMES.DARK : THEMES.LIGHT) : savedTheme;

// Apply theme before rendering
document.documentElement.classList.toggle("dark", appliedTheme === THEMES.DARK);

function initThemeSystem() {
  const themeRadios = document.querySelectorAll('input[name="theme"]');

  if (!themeRadios.length) return;

  // Set the correct radio button
  const selectedRadio = document.querySelector(`input[value="${savedTheme}"]`);
  if (selectedRadio) selectedRadio.checked = true;

  // Add event listeners
  themeRadios.forEach((radio) =>
    radio.addEventListener("change", (e) => setTheme(e.target.value))
  );

  // Listen for system preference changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (getCurrentTheme() === THEMES.SYSTEM) {
      applyTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
    }
  });
}

function getCurrentTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) || THEMES.SYSTEM;
}

function setTheme(theme) {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(theme === THEMES.SYSTEM ? (systemPrefersDark ? THEMES.DARK : THEMES.LIGHT) : theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === THEMES.DARK);
}

/* -------------------- Language Switcher -------------------- */

function initLanguageSwitcher() {
  const toggle = document.getElementById("dropdowntoggle");
  const dropdown = document.getElementById("dropdown");

  if (toggle && dropdown) {
    toggle.addEventListener("click", () => dropdown.classList.toggle("hidden"));
  }
}

/* -------------------- Testimonial Carousel -------------------- */

function initTestimonialCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const indicators = document.querySelectorAll(".carousel-indicator");

  if (slides.length < 2 || !prevButton || !nextButton || !indicators.length) return;

  let currentSlide = 0;

  function goToSlide(index) {
    slides[currentSlide].classList.remove("opacity-100");
    indicators[currentSlide].classList.remove("bg-primary");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("opacity-100");
    indicators[currentSlide].classList.add("bg-primary");
  }

  prevButton.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextButton.addEventListener("click", () => goToSlide(currentSlide + 1));

  indicators.forEach((indicator, index) =>
    indicator.addEventListener("click", () => goToSlide(index))
  );

  goToSlide(0);
}
