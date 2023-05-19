const menuButton = document.querySelector('.navbar-toggler');
const body = document.querySelector('body');

menuButton.addEventListener('click', function() {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    body.classList.remove('light');
  } else {
    body.classList.add('light');
  }
});

$(function() {
  $('body').scrollspy({ target: '.fade-scrollspy' });
});