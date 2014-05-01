var map;
var myLat = 42.40;
var myLng = -71.12;
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
	zoom: 13, // The larger the zoom number, the bigger the zoom
	center: me,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var marker;
var image_file = '../mapicon.png';


function init()
{
	map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	getMyLocation();
}

function myLocation(){
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(function(position) {
              myLat = position.coords.latitude;
              myLng = position.coords.longitude;
              var myLoc = new google.maps.LatLng(myLat, myLng);
              map.setCenter(myLoc);
              
            var marker = new google.maps.Marker({
                  position: myLoc,
                  map: map,
                  title: "Your Location"
              });
          marker['infoWindow']= new google.maps.InfoWindow({
            content: "You are here! ("+myLat.toFixed(4)+", "+myLng.toFixed(4)+")"
              });
          
          google.maps.event.addListener(marker, 'click', function() {
              this['infoWindow'].open(map, this)
              }); 
    });
  }
  else
  {
    alert("Geolocation Not supported on this browser!");
  }

}


function getMyLocation()
{
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

function renderMap()
{
	// Update map and go there...
	map.panTo(me);
	
	// Create a marker
	marker = new google.maps.Marker({
		position: me,
		title: "Current location"
	});

	// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(contentString);
		infowindow.open(map, marker);
	});
    google.maps.event.addListener(infowindow, 'content_changed', function() {
        infowindow.open(map, marker);
    })
                
    marker.setMap(map);
}
