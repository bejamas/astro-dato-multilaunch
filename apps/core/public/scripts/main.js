// Language Switcher
// Theme options
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
}

// Local storage key
const THEME_STORAGE_KEY = "user-theme-preference"

// Initialize theme system
function initThemeSystem() {
  // Get system preference using matchMedia
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")

  // Get saved theme from localStorage or default to system
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || THEMES.SYSTEM

  // Set up theme toggle radio buttons
  const themeRadios = document.querySelectorAll('input[name="theme"]')
  const themeOptions = document.querySelectorAll(".toggle-option")

  // Apply initial theme
  setTheme(savedTheme)

  // Check the appropriate radio button
  document.querySelector(`input[value="${savedTheme}"]`).checked = true

  // Add event listeners to radio buttons
  themeRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const newTheme = e.target.value
      setTheme(newTheme)
      localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    })
  })

  // Listen for system preference changes
  systemPrefersDark.addEventListener("change", (e) => {
    if (getCurrentTheme() === THEMES.SYSTEM) {
      applyTheme(e.matches ? THEMES.DARK : THEMES.LIGHT)
    }
  })
}

// Get current theme
function getCurrentTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) || THEMES.SYSTEM
}

// Set theme (light, dark, or system)
function setTheme(theme) {
  if (theme === THEMES.SYSTEM) {
    // If system preference, check what the system prefers
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    applyTheme(systemPrefersDark ? THEMES.DARK : THEMES.LIGHT)
  } else {
    // Otherwise apply the specific theme
    applyTheme(theme)
  }

  // Save the theme preference
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

// Apply theme to HTML element
function applyTheme(theme) {
  if (theme === THEMES.DARK) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initThemeSystem)

// Handle theme if JavaScript loads after DOM is ready
if (document.readyState === "complete" || document.readyState === "interactive") {
  initThemeSystem()
}

// Language Switcher
document.getElementById("dropdowntoggle").addEventListener("click", function() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
});

// Testimonial Carousel
document.addEventListener('DOMContentLoaded', function() {
  // Get carousel elements
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const indicators = document.querySelectorAll('.carousel-indicator');

  if (slides.length < 2) {
    return;
  }
  
  let currentSlide = 0;
  
  // Initialize the carousel
  function initCarousel() {
    // Show the first slide
    slides[currentSlide].classList.add('opacity-100');
    indicators[currentSlide].classList.add('bg-primary');
    
    // Add event listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // Add indicator click events
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });
  }
  
  // Go to a specific slide
  function goToSlide(index) {
    // Hide current slide
    slides[currentSlide].classList.remove('opacity-100');
    indicators[currentSlide].classList.remove('bg-primary');
    
    // Update current slide index
    currentSlide = index;
    
    // If we've gone past the last slide, go back to the first
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    
    // If we've gone before the first slide, go to the last
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    
    // Show new current slide
    slides[currentSlide].classList.add('opacity-100');
    indicators[currentSlide].classList.add('bg-primary');
  }
  
  // Go to the next slide
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  
  // Go to the previous slide
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }
  
  // Initialize the carousel
  initCarousel();
});