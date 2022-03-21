window.addEventListener('scroll', () => {
  const navBar = document.querySelector('.nav-bar');
  /* console.log(window.scrollY); */
  navBar.classList.toggle('active-scroll', window.scrollY > 900)
})