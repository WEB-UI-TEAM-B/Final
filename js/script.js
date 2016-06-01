// JavaScript File
var marker;

function initMap() {
    
  var mapOptions = {
  zoom: 10,
  center: new google.maps.LatLng(48.923694, 24.709126),
  mapTypeId: google.maps.MapTypeId.ROARMAP
};
 var map = new google.maps.Map(document.getElementById('map'),  mapOptions);
    
    marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 48.923694, lng: 24.709126}
  });
  marker.addListener('click', toggleBounce);
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
