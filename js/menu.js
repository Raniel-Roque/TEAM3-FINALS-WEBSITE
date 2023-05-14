const menuButton = document.querySelector('.navbar-toggler');
const body = document.querySelector('body');

menuButton.addEventListener('click', function() {
  body.classList.toggle('dark');
});

