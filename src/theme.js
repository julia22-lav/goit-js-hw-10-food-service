import refs from './refs.js';
// const { body, themeSwitch } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// const refs = {
//   body: document.querySelector('body'),
//   themeSwitch: document.getElementById('theme-switch-toggle'),
// };

// const themeSwitchRef = document.getElementById('theme-switch-toggle');
// const bodyRef = document.querySelector('body')

refs.themeSwitch.addEventListener('input', onThemeChange);

const themeSaved = localStorage.getItem('Theme');

if (themeSaved) {
  refs.body.classList.add(themeSaved);
  if (themeSaved === Theme.DARK) {
    refs.themeSwitch.checked = true;
  }
} else {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
}

function onThemeChange(event) {
  if (event.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
