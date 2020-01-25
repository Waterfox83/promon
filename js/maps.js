function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: 21.03261, lng: 77.33919}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    console.log(i + " " + location_names[i])
    return new google.maps.Marker({
      position: location,
      label: location_names[i]
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
  {lat: 28.65195, lng: 77.23149},
  {lat: 26.83928, lng: 80.92313},
  {lat: 17.38405, lng: 78.45636},
  {lat: 23.41999, lng: 78.46233},
  {lat: 30.03577, lng: 77.7631},
  {lat: 17.67152, lng: 75.91044},
  {lat: 17.33583, lng: 76.83757},
  {lat: 29.69505, lng: 77.67964},
  {lat: 11.2561387, lng: 75.6707263},
  {lat: 22.94806, lng: 88.49833},
  {lat: 23.25469, lng: 77.40289},
  {lat: 26.07467, lng: 81.06312},
  {lat: 20.39324, lng: 78.13201}
]

var location_names = [
    "Delhi",
    "Lucknow",
    "Hyderabad",
    "Bareli",
    "Nawada",
    "Solapur",
    "Gulbarga",
    "Deoband",
    "Calicut",
    "Kanpur",
    "Bhopal",
    "Murshidabad",
    "Yavatmal"
]