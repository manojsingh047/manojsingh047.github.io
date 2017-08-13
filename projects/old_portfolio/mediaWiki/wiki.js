$(document).ready(function(){


    $('#article').keypress(function(e){

        if(e.which==13)
        {
            displayDetails();
            return false;    
        }

    });


	$("#submit").click(function(){
		displayDetails();
	});


    

});
		function displayDetails()
		{	
		
			var title=[];
			var info=[];
			var link=[];
			$.ajax({
		    	'async': false,
   		     	'url': createUrl(),
    	    	'dataType': "jsonp",
        		'success': function (data)
    	    	{
    		        for (var i = 0; i < data.length; i++)
    		        {
    		        	if (data[1][i]==null)
    		        	{
    		        		title.push("Oops !!! Found Nothing, Try Again!")
    		        		info.push("");
    		        		
    		        		$("#title0").replaceWith("<p id=\"title0\"></p>");
    		    			$("#info0").replaceWith("<a id=\"link0\" href="+link[0]+"><p id=\"info0\"></p></a>");

    		    			$("#title1").replaceWith("<p id=\"title1\">"+title[1]+"</p>");
    		    			$("#info1").replaceWith("<a id=\"link1\" href="+link[1]+"><p id=\"info1\">"+info[1]+"</p></a>");


    		       			$("#title2").replaceWith("<p id=\"title2\"></p>");
    		    			$("#info2").replaceWith("<a id=\"link2\" href="+link[2]+"><p id=\"info2\">"+info[2]+"</p></a>");

							$("#title3").replaceWith("<p id=\"title3\"></p>");
    		    			$("#info3").replaceWith("<a id=\"link3\" href="+link[3]+"><p id=\"info3\">"+info[3]+"</p></a>");
							
    		        	}
    		        	else
    		        	{
    		        		title.push(data[1][i]);
    		        		info.push(data[2][i]);
    		        		link.push(data[3][i]);

    		    	
    		    			$("#title0").replaceWith("<p class='result' id=\"title0\">"+title[0]+"</p>");
   	 		    			$("#info0").replaceWith("<a id=\"link0\" href="+link[0]+"><p id=\"info0\">"+info[0]+"</p></a>");
    		        
   		       				$("#title1").replaceWith("<p class='result' id=\"title1\">"+title[1]+"</p>");
   		    				$("#info1").replaceWith("<a id=\"link1\" href="+link[1]+"><p id=\"info1\">"+info[1]+"</p></a>");

   		       				$("#title2").replaceWith("<p class='result' id=\"title2\">"+title[2]+"</p>");
   		    				$("#info2").replaceWith("<a id=\"link2\" href="+link[2]+"><p id=\"info2\">"+info[2]+"</p></a>");

							$("#title3").replaceWith("<p class='result' id=\"title3\">"+title[3]+"</p>");
   		    				$("#info3").replaceWith("<a id=\"link3\" href="+link[3]+"><p id=\"info3\">"+info[3]+"</p></a>");
    		        	}
    		        }
    		    	//$("#link0").replaceWith("<a id=\"link0\" href="+link[0]+">");
    		 	}
    		 });

		}

		function createUrl()
		{
			var article=$("#article").val();
			var url="http://en.wikipedia.org/w/api.php?action=opensearch&search=" +article+ "&format=json&callback=spellcheck";
			return url;
		}






