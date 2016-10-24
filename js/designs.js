//--------------------------------------------------------
//Hide elements before page loads for fade transition

$('#ASA-main-logo').addClass('hidden');

$('figure img').each(function(){
    $(this).addClass('hidden');
}); 

//--------------------------------------------------------
// Document ready

$(document).ready(function(){ 

  // Add smooth scrolling to anchor links
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });


    //Set up back-to-top button
        
    var offset = 300,
        $back_to_top = $('#back-to-top');

    $back_to_top.addClass('hidden');
    $back_to_top.addClass('is-disabled');

    /* Reveal hidden elements that are on page on document ready */

    $('figure img.hidden').each(function(){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var slack = 200; //the amouth of slack given before the element is visible
        if( bottom_of_window > bottom_of_object - slack ){
            $(this).fadeTo(800,1); 
        }
        
    }); 

    // On scroll...

    $(window).scroll(function(){

        //Hide and show back to top button appropriately
        
        ($(this).scrollTop() > offset) ? ($back_to_top.addClass('transparent'), $back_to_top.removeClass('is-disabled')) : ($back_to_top.removeClass('transparent'), $back_to_top.addClass('is-disabled'));
        
        /* Scrolling Fade */
        $('figure img.hidden').each(function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var slack = 200; //the amouth of slack given before the element is visible
            
            /* fade it in */
            if( bottom_of_window > bottom_of_object - slack ){
                
                $(this).fadeTo(800,1);
                    
            }
            
        }); 
    });

    //Fade ASA logo
    $('#ASA-main-logo').fadeTo(800,1);
});
