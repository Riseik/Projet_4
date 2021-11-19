$(document).ready(function(){
 $('.sidenav').sidenav();
});

var instance = M.Carousel.init({
 fullWidth: true
});

$('.carousel.carousel-slider').carousel({
 fullWidth: false
});

$(document).ready(function(){
  $('.modal').modal();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
