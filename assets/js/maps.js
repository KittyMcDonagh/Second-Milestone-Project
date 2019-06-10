function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
//            lat: 46.619261,
//            lng: -33.134766

// Johanesburg
 //           lat: -26.1715046,
   //         lng: 27.969983412
     
     //Garden Route National Park       
            lat: -33.834548,
            lng: 22.8934339
 
        }
    });
    


    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
//        { lat: 40.785091, lng: -73.968285 },
//        { lat: 41.084045, lng: -73.874245 },
//        { lat: 40.754932, lng: -73.984016 }
        
        //Cape Town International airport
        { lat: -33.971463, lng: 18.599896417 },
        
        // Hotel Verde
        { lat: -33.97415, lng: 18.589582917 },
        
        // Quayside Hotel, Simonstown
        { lat: -34.1928743, lng: 18.430560817 },
        
        // Teniqua Treetops
        { lat: -33.946955, lng: 22.852828317 },
        
        // Milkwood Manor Guesthouse
        { lat: -34.050294, lng: 23.373779317 },
        
        //Skepboom Tented Camp
        { lat: -33.5125013, lng: 25.751274517 },
        
        // Nambiti Private Game Reserve
        { lat: -28.4239819, lng: 29.976823317 },
        
        // Ingeli Forest Resort
        { lat: -30.537793, lng: 29.683793317 },
        
        // Elephant Rock Private Safari Lodge
        { lat: -28.5106028, lng: 29.939163217 },
        
        // Kruger National Park
        { lat: -23.9883848, lng: 31.552551517 },
        
        // Glen Afric
        { lat: -25.8135641, lng: 27.869428517 },
        
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    }); 

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
