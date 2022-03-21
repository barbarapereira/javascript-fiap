const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

/* Arrow Function */
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('mobile-menu');
});

/* Funcção Regular
menuBtn.addEventListener('click', Function(){
  navMenu.classList.toggle(mobile-menu);
});
*/