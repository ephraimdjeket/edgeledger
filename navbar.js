const navbar = document.querySelector('.navigation');

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
  } else {
    navbar.classList.add('top');
  }
};
