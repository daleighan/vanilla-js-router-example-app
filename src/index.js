import VanillaJSRouter from '@daleighan/vanilla-js-router';

// This is the first way to make a component to be used on a route
// using just a string
const Home = '<div>Home</div>';

// This is a second way using a function that returns a string
function About() {
  return `
    <div>
      About
    </div>
  `;
}

// This is the third way using a function that returns a DOM element
function Contact() {
  const contact = document.createElement('div');
  contact.textContent = 'contact';
  return contact;
}

// This component has the params of the route passed into it
function Project({ params }) {
  const project = document.createElement('div');
  project.textContent = `project ${params.id}`;
  return project;
}

const router = new VanillaJSRouter(
  // The router will be attached to an element with id="anchor"
  'anchor',
  {
    '/': Home,
    '/about': About,
    '/contact': Contact,
    '/projects/:id': Project,
  },
  // All the items passed into the options object below are optional
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
