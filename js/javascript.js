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

  // Setting up the paths to work with the Segment library
  var circle = document.getElementById("circle"),
  circlesegment = new Segment(circle);

  var smile = document.getElementById("smile"),
    smilesegment = new Segment(smile);

  var leye = document.getElementById("leye"),
    leyesegment = new Segment(leye);

  var reye = document.getElementById("reye"),
    reyesegment = new Segment(reye);

  var glasses = document.getElementById("glasses"),
    glassessegment = new Segment(glasses);

  var lglass = document.getElementById("lglass"),
    lglasssegment = new Segment(lglass);

  var rglass = document.getElementById("rglass"),
    rglasssegment = new Segment(rglass);

  var hair = document.getElementById("hair"),
    hairsegment = new Segment(hair);

  $("#intro").addClass('hidden');
  $('#branch').addClass('hidden');

  $('.nav').addClass('hidden');

  // Defining our draw and reset functions
  function draw() {
    circlesegment.draw("0%", "100%", 1.5, 
      {callback: 
        function() {
          $("#intro").removeClass('hidden')
          $('.nav').removeClass('hidden');
          $("#intro").addClass('visible')
          $('.nav').addClass('visible');

        }
      });
    smilesegment.draw("0%", "100%", 1);
    leyesegment.draw("0%", "100%", 1);
    reyesegment.draw("0%", "100%", 1);
    glassessegment.draw("0%", "100%", 1.5);
    lglasssegment.draw("0%", "100%", .7);
    rglasssegment.draw("0%", "100%", .7);
    hairsegment.draw("0%", "100%", 1.5);
  }


  function reset() {
    circlesegment.draw("0%", "0%", 0);
    smilesegment.draw(0, 0, 0);
    leyesegment.draw("0%", "0%", 0);
    reyesegment.draw("0%", "0%", 0);
    glassessegment.draw("0%", "0%", 0);
    lglasssegment.draw("0%", "0%", 0);
    rglasssegment.draw("0%", "0%", 0);
    hairsegment.draw("0%", "0%", 0);
  }

  $("#intro")
    .on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
      function(){
        $('#branch').removeClass('hidden');
        $('#branch').addClass('visible');
        $('#branch').attr('data-parallax','{"y" : -100}');
      });

  reset();
  draw()



});

// $(document).ready(function() {
//   var element = document.getElementById("js-fadeInElement");
//   $(element).addClass('js-fade-element-hide');

//   $(window).scroll(function() {
//     if( $("#js-fadeInElement").length > 0 ) {
//       var elementTopToPageTop = $(element).offset().top;
//       var windowTopToPageTop = $(window).scrollTop();
//       var windowInnerHeight = window.innerHeight;
//       var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
//       var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
//       var distanceFromBottomToAppear = 300;

//       if(elementTopToWindowBottom > distanceFromBottomToAppear) {
//         $(element).addClass('js-fade-element-show');
//       }
//       else if(elementTopToWindowBottom < 0) {
//         $(element).removeClass('js-fade-element-show');
//         $(element).addClass('js-fade-element-hide');
//       }
//     }
//   });
// });
