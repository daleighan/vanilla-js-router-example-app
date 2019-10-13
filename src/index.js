import VanillaJSRouter from 'vanilla-js-router';

const home = document.createElement('div');
home.innerHTML = 'Home';
const about = document.createElement('div');
about.innerHTML = 'About';
const projects = document.createElement('div');
projects.innerHTML = 'projects';
const contact = document.createElement('div');
contact.innerHTML = 'Contact';

const router = new VanillaJSRouter(
  'anchor',
  {
    '/': home,
    '/about': about,
    '/projects': projects,
    '/contact': contact,
  },
  {
    debug: process.env.NODE_ENV !== 'production',
    errorHTML: '<div>404 Route Not Found</div>',
    header: `<a class="router-link" href="/">Home</a><a class="router-link" href="/projects">Projects</a><a class="router-link" href="/about">About Me</a><a class="router-link" href="/contact">Reach Out</a>`,
    footer: 'footer text',
  },
);
