import VanillaJSRouter from 'vanilla-js-router';

const router = new VanillaJSRouter(
  'anchor',
  {
    '/': '<div>Home</div>',
    '/about/': '<div>About</div>',
    '/projects/': '<div>Projects</div>',
    '/contact/': '<div>Contact</div>',
  },
  {
    debug: process.env.NODE_ENV !== 'production',
    errorHTML: '<div>404 Route Not Found</div>',
    header: ` 
      <a class="router-link" href="/">Home</a>
      <a class="router-link" href="/projects/">Projects</a>
      <a class="router-link" href="/about/">About Me</a>
      <a class="router-link" href="/contact/">Reach Out</a>
    `,
    footer: 'footer text',
  },
);
