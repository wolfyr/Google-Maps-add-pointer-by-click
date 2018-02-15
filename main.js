function initMap(){
  var options = {
    zoom: 6,
    center: {lat: 50.99833, lng: 5.86944}
  }

var map = new google.maps.Map(document.getElementById('map'), options);

google.maps.event.addListener(map, 'click', function( event ){
  alert("De latitude coordinaten zijn: " + event.latLng.lat() + "\nEn de Longtude coordiaten zijn:" + event.latLng.lng());
  addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});
});

function addMarker(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map:map
  });

}



}
