const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  const floatX = Math.floor(Math.random() * 31) - 15;
  const floatY = -(12 + Math.floor(Math.random() * 26));
  const duration = (4.5 + Math.random() * 4).toFixed(2);
  const delay = (-Math.random() * 5).toFixed(2);

  square.style.setProperty('--float-x', `${floatX}px`);
  square.style.setProperty('--float-y', `${floatY}px`);
  square.style.setProperty('--duration', `${duration}s`);
  square.style.setProperty('--delay', `${delay}s`);
});

const tabButtons = document.querySelectorAll('.tab-button');

function activateTab(selectedButton) {
  tabButtons.forEach((button) => {
    const isActive = button === selectedButton;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => activateTab(button));
});


const themeToggle = document.querySelector('.theme-toggle');

function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
}

themeToggle.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark-mode'));
});
