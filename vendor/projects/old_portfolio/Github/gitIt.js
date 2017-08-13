 //apiLink--- https://developer.github.com/v3/users/  
// --> https://api.github.com/users/mathiasbynens


var userArr=[];

$(document).ready(function(){
    $('#button').on('click', function(){
        ajaxCall();
       

});

/* Making API call */
function ajaxCall()                  
    { 
      $.ajax({
          'async': false,
            'url': createUrl(),
            'dataType': "jsonp",
            'success': function (data)

            {
                if(data.data.message=="Not Found"||data.data.name==null||data.data.location==null)      //Checking for invalid entry
                {
                  alert('No user found. Please Try Again!');
                  return;
                }
                //var obj={};

                userArr.push({                                                           //Pushing api objects into an array
                  name:data.data.name,
                  location:data.data.location,
                  followers: data.data.followers,
                  image:data.data.avatar_url,
                  gitLink:data.data.html_url 
                });

                //userArr.push(obj);
                displayData(userArr);
          }
      });
    }

/*Function to generate API url based on user input*/    
function createUrl()
  {
    var username=$("#gitUsername").val();
    var url="https://api.github.com/users/"+username;
    return url;
  }

/*Function to display data*/
function displayData(arr)
{
  
   $('.data').html('');
  
  for (var i = 0; i < userArr.length; i++) {

  $('.data').append("<div class='col-md-3' id=\'user"+i+"\'><img class='img-responsive center-block' id=\'userImage"+i+"\' src=\'"+arr[i].image+"\' style='width: 200px; height: 250px; box-shadow: 0 0 10px 8px grey;'><span class='glyphicon glyphicon-remove' id='"+i+"\' style='position: absolute; margin-bottom: -100px; margin-left: 185px;'></span><br><p style='text-align: center; font-size:20px; font-weight:bolder;'>"+arr[i].name+"</p><p style='text-align: center;font-size:16px; font-weight:bolder; color:black;'>"+arr[i].location+"</p><p style='text-align: center;font-size:18px; font-weight:bolder; color:black;'>Followers: "+arr[i].followers+"</p></div>");

  $("#userImage" + i).wrap("<a href="+userArr[i].gitLink+" target=_blank></a>");

    $('#' + i).click(function(){                          //to delete card on clicking the glyphicon
      
      var id=parseInt($(this).attr("id"));            //getting numerical id

     removeCard(id);

  });

  }

}

/*Function to remove github card*/
function removeCard(index)
{

  userArr.splice(index,1);
  if(userArr.length==0)             //to be able to add more cards
  {
    i=0;
  }
  displayData(userArr);
}

/*Function to sort github cards*/
$('#nameAsc, #locationAsc, #followerAsc, #nameDesc, #locationDesc, #followerDesc ').click(function(){

  switch(this.id)
  {
    case 'nameAsc': userArr=userArr.sort(function(a, b)
                    {
                       var nameA=a.name.toLowerCase();
                       var nameB=b.name.toLowerCase();
                       if (nameA < nameB) //sort string ascending
                        return -1 ;
                       if (nameA > nameB)
                        return 1;
                       return 0 ;//default return value (no sorting)
                   
                     
                    });
                    displayData(userArr);

        
                    break;
    case 'nameDesc': userArr=userArr.sort(function(a, b)
                    {
                      var nameA=a.name.toLowerCase();
                       var nameB=b.name.toLowerCase();
                       if (nameA < nameB) //sort string ascending
                        return -1 ;
                       if (nameA > nameB)
                        return 1;
                       return 0 ;//default return value (no sorting)
                    });
                    userArr=userArr.reverse();
                    displayData(userArr);
 
                    break;
    case 'locationAsc':userArr=userArr.sort(function(a, b)
                    {
                      var locationA=a.location.toLowerCase();
                       var locationB=b.location.toLowerCase();
                       if (locationA < locationB) //sort string ascending
                        return -1; 
                       if (locationA > locationB)
                        return 1;
                       return 0 ;//default return value (no sorting)
                    });

                    displayData(userArr);
                    break;
  case 'locationDesc':userArr=userArr.sort(function(a, b)
                    {
                      var locationA=a.location.toLowerCase();
                       var locationB=b.location.toLowerCase();
                       if (locationA < locationB) //sort string ascending
                        return -1; 
                       if (locationA > locationB)
                        return 1;
                       return 0 ;//default return value (no sorting)
                    });
                    userArr=userArr.reverse();
                    displayData(userArr);
                    break;
    case 'followerAsc':userArr=userArr.sort(function(a, b)
                      {
                         if (a.followers > b.followers) {
                            return 1;
                          }
                          if (a.followers < b.followers) {
                            return -1;
                          }
                          // a must be equal to b
                          return 0;
                      });

                          displayData(userArr);
                          break;
   
    case 'followerDesc':userArr=userArr.sort(function(a, b)
                      {
                        if (a.followers > b.followers) {
                            return 1;
                          }
                          if (a.followers < b.followers) {
                            return -1;
                          }
                          // a must be equal to b
                          return 0;
                      });
                
                        userArr=userArr.reverse();
                      
                      displayData(userArr); 
                      break;
    }
  });

/*Adding Enter key press functionality*/
  $('#gitUsername').keypress(function(e){

    if(e.which==13)
    {
      ajaxCall();
    }
  });


});