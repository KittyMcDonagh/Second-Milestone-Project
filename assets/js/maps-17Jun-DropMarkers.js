// Initial load of Google Maps. Show markers for everything

var mapMarkers = [];

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {

            // Knysna Elephant Park coordinates
            lat: -34.0385536,
            lng: 23.26503617

        }
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

        // G = Knysna Elephant Park
        { lat: -34.0385536, lng: 23.26503617 },

        // H = Plettenburg Bay
        { lat: -34.0610681, lng: 23.29123112 },

        // I = Milkwood Manor
        { lat: -34.050294, lng: 23.373779317 },

        // J = Nature's Valley
        { lat: -33.9782911, lng: 23.547230515 },

        // K = Port Elizabeth
        { lat: -33.8012478, lng: 25.249983910 },

        // L = Skepboom Tented Camp
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

        // R = Soweto
        { lat: -26.2438785, lng: 27.768230212 },

        // S = Lion and Safari Park
        { lat: -25.8324043, lng: 27.88659517 },

        // T = de Wildt Cheetah Sanctuary
        { lat: -25.6736889, lng: 27.921508817 },

        // U = Zulu Nyala Country Manor
        { lat: -25.9916381, lng: 27.97380617 },

        // V = Johannesburg
        { lat: -26.1715046, lng: 27.969983412 },

        // w = Ukutula Lodge and Game Reserve
        { lat: -25.5219364, lng: 27.67158617 },

        // x = Northcliff Ridge Eco Park
        { lat: -26.1452546, lng: 27.967363217 }
    ];


    // This function returns all the markers into "markers" which is passed to MarkerClusterer to be clustered

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}


//...............Show specific locations on the map

function showOnMap(mapDetails, mapLocs, mapLabels) {

    console.log(mapDetails);
    console.log(mapLocs);
    console.log(mapLabels);


    var map = new google.maps.Map(document.getElementById("map"), mapDetails);

    for (i = 0; i < mapLocs.length; i++) {

        var mapMarkers = mapLocs.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: mapLabels[i % mapLabels.length]
            });
        });


        mapMarkers[i] = new google.maps.Marker({
            position: mapLocs[i],
            animation: google.maps.Animation.DROP

        });

        // Add a listener to the marker and zoom in when clicked
        // "this" is the marker that was clicked

        google.maps.event.addListener(mapMarkers[i], 'click', function() {
            map.setZoom(16);
            map.setCenter(this.getPosition());
        });
        mapMarkers[i].setMap(map);
    }
}


