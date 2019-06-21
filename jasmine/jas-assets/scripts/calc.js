//I am not sure if I have taken the right approach to Jasmine testing, but here's what I have done:
// I have taken the functions that deal with user interactions and created some jasmine tests.
// I have removed any code that takes values from the DOM or adds information to the DOM
// The values being tested are passed in from calcSpec
// I have based the test around being able to return the correct Markers and Location names only 
// I am testing only my own javascript code - I'm not testing dc/d3 or maps (I don't know how to do that)


function showSelection(mainSelection) {

    if (mainSelection == "Lodgings") {

        // Show the Lodgings Markers on the map

        var mapLabels = "ACGILNPQ";
        var mapNames = [

            "Hotel Verde, Cape Town",

            "Quayside Hotel, Simonstown",

            "Elephant Park Lodge, Knysna",

            "Milkwood Manor, Plettenburg Bay",

            "Spekboom Tented Camp, Addo Elephant Park",

            "Lower Sabie Rest Camp, Kruger National Park",

            "Glen Afric Lodge, Glen Afric Park",

            "Protea Hotel by Marriott, Roodepoort"
        ];



        return mapLabels.concat("_", mapNames);
    }

    if (mainSelection == "Safari") {

        // Show the Safari Markers on the map

        var mapLabels = "GMOPRSTV";
        var mapNames = [

            "Elephant Park, Knysna",

            "Elephant National Park, Addo",

            "Kruger National Park, South Africa",

            "Glen Afric Park, South Africa",

            "Lion and Safari Park, Hartbeespoort",

            "de Wildt Cheetah Sanctuary",

            "Zulu Nyala Country Manor, Hluhluwe",

            "Ukutula Lodge and Game Reserve, Farm Klipkop"
        ];

        return mapLabels.concat("_",mapNames);
    }
    
    if (mainSelection == "Sightseeing") {

        // Show the Sight Seeing Markers on the map

        var mapLabels = "BDEFHJKPU";
        
        var mapNames = [

        "Chapman's Peak, Cape Peninsula",

        "Cape of Good Hope, Cape Peninsula",

        "Stellenbosch, Western Cape",

        "Marianne Wine Estate, Stellenbosch",

        "Plettenburg Bay, Western Cape",

        "Nature's Valley, Southern Cape",

        "Port Elizabeth, Eastern Cape",

        "Johannesburg, Gauteng"
    ];

        return mapLabels.concat("_",mapNames);
    }
    alert("Error! - Must be Lodgings, Safari, or Sight Seeing.");

}

// LODGINGS FILTER - Check what pie slices are selected and return the marker labels and location names


function showLodgingsFilter(pieSlices) {


    // Clear locations, labels, names and pie slices

    var mapNames = [];
    var mapLabels = "";



    // Set Hotel Names for showing on Markers

    // Set the labels and locations for the Lodging Types . . .

    var hotelLabels = "ACIQ";
    var hotelLocations = [

        // A = Hotel Verde
        { lat: -33.97415, lng: 18.589582917 },

        // C = Quayside Hotel, Simonstown

        { lat: -34.1928742, lng: 18.432612721 },

        // I = Milkwood Manor
        { lat: -34.050294, lng: 23.373779317 },

        // Q = Protea Hotel by Marriott
        { lat: -26.1486451, lng: 27.924185419 }
    ];

    // Set Hotel Names for showing on Markers

    var hotelNames = [

        "Hotel Verde, Cape Town",

        "Quayside Hotel, Simonstown",

        "Milkwood Manor, Plettenburg Bay",

        "Protea Hotel by Marriott, Roodepoort"
    ];

    var lodgesLabels = "GP";
    var lodgesLocations = [

        // G = Knysna Elephant Park
        { lat: -34.0385536, lng: 23.26503617 },

        // P = Glen Afric
        { lat: -25.8135641, lng: 27.869428517 }

    ];
    // Set Lodge Names for showing on Markers

    var lodgesNames = [

        "Elephant Park Lodge, Knysna",

        "Glen Afric Lodge, Glen Afric Park"

    ];

    var restCampLabels = "LN";
    var restCampLocations = [

        // L = Spekboom Tented Camp
        { lat: -33.5125013, lng: 25.751274517 },

        // N = Lower Sabie Rest Camp
        { lat: -25.11986, lng: 31.913190317 }
    ];

    // Set Restcamp Names for showing on Markers

    var restCampNames = [

        "Spekboom Tented Camp, Addo Elephant Park",

        "Lower Sabie Rest Camp, Kruger National Park"

    ];

    // Select the pieces of the pie that that are passed in by calcSpec
    // If nothing is selected . . . return all pieces

    if (pieSlices.length > 0) {

        for (var i = 0; i < pieSlices.length; i++) {
            if (pieSlices[i] == "_0") {

                // Show hotels in the Gallery 

                mapLabels = mapLabels.concat(hotelLabels);
                mapNames = mapNames.concat(hotelNames);


            }

            if (pieSlices[i] === "_1") {

                mapLabels = mapLabels.concat(lodgesLabels);
                mapNames = mapNames.concat(lodgesNames);
            }

            if (pieSlices[i] === "_2") {


                mapLabels = mapLabels.concat(restCampLabels);
                mapNames = mapNames.concat(restCampNames);
            }
        }
    }
    else {

        // No slices selected (piechart has reset to the begining, show all lodgings details . . .

        mapLabels = mapLabels.concat(hotelLabels, lodgesLabels, restCampLabels);
        mapNames = mapNames.concat(hotelNames, lodgesNames, restCampNames);

    }


    return mapLabels.concat("_", mapNames);
}


// SAFARI FILTER - Check what pie slices are selected and return the marker labels and location names

function showSafariFilter(pieSlices) {

    var mapLabels = "";
    var mapNames = [];


    // Set the labels and locations for the Safari Types . . .

    var bigFiveLabels = "OPT";


    // Set the names for the Map Markers

    var bigFiveNames = [

        "Kruger National Park, South Africa",

        "Glen Afric Park, South Africa",

        "Zulu Nyala Country Manor, Hluhluwe",
    ];


    var elephantLabels = "GM";


    // Set the names for the Map Markers

    var elephantNames = [

        "Elephant Park, Knysna",

        "Elephant National Park, Addo"

    ];

    var lionLabels = "RV";


    // Set the names for the Map Markers

    var lionNames = [

        "Lion and Safari Park, Hartbeespoort",

        "Ukutula Lodge and Game Reserve, Farm Klipkop"
    ];

    var cheetahLabels = "S";

    var cheetahNames = [

        "de Wildt Cheetah Sanctuary"
    ];


    // Get the pieces of the pie that are selected.
    // The class "selected" will have been added to the element of the selected pie slice
    // More than one slice may be selected

    // First hide all Safari details and then show only the types selected . . .


    // If everything is deselected (piechart has reset), pieSlices will be empty

    if (pieSlices.length > 0) {

        for (var i = 0; i < pieSlices.length; i++) {
            if (pieSlices[i] === "_0") {

                mapLabels = mapLabels.concat(bigFiveLabels);
                mapNames = mapNames.concat(bigFiveNames);
            }

            if (pieSlices[i] === "_1") {

                mapLabels = mapLabels.concat(elephantLabels);
                mapNames = mapNames.concat(elephantNames);
            }

            if (pieSlices[i] === "_2") {

                mapLabels = mapLabels.concat(lionLabels);
                mapNames = mapNames.concat(lionNames);
            }

            if (pieSlices[i] === "_3") {


                mapLabels = mapLabels.concat(cheetahLabels);
                mapNames = mapNames.concat(cheetahNames);
            }
        }
    }
    else {

        // No slices selected, show all safari details . . .

        mapLabels = mapLabels.concat(bigFiveLabels, elephantLabels, lionLabels, cheetahLabels, );
        mapNames = mapNames.concat(bigFiveNames, elephantNames, lionNames, cheetahNames);

    }
    return mapLabels.concat("_", mapNames);
}


// SIGHT SEEING FILTER - See what pieces of the pie are selected and show the markers and locations

function showSightSeeingFilter(pieSlices) {

    var mapLabels = ""
    var mapNames = []

    // Set the labels and locations for the Sightseeing types . . .

    var cityLabels = "EKU";


    // Set the names for the Map Markers

    var cityNames = [

        "Stellenbosch, Western Cape",

        "Port Elizabeth, Eastern Cape",

        "Johannesburg, Gauteng"
    ];


    var sceneryLabels = "BDJ";


    // Set the names for the Map Markers

    var sceneryNames = [

        "Chapman's Peak, Cape Peninsula",

        "Cape of Good Hope, Cape Peninsula",

        "Nature's Valley, Southern Cape"

    ];

    var whalesLabels = "H";


    // Set the names for the Map Markers

    var whalesNames = [

        "Plettenburg Bay, Western Cape"

    ];

    var wineLabels = "F";


    // Set the names for the Map Markers

    var wineNames = [

        "Marianne Wine Estate, Stellenbosch",

    ];



    //If nothing selected return all markers and names

    if (pieSlices.length > 0) {

        for (var i = 0; i < pieSlices.length; i++) {
            if (pieSlices[i] === "_0") {


                mapLabels = mapLabels.concat(cityLabels);
                mapNames = mapNames.concat(cityNames);
            }

            if (pieSlices[i] === "_1") {


                mapLabels = mapLabels.concat(sceneryLabels);
                mapNames = mapNames.concat(sceneryNames);
            }

            if (pieSlices[i] === "_2") {


                mapLabels = mapLabels.concat(whalesLabels);
                mapNames = mapNames.concat(whalesNames);
            }

            if (pieSlices[i] === "_3") {


                mapLabels = mapLabels.concat(wineLabels);
                mapNames = mapNames.concat(wineNames);
            }
        }
    }
    else {

        mapLabels = mapLabels.concat(cityLabels, sceneryLabels, whalesLabels, wineLabels);
        mapNames = mapNames.concat(cityNames, sceneryNames, whalesNames, wineNames);
    }
    return mapLabels.concat("_", mapNames);
}
