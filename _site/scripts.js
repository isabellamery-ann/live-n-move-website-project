 	// A $( document ).ready() block.
$( document ).ready(function() {
    
    
    $('.hamburger-button').click(function(){
        $('.menu').fadeToggle(100);
        $(this).toggleClass('active');
        
      });

      // Animate on scroll - activate
      AOS.init();
});