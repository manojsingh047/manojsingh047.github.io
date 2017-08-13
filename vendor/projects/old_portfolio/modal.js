$(document).ready(function(){

	

	$('.apps').click(function(){
		var apps={

		'Mass Data':"Search for information about anything. This app make sure you stay well awared about 'stuffs'!! ",
		'Weather Detector':"Use this beautiful web application to get latest weather update of your region, or lets step it up a bit, from any city of the world! ",
		'Quote Generator':"Feeling low?? Need some inspiration?? Well, you are at the right place. Lets discover what you actually need from life",
		'Twitch Streamers':"Get the latest update about your favorite twitch channels",
		'Calculator':"Bored of using that same old calculator, Check out this simple but b'ful calculator made to do the notorious math for you."
		}

		var appImage={

		'Mass Data':"images/apps/modalImages/massdata1.jpg ",
		'Weather Detector':"images/apps/modalImages/weather1.jpg",
		'Quote Generator':"images/apps/modalImages/quote1.jpg",
		'Twitch Streamers':"images/apps/modalImages/twitch1.jpg",
		'Calculator':"images/apps/modalImages/calculator1.jpg"
		
		}
		switch(this.id)
		{
			case 'app1':
						$('#modalTitle').replaceWith("<p id='modalTitle'>"+Object.keys(apps)[0]+"</p>")
						$('#description').replaceWith("<p id='description'>"+apps['Mass Data']+"</p>");	
						$('#modalImage').replaceWith("<img class='img-responsive' id='modalImage' src="+appImage['Mass Data']+">");
						$('#successGreen').wrap("<a href='mediaWiki/wiki.html'></a>");
						break;
			case 'app2':
						$('#modalTitle').replaceWith("<p id='modalTitle'>"+Object.keys(apps)[1]+"</p>")
						$('#description').replaceWith("<p id='description'>"+apps['Weather Detector']+"</p>");	
						$('#modalImage').replaceWith("<img class='img-responsive' id='modalImage' src="+appImage['Weather Detector']+">");
						$('#successGreen').wrap("<a href='weatherTrial/homeWeather.html'></a>");

						break;			
			case 'app3':
						$('#modalTitle').replaceWith("<p id='modalTitle'>"+Object.keys(apps)[2]+"</p>")
						$('#description').replaceWith("<p id='description'>"+apps['Quote Generator']+"</p>");	
						$('#modalImage').replaceWith("<img class='img-responsive' id='modalImage' src="+appImage['Quote Generator']+">");
						$('#successGreen').wrap("<a href='quote/quote.html'></a>");

						break;
			case 'app4':
						$('#modalTitle').replaceWith("<p id='modalTitle'>"+Object.keys(apps)[3]+"</p>")
						$('#description').replaceWith("<p id='description'>"+apps['Twitch Streamers']+"</p>");	
						$('#modalImage').replaceWith("<img class='img-responsive' id='modalImage' src="+appImage['Twitch Streamers']+">");
						$('#successGreen').wrap("<a href='twitch/twitch.html'></a>");

						break;
			case 'app5':
						$('#modalTitle').replaceWith("<p id='modalTitle'>"+Object.keys(apps)[4]+"</p>")
						$('#description').replaceWith("<p id='description'>"+apps['Calculator']+"</p>");	
						$('#modalImage').replaceWith("<img class='img-responsive' id='modalImage' src="+appImage['Calculator']+">");
						$('#successGreen').wrap("<a href='calc/calculator.html'></a>");
						break;
		}

	});

	$("#button, #aboutMe").click(function(){

		$('#modal2 > div').css('width','60%');

		$('#description2').replaceWith("<p id='description2'>Let us get to business straightway unless you want to dive in some deep philosophy(which, perhaps, we could discuss over an interview ;-)). So, Considering the possibility of you being a potential recruiter for your 'close to heart' startup. I will assume you don't have much time to go through boring resumes, and perhaps that is why I have worked a bit hard to make your job interesting by creating this 'close to my heart', fully responsive portfolio website. <br><br>So without wasting any more of your time, let us quickly evaluate the conditions under which you might consider to give me a call(may be!).<br>You might consider giving me a call, if. . .<br><br>1.	You want a fresher with good programming skills.<br><br>2.	You want a person with decent database knowledge.<br><br>3.	Who is currently working really hard to learn web development.<br><br>4. Who has decent experience as a fresher with website development.<br><br>5.	Who would not restrict himself to one skill but wants to push his limits by working on any challenges he faces.<br><br>6. Who is willing to showcase an unmatchable learning desire.<br><br>7. Who is willing to workhard regardless of the number of hours, as long as he is getting learning opportunities.<br><br>8.	Who desires to work somewhere, where he could actually give something to the society.<br><br>If you are seeking for any of the above listed qualities, then may be you might consider giving a call to me (9148873567).<br><br>If by any chance, you are still reading this, then stop wasting your time already and have a look at my portfolio.<br><br>Note: Only the <b><i>homepage is responsive</i></b>, apps are still website based only.</p>");	




	});
});	