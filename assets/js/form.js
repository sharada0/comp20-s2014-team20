
// This is the check script

var food_selection;
var max_price;
var myLat;
var myLng;
var myLoc;
var maxRadius = 15000;

data = Array();

function myLocation(){
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function(position) {
              myLat = position.coords.latitude;
              myLng = position.coords.longitude;
              myLoc = new google.maps.LatLng(myLat, myLng);
    });
  }
  else
  {
    alert("Geolocation Not supported on this browser!");
  }
}

function checkit()
{
	myLocation();

	var box = document.forms['example'].elements[0];
		if (!box.value) {
			alert('You haven\'t filled in ' + box.name + '!');
			box.focus()
			return;
		}
	food_selection = box.value;

	var box = document.forms['example'].elements[1];
		if (!box.value) {
			alert('You haven\'t filled in ' + box.name + '!');
			box.focus()
			return;
		}
	max_price = box.value;

	
	document.forms['example'].output.value = food_selection + '\n' + max_price +'\n';
}
/*
var locu = require('locu');
var mclient = locu.MenuItemClient(e18c6ceaae14397336d3a768afc41d7fbbd6bbca); // KEY is your API key, found on dev.locu.com
mclient.search({name: food_selection, 
			   category: food_selection, 
			   price: max_price, 
			   has_menu:true, 
			   location:(myLat,myLng),
			   radius:maxRadius}, 
	function(result){
				console.log(result);
 
});

function saveText(){
    		var dataJSON = "[";

    		for(var i = 0; i < data.length; i ++){
       			dataJSON += "{\"val\":\"" + data[i].innerHTML + "\"}";
       			
       				if(i < data.length -1){
          				dataJSON += ",";
       				}
    		}
    		dataJSON += " ]";
    		localStorage.setItem('food_selection', dataJSON);
    	
    	if(localStorage.data != undefined){
        		var m_price = document.getElementById("max_price");
         		store = JSON.parse(localStorage.data);

        			for(var i = 0; i < store.length; i ++){
          				var newElement = document.createElement('p');
          				newElemnt.innerHTML = store[store.length-1-i].val;
          					
          					if (status.firstChild){
           						status.insertBefore(newElement, status.firstChild);
          					}else{
            					status.appendChild(newElement);
          					}
          				}
          			}
          		}
          		
          		*/