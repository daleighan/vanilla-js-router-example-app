import VanillaJSRouter from 'vanilla-js-router'

function home() {
  const home = document.createElement('div')
  home.innerHTML = 'Home'
  return home
}
function about() {
  const about = document.createElement('div')
  about.innerHTML = 'about'
  return about
}
function projects() {
  const projects = document.createElement('div')
  projects.innerHTML = 'projects'
  return projects
}
function project({ id }) {
  const project = document.createElement('div')
  project.innerHTML = `project ${id}`
  return project
}
function projectAction({ id, action }) {
  const projectAction = document.createElement('div')
  projectAction.innerHTML = `${action} project ${id}`
  return projectAction
}
function contact() {
  const contact = document.createElement('div')
  contact.innerHTML = 'contact'
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
    '/projects/:id/:bbbb': projectAction,
    '/contact': contact,
  },
  {
    debug: process.env.NODE_ENV !== 'production',
    errorHTML: '<div>Route Not Found</div>',
    header: `<a class="router-link" href="/">Home</a><a class="router-link" href="/projects">Projects</a><a class="router-link" href="/about">About Me</a><a class="router-link" href="/contact">Reach Out</a><a class="router-link" href="/projects/1">Project 1</a>`,
    footer: 'footer text',
  },
)
