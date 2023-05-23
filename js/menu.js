window.addEventListener('scroll', revealY);

    function revealY() {

      var reveals = document.querySelectorAll('.revealY');

      for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('active');
        }

      }

    }

window.addEventListener('scroll', revealX);

function revealX() {

  var reveals = document.querySelectorAll('.revealX');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
  }

}

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