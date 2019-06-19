$(document).ready(function() {

    $("#user-message").html("<p><strong><em>Welcome to my South African Trip Web Page!</em></strong></p>").hide();
    $("#user-message").append("<hr>").hide();
    $("#user-message").append("<p>Select <strong>Lodgings, Safari,</strong> or <strong>Sight Seeing</strong> from the <br>above navigation menu.</p>").hide();
    $("#user-message").append("<p>A <strong>filter</strong> will appear here. Use it to filter the details on the Map and Gallery.</p>").hide();
    $("#user-message").append("<hr>").hide();
    $("#user-message").append("<p>Select <strong>Gallery</strong> to see <br>the photos below.</p>").hide();
    $("#user-message").append("<p>Select <strong>Home</strong> to <br>start again.</p>").hide();
    $("#user-message").addClass("user-message-style-bg");
    $("#user-message").fadeTo(7000, .7);

    // If LODGINGS is clicked . . .

    $("#lodgings-link").click(function() {

        // Hide the user message
        $("#user-message").removeClass("user-message-style").hide();

        // Lodgings selected. Hide the Gallery details for Safari and Sightseeing
        // But first make sure Lodgings is showing

        $(".lodgings").show();

        $(".safari").hide();
        $(".sightseeing").hide();


        var mapLabels = "ACGILNPQ";
        var mapLocs = [

            // A = Hotel Verde
            { lat: -33.97415, lng: 18.589582917 },

            // C = Quayside Hotel, Simonstown
            { lat: -34.1928743, lng: 18.430560817 },

            // G = Knysna Elephant Park Lodge
            { lat: -34.0385536, lng: 23.26503617 },

            // I = Milkwood Manor
            { lat: -34.050294, lng: 23.373779317 },

            // L = Spekboom Tented Camp
            { lat: -33.5125013, lng: 25.751274517 },

            // N = Lower Sabie Rest Camp
            { lat: -25.11986, lng: 31.913190317 },

            // P = Glen Afric
            { lat: -25.8135641, lng: 27.869428517 },

            // Q = Protea Hotel by Marriott
            { lat: -26.1486465, lng: 27.922543617 },
        ];

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



        var mapDetails = {
            // Center on Glen Afric
            center: { lat: -25.8135641, lng: 27.869428517 },
            zoom: 5
        };

        // The following function is in maps.js. It shows the selected locations on the Map.



        showOnMap(mapDetails, mapLocs, mapLabels, mapNames);



        // Show the filter heading
        $("#user-message").addClass("filter-heading-style")
        $("#user-message").html("Lodgings Filter").show();
        $("#user-message-2").html("Click on a Slice to Filter")

        queue()
            .defer(d3.json, "assets/data/sa-original.json")
            .await(makeGraphs);

        function makeGraphs(error, transactionsData) {
            var ndx = crossfilter(transactionsData);

            var residence_dim = ndx.dimension(dc.pluck('type'));
            var total_days_per_residence = residence_dim.group().reduceSum(dc.pluck('ldg_count'));
            dc.pieChart('#filter-piechart')
                .height(431)
                .radius(90)
                .transitionDuration(1500)
                .dimension(residence_dim)
                .group(total_days_per_residence);

            dc.renderAll();
        }

    });

    $("#safari-link").click(function() {

        // Hide the user message
        $("#user-message").removeClass("user-message-style").hide();

        // Safari selected. Hide the Gallery details for Lodgings and Sightseeing
        // But first make sure Safari is showing

        $(".safari").show();

        $(".lodgings").hide();
        $(".sightseeing").hide();

        var mapLabels = "GMOPRSTV";
        var mapLocs = [

            // G = Knysna Elephant Park
            { lat: -34.0385536, lng: 23.26503617 },

            // M = Addo Elephant National Park
            { lat: -33.4833333, lng: 25.747811317 },

            // O = Kruger National Park
            { lat: -23.9883848, lng: 31.552551517 },

            // P = Glen Afric
            { lat: -25.8135641, lng: 27.869428517 },

            // R = Lion and Safari Park
            { lat: -25.8324043, lng: 27.88659517 },

            // S = de Wildt Cheetah Sanctuary
            { lat: -25.6736889, lng: 27.921508817 },

            // T = Zulu Nyala Country Manor
            { lat: -25.9916381, lng: 27.97380617 },

            // V = Ukutula Lodge and Game Reserve
            { lat: -25.5219364, lng: 27.67158617 }
        ];

        var mapNames = [

            "Elephant Park, Knysna",

            "Elephant National Park, Addo ",

            "Kruger National Park, South Africa",

            "Glen Afric Park, South Africa",

            "Lion and Safari Park, Hartbeespoort",

            "de Wildt Cheetah Sanctuary",

            "Zulu Nyala Country Manor, Hluhluwe",

            "Ukutula Lodge and Game Reserve, Farm Klipkop"

        ];


        var mapDetails = {
            // Center on Glen Afric
            center: { lat: -25.8135641, lng: 27.869428517 },
            zoom: 5
        };

        // The following function is in maps.js. It shows the selected locations on the Map.


        showOnMap(mapDetails, mapLocs, mapLabels, mapNames);


        // Show the filter heading
        $("#user-message").addClass("filter-heading-style")
        $("#user-message").html("Safari Filter").show();

        queue()
            .defer(d3.json, "assets/data/sa-original.json")
            .await(makeGraphs);

        function makeGraphs(error, transactionsData) {

            var ndx = crossfilter(transactionsData);

            var safari_dim = ndx.dimension(dc.pluck('type'));
            var total_per_safari = safari_dim.group().reduceSum(dc.pluck('safari_count'));
            dc.pieChart('#filter-piechart')
                .height(431)
                .radius(90)
                .transitionDuration(1500)
                .dimension(safari_dim)
                .group(total_per_safari);

            dc.renderAll();
        }

    });

    $("#sightseeing-link").click(function() {

        // Hide the user message
        $("#user-message").removeClass("user-message-style").hide();

        // Sight Seeing selected. Hide the Gallery details for Lodgings and Safari
        // But first make sure Sight Seeing is showing

        $(".sightseeing").show();

        $(".lodgings").hide();
        $(".safari").hide();

        var mapLabels = "BDEFHJKPU";
        var mapLocs = [

            // B = Chapman's Peak
            { lat: -34.1007996, lng: 18.358971615 },

            // D = Cape of Good Hope
            { lat: -34.3567013, lng: 18.470203916 },

            // E = Stellenbosch
            { lat: -33.9466716, lng: 18.77454512 },

            // F = Marianne Wine Estate
            { lat: -33.8298546, lng: 18.877630117 },

            // H = Plettenburg Bay
            { lat: -34.0610681, lng: 23.29123112 },

            // J = Nature's Valley
            { lat: -33.9782911, lng: 23.547230515 },

            // K = Port Elizabeth
            { lat: -33.8012478, lng: 25.249983910 },

            // U = Johannesburg
            { lat: -26.1715046, lng: 27.969983412 }

        ];

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


        var mapDetails = {

            // Center on Johannesburg

            center: { lat: -26.1715046, lng: 27.969983412 },
            zoom: 5
        };

        // The following function is in maps.js. It shows the selected locations on the Map.


        showOnMap(mapDetails, mapLocs, mapLabels, mapNames);


        // Show the filter heading
        $("#user-message").addClass("filter-heading-style")
        $("#user-message").html("Sightseeing Filter").show();

        queue()
            .defer(d3.json, "assets/data/sa-original.json")
            .await(makeGraphs);

        function makeGraphs(error, transactionsData) {

            var ndx = crossfilter(transactionsData);

            var sightsee_dim = ndx.dimension(dc.pluck('type'));
            var total_per_sightsee = sightsee_dim.group().reduceSum(dc.pluck('sight_see_count'));
            dc.pieChart('#filter-piechart')
                .height(431)
                .radius(90)
                .transitionDuration(1500)
                .dimension(sightsee_dim)
                .group(total_per_sightsee);
            dc.renderAll();
        }

    });


    // When the Filter Piechart is clicked on . . .

    $("#filter-piechart ").click(function() {

        // Select the pieces of the pie that were clicked on and display their markers on the map

        var selectionType = document.getElementById('user-message').innerHTML;

        // Clear locations, labels, names and pie slices

        var mapLocs = [];
        var mapLabels = "";
        var mapNames = [];
        var pieSlices = [];

        // If Lodgings Chart was clicked on . . . 

        if (selectionType === "Lodgings Filter") {

            // Set map center and zoom . . .

            var mapDetails = {
                // Center on Glen Afric
                center: { lat: -25.8135641, lng: 27.869428517 },
                zoom: 5
            };

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

            var sliceName = $(".pie-slice-group").children(".selected");

            // The name of the second class is the slice number ("-0", "-1", etc). 
            // There may be more than one slice selected

            for (var i = 0; i < sliceName.length; i++) {
                var classNames = $(sliceName[i]).attr("class").split(" ");
                pieSlices = pieSlices.concat(classNames[1]);
            }

            // First hide all Lodging Types in the Gallery, then show what's been selected . . .

            $(".hotel").hide();
            $(".lodge").hide();
            $(".restcamp").hide();


            // If nothing is selected (i.e. the piechart is reset to the begining, pieSlices will be empty . . .

            if (pieSlices.length > 0) {

                for (var i = 0; i < pieSlices.length; i++) {
                    if (pieSlices[i] === "_0") {

                        // Show hotels in the Gallery 

                        $(".hotel").show();

                        mapLocs = mapLocs.concat(hotelLocations);
                        mapLabels = mapLabels.concat(hotelLabels);
                        mapNames = mapNames.concat(hotelNames);
                    }

                    if (pieSlices[i] === "_1") {

                        $(".lodge").show();

                        mapLocs = mapLocs.concat(lodgesLocations);
                        mapLabels = mapLabels.concat(lodgesLabels);
                        mapNames = mapNames.concat(lodgesNames);
                    }

                    if (pieSlices[i] === "_2") {

                        $(".restcamp").show();

                        mapLocs = mapLocs.concat(restCampLocations);
                        mapLabels = mapLabels.concat(restCampLabels);
                        mapNames = mapNames.concat(restCampNames);
                    }
                }
            }
            else {

                // No slices selected (piechart has reset to the begining, show all lodgings details . . .

                $(".hotel").show();
                $(".lodge").show();
                $(".restcamp").show();

                mapLocs = mapLocs.concat(hotelLocations, lodgesLocations, restCampLocations);
                mapLabels = mapLabels.concat(hotelLabels, lodgesLabels, restCampLabels);
                mapNames = mapNames.concat(hotelNames, lodgesNames, restCampNames);

            }
        }

        // If the Safari Chart is clicked on - - - 
        if (selectionType === "Safari Filter") {

            // Set map center and zoom . . .

            var mapDetails = {
                // Center on Glen Afric
                center: { lat: -25.8135641, lng: 27.869428517 },
                zoom: 5
            };

            // Set the labels and locations for the Safari Types . . .

            var bigFiveLabels = "OPT";
            var bigFiveLocations = [

                // O = Kruger National Park
                { lat: -23.9883848, lng: 31.552551517 },

                // P = Glen Afric
                { lat: -25.8135641, lng: 27.869428517 },

                // T = Zulu Nyala Country Manor
                { lat: -25.9916381, lng: 27.97380617 }
            ];

            // Set the names for the Map Markers

            var bigFiveNames = [

                "Kruger National Park, South Africa",

                "Glen Afric Park, South Africa",

                "Zulu Nyala Country Manor, Hluhluwe",
            ];


            var elephantLabels = "GM";
            var elephantLocations = [

                // G = Knysna Elephant Park
                { lat: -34.0385536, lng: 23.26503617 },

                // M = Addo Elephant National Park
                { lat: -33.4833333, lng: 25.747811317 }
            ];

            // Set the names for the Map Markers

            var elephantNames = [

                "Elephant Park, Knysna",

                "Elephant National Park, Addo "

            ];

            var lionLabels = "RV";
            var lionLocations = [

                // R = Lion and Safari Park
                { lat: -25.8324043, lng: 27.88659517 },

                // V = Ukutula Lodge and Game Reserve
                { lat: -25.5219364, lng: 27.67158617 }
            ];

            // Set the names for the Map Markers

            var lionNames = [

                "Lion and Safari Park, Hartbeespoort",

                "Ukutula Lodge and Game Reserve, Farm Klipkop"
            ];

            var cheetahLabels = "S";
            var cheetahLocations = [

                // S = de Wildt Cheetah Sanctuary
                { lat: -25.6736889, lng: 27.921508817 }

            ];

            var cheetahNames = [

                "de Wildt Cheetah Sanctuary"
            ];


            // Get the pieces of the pie that are selected.
            // The class "selected" will have been added to the element of the selected pie slice
            // More than one slice may be selected

            var sliceName = $(".pie-slice-group").children(".selected");

            // The name of the second class is the slice number ("-0", "-1", etc). 
            // There may be more than one slice selected

            for (var i = 0; i < sliceName.length; i++) {
                var classNames = $(sliceName[i]).attr("class").split(" ");
                pieSlices = pieSlices.concat(classNames[1]);
            }

            // First hide all Safari details and then show the types selected . . .

            $(".bigfive").hide();
            $(".elephants").hide();
            $(".lions").hide();
            $(".cheetahs").hide();

            // If everything is deselected (piechart has reset), pieSlices will be empty

            if (pieSlices.length > 0) {

                for (var i = 0; i < pieSlices.length; i++) {
                    if (pieSlices[i] === "_0") {

                        // Show the Big Five in Gallery

                        $(".bigfive").show();

                        mapLocs = mapLocs.concat(bigFiveLocations);
                        mapLabels = mapLabels.concat(bigFiveLabels);
                        mapNames = mapNames.concat(bigFiveNames);
                    }

                    if (pieSlices[i] === "_1") {

                        // Show Elephants in Gallery

                        $(".elephants").show();

                        mapLocs = mapLocs.concat(elephantLocations);
                        mapLabels = mapLabels.concat(elephantLabels);
                        mapNames = mapNames.concat(elephantNames);
                    }

                    if (pieSlices[i] === "_2") {

                        // Show Lions in Gallery

                        $(".lions").show();


                        mapLocs = mapLocs.concat(lionLocations);
                        mapLabels = mapLabels.concat(lionLabels);
                        mapNames = mapNames.concat(lionNames);
                    }

                    if (pieSlices[i] === "_3") {

                        // Show Cheetahs in Gallery

                        $(".cheetahs").show();


                        mapLocs = mapLocs.concat(cheetahLocations);
                        mapLabels = mapLabels.concat(cheetahLabels);
                        mapNames = mapNames.concat(cheetahNames);
                    }
                }
            }
            else {

                // No slices selected (piechart has reset, show all safari details . . .

                $(".bigfive").show();
                $(".elephants").show();
                $(".lions").show();
                $(".cheetahs").show();


                mapLocs = mapLocs.concat(bigFiveLocations, lionLocations, cheetahLocations, elephantLocations);
                mapLabels = mapLabels.concat(bigFiveLabels, lionLabels, cheetahLabels, elephantLabels);
                mapNames = mapNames.concat(bigFiveNames, lionNames, cheetahNames, elephantNames);

            }
        }

        // If Sight Seeing was clicked on . . . 

        if (selectionType === "Sightseeing Filter") {

            // Set map center and zoom . . .

            var mapDetails = {

                // Center on Johannesburg

                center: { lat: -26.1715046, lng: 27.969983412 },
                zoom: 5
            };

            // Set the labels and locations for the Sightseeing types . . .

            var cityLabels = "EKU";
            var cityLocations = [

                // E = Stellenbosch
                { lat: -33.9466716, lng: 18.77454512 },

                // K = Port Elizabeth
                { lat: -33.8012478, lng: 25.249983910 },

                // U = Johannesburg
                { lat: -26.1715046, lng: 27.969983412 }
            ];

            // Set the names for the Map Markers

            var cityNames = [

                "Stellenbosch, Western Cape",

                "Port Elizabeth, Eastern Cape",

                "Johannesburg, Gauteng"
            ];


            var sceneryLabels = "BDJ";
            var sceneryLocations = [

                /// B = Chapman's Peak
                { lat: -34.1007996, lng: 18.358971615 },

                // D = Cape of Good Hope
                { lat: -34.3567013, lng: 18.470203916 },

                // J = Nature's Valley
                { lat: -33.9782911, lng: 23.547230515 }
            ];

            // Set the names for the Map Markers

            var sceneryNames = [

                "Chapman's Peak, Cape Peninsula",

                "Cape of Good Hope, Cape Peninsula",

                "Nature's Valley, Southern Cape"

            ];

            var whalesLabels = "H";
            var whalesLocations = [

                // H = Plettenburg Bay
                { lat: -34.0610681, lng: 23.29123112 }
            ];

            // Set the names for the Map Markers

            var whalesNames = [

                "Plettenburg Bay, Western Cape"

            ];

            var wineLabels = "F";
            var wineLocations = [

                // F = Marianne Wine Estate
                { lat: -33.8298546, lng: 18.877630117 }
            ];


            // Set the names for the Map Markers

            var wineNames = [

                "Marianne Wine Estate, Stellenbosch",

            ];


            // Get the pieces of the pie that are selected.
            // The class "selected" will have been added to the element of the selected pie slice
            // More than one slice may be selected

            var sliceName = $(".pie-slice-group").children(".selected");

            // The name of the second class is the slice number ("-0", "-1", etc). 
            // There may be more than one slice selected

            for (var i = 0; i < sliceName.length; i++) {
                var classNames = $(sliceName[i]).attr("class").split(" ");
                pieSlices = pieSlices.concat(classNames[1]);
            }

            // First hide all Sight Seeing types in the Gallery, then show what's been selected . . .

            $(".cities").hide();
            $(".scenery").hide();
            $(".whales").hide();
            $(".winery").hide();

            //If all the slices are deselected (piechart has reset), pieSlices will be empty

            if (pieSlices.length > 0) {

                for (var i = 0; i < pieSlices.length; i++) {
                    if (pieSlices[i] === "_0") {

                        // Show cities in the Gallery
                        $(".cities").show();

                        mapLocs = mapLocs.concat(cityLocations);
                        mapLabels = mapLabels.concat(cityLabels);
                        mapNames = mapNames.concat(cityNames);
                    }

                    if (pieSlices[i] === "_1") {

                        // Show Scenery in the Gallery
                        $(".scenery").show();

                        mapLocs = mapLocs.concat(sceneryLocations);
                        mapLabels = mapLabels.concat(sceneryLabels);
                        mapNames = mapNames.concat(sceneryNames);
                    }

                    if (pieSlices[i] === "_2") {

                        // Show whales in the Gallery

                        $(".whales").show();

                        mapLocs = mapLocs.concat(whalesLocations);
                        mapLabels = mapLabels.concat(whalesLabels);
                        mapNames = mapNames.concat(whalesNames);
                    }

                    if (pieSlices[i] === "_3") {

                        // Show winery in the Gallery

                        $(".winery").show();

                        mapLocs = mapLocs.concat(wineLocations);
                        mapLabels = mapLabels.concat(wineLabels);
                        mapNames = mapNames.concat(wineNames);
                    }
                }
            }
            else {

                // No slices selected (piechart has reset), show all sightseeing details . . .

                $(".cities").show();
                $(".scenery").show();
                $(".whales").show();
                $(".winery").show();


                mapLocs = mapLocs.concat(cityLocations, sceneryLocations, whalesLocations, wineLocations);
                mapLabels = mapLabels.concat(cityLabels, sceneryLabels, whalesLabels, wineLabels);
                mapNames = mapNames.concat(cityNames, sceneryNames, whalesNames, wineNames);
            }

        }

        // The following function is in maps.js. It shows the selected locations on the Map.

        showOnMap(mapDetails, mapLocs, mapLabels, mapNames);
    });

});
