// The code for loading the maps is copied from the mini project to add a map to Rosie's resume 

// Initial load of Google Maps. Show markers for everything and cluster them

var mapMarkers = [];
var places, infoWindow;

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {

            // Center on Glen Afric
            lat: -25.8135641,
            lng: 27.869428517

        },
        // This map just gives an overview of where we will be. The markers wont give any information until the user
        // starts filtering
        disableDefaultUI: true
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [

        // A = Hotel Verde
        { lat: -33.97415, lng: 18.589582917 },

        // B = Chapman's Peak
        { lat: -34.1007996, lng: 18.358971615 },

        // C = Quayside Hotel, Simonstown
        { lat: -34.1928743, lng: 18.430560817 },

        // D = Cape of Good Hope
        { lat: -34.3567013, lng: 18.470203916 },

        // E = Stellenbosch
        { lat: -33.9466716, lng: 18.77454512 },

        // F = Marianne Wine Estate
        { lat: -33.8298546, lng: 18.877630117 },

        // G = Elephant Park, Knysna 
        { lat: -34.0385536, lng: 23.26503617 },

        // H = Plettenburg Bay
        { lat: -34.0610681, lng: 23.29123112 },

        // I = Milkwood Manor
        { lat: -34.050294, lng: 23.373779317 },

        // J = Nature's Valley
        { lat: -33.9782911, lng: 23.547230515 },

        // K = Port Elizabeth
        { lat: -33.8012478, lng: 25.249983910 },

        // L = Spekboom Tented Camp
        { lat: -33.5125013, lng: 25.751274517 },

        // M = Addo Elephant National Park
        { lat: -33.4833333, lng: 25.747811317 },

        // N = Lower Sabie Rest Camp
        { lat: -25.11986, lng: 31.913190317 },

        // O = Kruger National Park
        { lat: -23.9883848, lng: 31.552551517 },

        // P = Glen Afric
        { lat: -25.8135641, lng: 27.869428517 },

        // Q = Protea Hotel by Marriott
        { lat: -26.1486465, lng: 27.922543617 },

        // R = Lion and Safari Park
        { lat: -25.8324043, lng: 27.88659517 },

        // S = de Wildt Cheetah Sanctuary
        { lat: -25.6736889, lng: 27.921508817 },

        // T = Zulu Nyala Country Manor
        { lat: -25.9916381, lng: 27.97380617 },

        // U = Johannesburg
        { lat: -26.1715046, lng: 27.969983412 },

        // V = Ukutula Lodge and Game Reserve
        { lat: -25.5219364, lng: 27.67158617 },

    ];

    // Code take from mini project to add map to Rosie's resume
    // This function returns all the markers into "markers" which is passed to MarkerClusterer to be clustered

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}


//This function is called from filter.js to show selection locations and marker infowindows on the map

function showOnMap(mapDetails, mapLocs, mapLabels, mapNames) {
    
       // This function returns all the markers into "markers" which is passed to MarkerClusterer to be clustered

    var map = new google.maps.Map(document.getElementById("map"), mapDetails);

    var mapMarkers = mapLocs.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: mapLabels[i % mapLabels.length]
        });
        mapMarkers[i] = new google.maps.Marker({
            position: mapLocs[i]
        });
    });

    // Add a listener to the marker, and when clicked, show  the name in the marker's infowindow
    //  I learned how to do this from // and from https://developers.google.com/maps/documentation/javascript/examples/place-details

    for (i = 0; i < mapLocs.length; i++) {

        var markerName = mapNames[i].slice(0)

        google.maps.event.addListener(mapMarkers[i], 'click', function() {

            // "this" is the marker that was clicked on

            var marker = this;

            var infoWindow = new google.maps.InfoWindow({
                content: markerName
            });

            // Show the marker name in the maps marker's infowindow
            infoWindow.open(map, marker);

        });

        // Add the marker to the map
        mapMarkers[i].setMap(map);

    }
}
