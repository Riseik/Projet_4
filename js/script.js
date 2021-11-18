document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems, options);
 });

 $(document).ready(function(){
   $('.sidenav').sidenav();
 });
 var instance = M.Carousel.init({
     fullWidth: true
   });

   // Or with jQuery

   $('.carousel.carousel-slider').carousel({
     fullWidth: false
   });

   document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });
    $(document).ready(function(){
        $('.modal').modal();
      });
            
