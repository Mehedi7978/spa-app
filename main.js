// Import your components
import Navbar from './navbar.js';
import Body from './body.js';
import Contact from './contact.js';
import About from './about.js';

// Get root container
const root = document.getElementById('root');

// Render function
function render(path) {
  switch (path) {
    case '/':
      root.innerHTML = Navbar() + Body();
      break;

    case '/about':
      root.innerHTML = Navbar() + About();
      break;

    case '/contact':
      root.innerHTML = Navbar() + Contact();
      break;

    default:
      root.innerHTML = Navbar() + `<h2 style="text-align:center;">404 - Page Not Found</h2>`;
      break;
  }
}

// 🧭 Handle internal link clicks (no reload)
window.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-link]');
  if (!link) return;

  e.preventDefault();
  const newPath = link.getAttribute('href');
  history.pushState({}, '', newPath);
  render(newPath);
});

// 🔙 Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  render(window.location.pathname);
});

// ⚡ Handle initial load and refresh
window.addEventListener('DOMContentLoaded', () => {
  let path = window.location.pathname;

  // 🧩 Refresh-safe trick:
  // If page loaded directly at /about or /contact and server can’t find it,
  // we still want to show the right section
  if (path !== '/' && !path.endsWith('.html')) {
    // Save the current path
    const savedPath = path;

    // Reset URL to root silently (avoids 404 if server doesn’t support routes)
    history.replaceState({}, '', '/');

    // Then render the saved route (shows correct content)
    render(savedPath);
  } else {
    // Normal case
    render(path);
  }
});
