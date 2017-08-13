// INITIAL LOADER **********

$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");
});

// PIE CHART *****************
			$(document).ready(function () {
				$('#html-css').pieChart({
					barColor: '#10A7AF',
					trackColor: '#fff',
					lineCap: 'round',
					lineWidth: 8,
					onStep: function (from, to, percent) {
						$(this.element).find('.pie-value').text(Math.round(percent) + '%');
					}
				});

				$('#javascript').pieChart({
					barColor: '#10A7AF',
					trackColor: '#fff',
					lineCap: 'butt',
					lineWidth: 8,
					onStep: function (from, to, percent) {
						$(this.element).find('.pie-value').text(Math.round(percent) + '%');
					}
				});
                
				$('#git').pieChart({
					barColor: '#10A7AF',
					trackColor: '#fff',
					lineCap: 'butt',
					lineWidth: 8,
					onStep: function (from, to, percent) {
						$(this.element).find('.pie-value').text(Math.round(percent) + '%');
					}
				});
                $('#jquery').pieChart({
					barColor: '#10A7AF',
					trackColor: '#fff',
					lineCap: 'butt',
					lineWidth: 8,
					onStep: function (from, to, percent) {
						$(this.element).find('.pie-value').text(Math.round(percent) + '%');
					}
				});

				
			});


// SMOOTH - SCROLLING******************

// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

// ALTERNATE***************
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// PRINT************************

$('#print').click(function(){
	window.print();
});


// PARALLAX********************* TO MANUALLY CALL PARALLAX PLUGIN

// $('.parallax-window').parallax({imageSrc: 'images/back.jpg'});
