
// navigation position fixed

window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





//........ available position start here.......................

$('.toggle').click(function(e) {
e.preventDefault();
var notthis = $('.active').not(this);
notthis.find('.fa-minus').addClass('fa-plus').removeClass('fa-minus');
notthis.toggleClass('active').next('.answer').slideToggle(300);
 $(this).toggleClass('active').next().slideToggle("fast");
$(this).children('i').toggleClass('fa-plus fa-minus');
});

// ..........available position end here.........................





jQuery(function($) {
  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable'); 
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }    
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });
	};
  
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});