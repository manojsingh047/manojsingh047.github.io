$(document).ready(function(){

	$('#headerMywork').on('click', function(e){

	$('html, body').stop().animate({
   		scrollTop: $('#myWork').offset().top
		}, 1000);
   	});

	
	$("#myWork").hover(
		function(){
			$('.apps').removeClass('blackWhite');
			$('#massData').fadeIn();
			$('#weatherDetector').fadeIn();
			$('#quoteGenerator').fadeIn();
			$('#twitchStreamers').fadeIn();
			$('#calculator').fadeIn();
			$('#nameApp6').fadeIn();
			
			},
		function(){
			$('.apps').addClass('blackWhite');
			$('#massData').fadeOut();
			$('#weatherDetector').fadeOut();
			$('#quoteGenerator').fadeOut();
			$('#twitchStreamers').fadeOut();
			$('#calculator').fadeOut();
			$('#nameApp6').fadeOut();
		}
	);
	$("#app1").hover(
		function(){
			
			$(this).removeClass('blackWhite');
			$('#massData').fadeIn();
		},
		function(){
			
			$(this).addClass('blackWhite');
			$('#massData').fadeOut();
		}
	);
	$("#app2").hover(
		function(){
			
			$(this).removeClass('blackWhite');
			$('#weatherDetector').fadeIn();
		},
		function(){
			$(this).addClass('blackWhite');
			$('#weatherDetector').fadeOut();
		}
	);
	$("#app3").hover(
		function(){
			$(this).removeClass('blackWhite');
			$('#quoteGenerator').fadeIn();
		},
		function(){
			$(this).addClass('blackWhite');
			$('#quoteGenerator').fadeOut();
		}
	);
	$("#app4").hover(
		function(){
			$(this).removeClass('blackWhite');
			$('#twitchStreamers').fadeIn();
		},
		function(){
			$(this).addClass('blackWhite');
			$('#twitchStreamers').fadeOut();
		}
	);
	$("#app5").hover(
		function(){
			$(this).removeClass('blackWhite');
			$('#calculator').fadeIn();
		},
		function(){
			$(this).addClass('blackWhite');
			$('#calculator').fadeOut();
		}
	);
	$("#app6").hover(
		function(){
			$(this).removeClass('blackWhite');
			$('#nameApp6').fadeIn();
		},
		function(){
			$(this).addClass('blackWhite');
			$('#nameApp6').fadeOut();
		}
	);
});


	/*var backImage1="\"C:\\Users\\manoj\\Desktop\\project1.2\\images\\wall1.jpg\"";
	var backImage2="\"C:\\Users\\manoj\\Desktop\\project1.2\\images\\wall3.jpg\"";
	var backImage3="\"C:\\Users\\manoj\\Desktop\\project1.2\\images\\wall2.jpg\"";

	var backImage=[backImage1, backImage2, backImage3];

	var i=0;

	setInterval(function() {	//wrapping setInterval in an anonymous function. Reason, refer very imp injavascript notepad.
			secondsTimer();
			},5000);
		

	function secondsTimer()
	{
		if(backImage[i]==undefined)
			i=0;
		var a=i;
		$('#backgroundImg').replaceWith("<img class=\"img-responsive\" id=\"backgroundImg\" src="+backImage[a++]+">");

		i++;
	}*/