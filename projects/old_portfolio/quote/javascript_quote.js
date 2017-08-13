$(document).ready(function(){
	
	
	displayQuote();
	displaySpeaker();


});	
	var quotes=[
				"We must become the change we want to see",
				"Some of the most beautiful things we have in life comes from our mistakes",
				"If the power to do hard work is not a skill, it's the best possible substitute for it",
				"The value of achievement lies in the achieving",
				"Be Your Best Without the Stress!Be the director and actor in your movie, called My Life",
				"If you want something bad enough, then do something about it!",
				"Love is the strongest force the world possesses, and yet it is the humblest imaginable",
				"Opportunity is missed by most because it is dressed in overalls and looks like work",
				"If you want to achieve some really big and interesting goals, you have to learn to fall in love with hard work",
				"If we fail to learn from our trials and errors then we truly fail",
				"Winners dont do different things, They do things differently",
				"You can succeed at almost anything for which you have unbridled enthusiasm",
				"When you live for a strong purpose, then hard work isn’t an option. It’s a necessity"
			]
	var speakers=[
			"Mahatma Gandhi",
			"Surgeo Bell",
			"James A. Garfield",
			"Mahatma Gandhi",
			"Katrina Radke",
			"Lindsey Rietzsch",
			"Mahatma Gandhi",
			"Thomas Alva Edison",
			"Steve Pavlina",
			"Lindsey Rietzsch",
			"Shiv Kera",
			"Zig Ziglar",
			"Steve Pavlina"
	]
var i=0;
var j=0;


$("#next").click(function(){

	if(quotes[i]==undefined || speakers[j]==undefined)
	{
		i=0;
		j=0;
		displayQuote();
		displaySpeaker();

	}
	else
	{
		displayQuote();
		displaySpeaker();
	}
});






function displayQuote()
{
	$("#quote > p").fadeOut(1000, function(){
		$("#quote > p").replaceWith("<p>\" "+quotes[i]+" \"</p>");
		i++;
	});

	$('#twitter').wrap($('<a>',{

	 href:"https://twitter.com/intent/tweet?hashtags=quotes&text=\""+quotes[i]+"\" -"+speakers[j]
	}));

	


}
function displaySpeaker()
{
	$("#speaker > p").fadeOut(1000, function(){
		$("#speaker > p").replaceWith("<p>- "+speakers[j]+"</p>");
		j++;
	});
}





	//Link:---https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22manoj%20singh.%22%20Lion
