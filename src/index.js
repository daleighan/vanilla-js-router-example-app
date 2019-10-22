import VanillaJSRouter from 'vanilla-js-router'

function home() {
  const home = document.createElement('div')
  home.innerHTML = 'Home'
  return home
}
function about() {
  const about = document.createElement('div')
  about.innerHTML = 'About'
  return about
}
function projects() {
  const projects = document.createElement('div')
  projects.innerHTML = 'Projects'
  return projects
}
function project() {
  const project = document.createElement('div')
  project.innerHTML = 'Project'
  return project
}
function projectAction() {
  const projectAction = document.createElement('div')
  projectAction.innerHTML = 'Project'
  return projectAction
}
function contact() {
  const contact = document.createElement('div')
  contact.innerHTML = 'Contact'
  return contact
}

const router = new VanillaJSRouter(
  'anchor',
  {
    '/': home,
    '/about': about,
    '/projects': projects,
    '/projects/:id': project,
    '/projects/:id/:action': projectAction,
    '/contact': contact,
  },
  {
    debug: process.env.NODE_ENV !== 'production',
    errorHTML: '<div>Route Not Found</div>',
    header: `<a class="router-link" href="/">Home</a><a class="router-link" href="/projects">Projects</a><a class="router-link" href="/about">About Me</a><a class="router-link" href="/contact">Reach Out</a><a class="router-link" href="/projects/1">Project 1</a>`,
    footer: 'footer text',
  },
)
