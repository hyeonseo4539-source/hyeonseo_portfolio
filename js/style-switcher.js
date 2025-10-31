/* ===== toggle Style Switcher ===== */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggler.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

/* ===== hide style - switcher on scroll ===== */
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

/* ===== theme color ===== */
const colorStyle = document.getElementById("color-style");

function setActiveStyle(color) {
  console.log("setActiveStyle called with color:", color);
  localStorage.setItem("color", color);
  changeColor();
}

function changeColor() {
  const color = localStorage.getItem("color");
  console.log("changeColor called. Color from localStorage:", color);
  if (color) {
    const timestamp = new Date().getTime();
    colorStyle.setAttribute("href", `./skins/${color}.css?t=${timestamp}`);
    console.log("Stylesheet href changed to:", `./skins/${color}.css?t=${timestamp}`);
  } else {
    console.log("No color found in localStorage.");
  }
}

// checking for saved color
if (localStorage.getItem("color") !== null) {
  changeColor();
}

/* ===== theme light and dark mode ===== */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  console.log("Window loaded. Initializing theme and color.");
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }

  // set theme
  if (localStorage.getItem("theme") !== null) {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }
});