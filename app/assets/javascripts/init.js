$(window).scroll(function () {
    $('header').toggleClass('shrink', $(document).scrollTop() > 0);
});

$("#nav ul li a[href^='#'], #scroll").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

window.onload = function() {

  var isMobile = window.matchMedia("only screen and (max-width: 768px)");

      if (isMobile.matches) {
        $(".slider").addClass('swipe');
        $(".slider").find("div").addClass('swipe-wrap');
        $(".slider").Swipe();
      }
}