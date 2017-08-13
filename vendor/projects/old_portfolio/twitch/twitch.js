$(document).ready(function(){

  displayDetails();
  
});

$("#blue, #green, #red").on('click', function(){

   // console.log(onlineArr);
    //console.log(offlineArr);

    switch(this.id)
    {
      case 'blue':
                  $("#stream0, #stream1, #stream2, #stream3, #stream4, #stream5").show();
                  break;

      case 'green':
                  for(var i=0;i<=onlineArr.length;i++)
                  {
                    $("#stream"+ onlineArr[i]).show();
                  }

                  for (var i = 0; i <= offlineArr.length; i++) {
                    $("#stream"+ offlineArr[i]).hide();
                  }
                  break;

      case 'red':
                for (var i = 0; i <= offlineArr.length; i++) {
                  $("#stream"+ offlineArr[i]).show();
                }

                for(var i=0;i<=onlineArr.length;i++)
                {
                  $("#stream"+ onlineArr[i]).hide();
                }
                break;
    }

  });
  
   var onlineArr=[];           //to display online channels only
  var offlineArr=[];          //to display offline channels only
 

	function displayDetails()
	{
		var twitch;
    var channelUrl="https://www.twitch.tv/";
    var channels=["ESL_SC2", "OgamingSC2", "lightofheaven", "riotgamesturkish", "manvsgame", "frodan"];

		
		channels.forEach(function(user,i)
		{
      var channelLink=channelUrl+user;
      $("#name" + i).wrap("<a href="+channelLink+" target=_blank></a>");

      //console.log(i);

      $.ajax({
		    	'async': true,
   		 	    'url': createUrl(user),
   	    		'dataType': "jsonp",
   		   		'success': function (data) {
                                    console.log(data);

	        	    twitch = data;
                if(twitch.stream==null)
        	   		{
        	   			 offlineArr.push(i);

        	   			$.ajax({
		    			       'async': true,
   		 	    		     'url': "https://api.twitch.tv/kraken/channels/"+user,
   	    				     'dataType': "jsonp",
   		   				     'success': function (data) {
	        	    		  


	        	    		  $("#logo" + i).css("background-color", "#AB987A");
	        	    		  $("#logo" + i).html("<img src="+data.logo+" width=\"50px\" height=\"50px\" style=\"border-radius:50%; box-shadow: 0 0 8px rgba(0, 0, 0, .8);\">");
           					  
                      $("#nameCol" + i).css({"background-color":"#AB987A", "font-family":"Titillium Web", "font-size":"18px", "color":"#E6E6E6"});
                      $("#name" + i).html("<p>"+data.display_name+"</p>");
                                      
//             	        console.log(data.display_name);
               

						        	$("#description" + i).css("background-color","#AB987A");
	           				  $("#description" + i).html("<p style=\"font-family:Titillium Web; font-size:17px; color:#0F1626;\">Offline</p>");
    	//	       			  console.log("Offline");
    		       		 }
    		       		});
        	   		}
        	   		else
        	   		{
                  onlineArr.push(i);

	       	   			$("#logo" + i).html("<img src="+twitch.stream.channel.logo+" width=\"50px\" height=\"50px\" style=\"border-radius:50%; box-shadow: 0 0 8px rgba(0, 0, 0, .8);\">");
           			
           				$("#name" + i).html("<p style=\"font-family:Titillium Web; font-size:18px; color:white \">"+twitch.stream.channel.display_name+"</p>");
					//	      console.log(twitch.stream.channel.display_name);           			

           				$("#description" + i).html("<p style=\"font-family:Titillium Web; font-size:17px; color:#E6E6E6;\">"+twitch.stream.game+" : "+twitch.stream.channel.status+"</p>");
    	      // 			console.log(twitch.stream.game); 
    	       		}
    	       	}

			});
      //$('#stream2').hide();
		});
	}


    function createUrl(user) {
      var api = "https://api.twitch.tv/kraken/streams/";
      return api + user;
    }
  
  	//https://api.twitch.tv/kraken/streams/OgamingSC2




// var url = "https://api.twitch.tv/kraken/streams"; //   Many Channels
//var url="https://api.twitch.tv/kraken/channels/dreamhackcs" //details about channel

