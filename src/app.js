//Modal
const menu = document.querySelector('.Header-list__menu');
const modal = document.querySelector('.Header-list');

//Section Selected
const home = document.getElementById('home')
const aboutMe = document.getElementById('aboutMe')
const mySkills = document.getElementById('mySkills')
const projects = document.getElementById('projects')
const contactMe = document.getElementById('contactMe')

//Modal Function
menu.addEventListener('click', () => {
  let modalActive = document.querySelector('.modal-active');
  !modalActive ?
    modal.classList.add('modal-active') :
    modal.classList.remove('modal-active')
})

const handleSectionSelectd = (section) => {
  let sectionSelected = document.querySelector('.selected');
  sectionSelected.classList.remove('selected')
  section.classList.add('selected')
  modal.classList.remove('modal-active')
}

home.addEventListener('click', () => handleSectionSelectd(home))
aboutMe.addEventListener('click', () => handleSectionSelectd(aboutMe))
mySkills.addEventListener('click', () => handleSectionSelectd(mySkills))
projects.addEventListener('click', () => handleSectionSelectd(projects))
contactMe.addEventListener('click', () => handleSectionSelectd(contactMe))