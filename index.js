import data from './data.js';

const menuBtn = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.nav-links');
const closeMenuBtn = document.querySelector('.close-menu-btn button');
const myFeatures = data.features;

menuBtn.addEventListener('click', () => {
  menuLinks.style.display = 'flex';
  menuLinks.classList.add('menu-links');
});
closeMenuBtn.addEventListener('click', () => {
  menuLinks.style.display = 'none';
  menuLinks.classList.remove('menu-links');
});
