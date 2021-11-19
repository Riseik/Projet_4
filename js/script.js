$(document).ready(function(){
 $('.sidenav').sidenav();
});

var instance = M.Carousel.init({
 fullWidth: true
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

$('.new_pos').click(function() {
  var bodyWidth = document.body.clientWidth;
  var bodyHeight = document.body.clientHeight;
  var randPosX = Math.floor((Math.random()*bodyWidth));
  var randPosY = Math.floor((Math.random()*bodyHeight));
  $('.rand').css('opacity', 1);
  $('.rand').css('transition', 'all 1s');
  $('#rand_pos').css('left', randPosX);
  $('#rand_pos').css('top', randPosY);
});

$('.rand').click(function() {
  $('.rand').css('opacity', 0);
  $('.rand').css('transition', 'opacity 1s');
});
