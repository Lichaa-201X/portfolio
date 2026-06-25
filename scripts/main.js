const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('main section');
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.querySelector('.close-menu');
const menuBackdrop = document.getElementById('menuBackdrop');

function setActiveNav() {
  if (!sections.length) return;
  const scrollPosition = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.id;
    if (scrollPosition >= top && scrollPosition < bottom) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

function toggleMenu(open) {
  if (!sideMenu || !menuToggle || !menuBackdrop) return;
  sideMenu.classList.toggle('open', open);
  menuBackdrop.classList.toggle('visible', open);
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  sideMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = sideMenu.classList.contains('open');
    toggleMenu(!isOpen);
  });
}

if (closeMenu) {
  closeMenu.addEventListener('click', () => toggleMenu(false));
}

if (menuBackdrop) {
  menuBackdrop.addEventListener('click', () => toggleMenu(false));
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

const heroImage = document.querySelector('.profile-card');
if (heroImage) {
  heroImage.addEventListener('mousemove', event => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.transform = `perspective(700px) rotateX(${(y - 0.5) * 12}deg) rotateY(${(x - 0.5) * 12}deg)`;
  });
  heroImage.addEventListener('mouseleave', event => {
    event.currentTarget.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
  });
}
