document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
