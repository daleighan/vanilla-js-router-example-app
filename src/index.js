import VanillaJSRouter from 'vanilla-js-router';

function Home() {
  const home = document.createElement('div');
  home.innerHTML = 'home';
  return home;
}

function About() {
  const about = document.createElement('div');
  about.innerHTML = 'about';
  return about;
}

function Project({ params }) {
  const project = document.createElement('div');
  project.innerHTML = `project ${params.id}`;
  return project;
}

function Contact() {
  const contact = document.createElement('div');
  contact.innerHTML = 'contact';
  return contact;
}

const router = new VanillaJSRouter(
  'anchor',
  {
    '/': Home,
    '/about': About,
    '/projects/:id': Project,
    '/contact': Contact,
  },
  {
    debug: process.env.NODE_ENV !== 'production',
    errorHTML: '<div>Route Not Found</div>',
    header: `
      <a class="router-link" href="/">Home</a>
      <a class="router-link" href="/about">About Me</a>
      <a class="router-link" href="/contact">Reach Out</a>
      <a class="router-link" href="/projects/1">Project 1</a>`,
    footer: 'footer text',
  },
);
