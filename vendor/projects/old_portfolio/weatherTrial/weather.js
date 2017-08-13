	$(document).ready(function(){
		
		localTemp();

	});

	$('#enterCity').keypress(function(e){

		if(e.which==13)
		{
			var cityLower="";					// to clear cityLower value for every call
			var city=$("#enterCity").val();
			cityLower=city.toLowerCase();				
			console.log(cityLower);
			
			$.ajax({
		        'async': false,
		       
		        'url': createUrl(city),
		        'success': function (data) {
		            var weather = data;
			 		displayTemp(weather, cityLower);	
		        }
		    });
			function createUrl(city)
			{	

				var api="http://api.openweathermap.org/data/2.5/weather?q=";
				var appID="&APPID=13339d982aeffe0ba75bec25f285a926&units=metric";
				return api+city+appID;	
			}
			return false;
		}
	});

	var currentTemp=0;
	var max=0;
	var min=0;
	
	function localTemp(){
		var latitude=0;
		var longitude=0;
		$('#currentButton').click(function(){
			if (navigator.geolocation) 											//if user allowed to track its location 
			{
			 	navigator.geolocation.getCurrentPosition(function(position){
					latitude=position.coords.latitude;
					longitude=position.coords.longitude;
					console.log(latitude);
					$.ajax({
			 			'async':false,
	 					'url': createUrl(latitude, longitude),
	 					'success':function(data)
		 				{
	 						var temp=data;
	 						var city=data.name.toLowerCase();
	 						displayTemp(temp, city);		
						}
			 		});
				});
			}
		});
		function createUrl(latitude, longitude)
		{	
			var api="http://api.openweathermap.org/data/2.5/weather?";
			var lat="lat="+latitude;
			var lon="&lon="+longitude;
			var appID="&APPID=13339d982aeffe0ba75bec25f285a926&units=metric";
			//console.log("url==" + api+lat+lon+appID);
			return api+lat+lon+appID;
		}
	}

	$("#submit").click(function(){
		
		var cityLower="";					// to clear cityLower value for every call
		var city=$("#enterCity").val();
		cityLower=city.toLowerCase();				
		console.log(cityLower);
		
		$.ajax({
	        'async': false,
	       
	        'url': createUrl(city),
	        'success': function (data) {
	            var weather = data;
		 		displayTemp(weather, cityLower);	
	        }
	    });
		function createUrl(city)
		{	

			var api="http://api.openweathermap.org/data/2.5/weather?q=";
			var appID="&APPID=13339d982aeffe0ba75bec25f285a926&units=metric";
			return api+city+appID;	
		}
	});
		

	function displayTemp(temp, cityLower)
	{
		var background=
		{
			clear:"images/clear0.jpg",
			clouds:"images/cloudy0.jpg",
			rain:"images/rain0.jpg",
			snow:"images/snow0.jpg",
			haze:"images/haze0.jpg",
			dusty:"images/dusty.jpg",
			thunderstorm:"images/thunder.jpg",
			home:"images/home.jpg"

		};
		var x=new Date();		//Getting current date and time--Mon Apr 25 2016 18:29:49 GMT+0530 (India Standard Time)

		x=x+"";					//parsing to string
		var y=x.split("");		//string to array conversion

		var date=[];			//
		
		for(var i=0;i<15;i++)
			date.push(y[i]);	//getting only required number of characters
								
		date=date.join("");		//joining array items

		var cityApiLower=temp.name.toLowerCase();

		if(cityLower!=cityApiLower)
			{
				$("#city").replaceWith("<p id=\"city\"></p>");
				$("#date").replaceWith("<p id=\"date\"></p>");
				$("#cityDescription").replaceWith("<p id=\"cityDescription\">Woops!!!<br>Did you spell city correctly?<br> Try again!</p>");

				$("#icon").replaceWith("<img id=\"icon\">");
				$("#cityTemp").replaceWith("<p id=\"cityTemp\"></p>");
				$("#max").replaceWith("<p id=\"max\"></p>");
				$("#min").replaceWith("<p id=\"min\"></p>");
				
				$('#fahren, #celcius').off("click");
			}
			else
			{
				switch(temp.weather[0].main.toLowerCase())
				{
					case "clouds":$("body").css({"background":"url("+background.clouds+") no-repeat center center fixed", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"});
					break;
					case "rain": $("body").css({"background":"url("+background.rain+") no-repeat center center fixed", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"});
					break;
					case "snow": $("body").css({"background":"url("+background.snow+") no-repeat center center fixed", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"});
					break;
					case "clear":$("body").css({"background":"url("+background.clear+") no-repeat center center fixed", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"});
					break;
					case "haze":$("body").css({"background":"url("+background.haze+") no-repeat center center fixed", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"});
					break;
					case "dusty":$("body").css({"background":"url("+background.dusty+") no-repeat center center fixed", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"});
					break;
					case "thunderstorm":$("body").css({"background":"url("+background.thunder+") no-repeat center center fixed", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"});
					break;
					default: $("body").css({"background":"url("+background.home+") no-repeat center center fixed", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"});
				}
				$("#city").replaceWith("<p id=\"city\">"+temp.name+"</p>");
				$("#date").replaceWith("<p id=\"date\">"+date+"</p>");

				$("#cityDescription").replaceWith("<p id=\"cityDescription\">"+temp.weather[0].main+"</p>");

				currentTemp=temp.main.temp.toPrecision(2);
				max=temp.main.temp_max.toPrecision(2);
				min=temp.main.temp_min.toPrecision(2);

				$("#cityTemp").replaceWith("<p id=\"cityTemp\">"+currentTemp+"&#8451</p>");
				$("#max").replaceWith("<p id=\"max\">"+max+"&#8451</p>");
				$("#min").replaceWith("<p id=\"min\">"+min+"&#8451</p>");

				var iconImg=temp.weather[0].icon;
				var iconUrl="http://openweathermap.org/img/w/"+iconImg+".png";
				$("#icon").replaceWith("<img id=\"icon\" src="+iconUrl+">");
				$('#fahren, #celcius').on("click", function(){
					if(this.id=='fahren')
					tempInFahren();
					else if (this.id=='celcius')
					tempInCelcius();	
				});
			}
	}	

	function tempInFahren()
	{
		var tempFahren=currentTemp*9/5+32;
		var maxFahren=max*9/5+32;
		var minFahren=min*9/5+32;
		$("#cityTemp").replaceWith("<p id=\"cityTemp\">"+tempFahren.toPrecision(2)+"&#8457</p>"); 
		$("#max").replaceWith("<p id=\"max\">"+maxFahren.toPrecision(2)+"&#8457</p>");
		$("#min").replaceWith("<p id=\"min\">"+minFahren.toPrecision(2)+"&#8457</p>");
	}
	function tempInCelcius()
	{
		$("#cityTemp").replaceWith("<p id=\"cityTemp\">"+currentTemp+"&#8451</p>"); 
		$("#max").replaceWith("<p id=\"max\">"+max+"&#8451</p>");
		$("#min").replaceWith("<p id=\"min\">"+min+"&#8451</p>");
	}

