$(document).ready(function() {

    $("#user-message").html("<p>Select <strong>Lodgings, Safari,</strong> or <strong>Sight Seeing</strong> from the above menu.</p>").hide();
    $("#user-message").append("<p>A <strong>filter</strong> will appear here. Use it to filter the details on the Map and the Gallery.</p>").hide();
    $("#user-message").append("<p>Select <strong>Gallery</strong> to see the photos below.</p>").hide();
    $("#user-message").append("<p>Select <strong>Home</strong> to start again.</p>").hide();
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

        var mapDetails = {
            // Center on Glen Afric
            center: { lat: -25.8135641, lng: 27.869428517 },
            zoom: 5
        };

        // The following function is in maps.js. It shows the selected locations on the Map.

        console.log("mapLocs = " + mapLocs);
        console.log("mapLabels = " + mapLabels);

        showOnMap(mapDetails, mapLocs, mapLabels);



        // Show the filter heading
        $("#user-message").addClass("filter-heading-style")
        $("#user-message").html("Lodgings Filter").show();
        $("#user-message-2").html("Click on a Slice to Filter")

        queue()
            .defer(d3.json, "/assets/data/sa-original.json")
            .await(makeGraphs);

        function makeGraphs(error, transactionsData) {
            var ndx = crossfilter(transactionsData);

            var residence_dim = ndx.dimension(dc.pluck('type'));
            var total_days_per_residence = residence_dim.group().reduceSum(dc.pluck('ldg_count'));
            dc.pieChart('#filter-piechart')
                .height(470)
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

        var mapDetails = {
            // Center on Glen Afric
            center: { lat: -25.8135641, lng: 27.869428517 },
            zoom: 5
        };

        // The following function is in maps.js. It shows the selected locations on the Map.

        console.log("mapLocs = " + mapLocs);
        console.log("mapLabels = " + mapLabels);

        showOnMap(mapDetails, mapLocs, mapLabels);


        // Show the filter heading
        $("#user-message").addClass("filter-heading-style")
        $("#user-message").html("Safari Filter").show();

        queue()
            .defer(d3.json, "/assets/data/sa-original.json")
            .await(makeGraphs);

        function makeGraphs(error, transactionsData) {

            var ndx = crossfilter(transactionsData);

            var safari_dim = ndx.dimension(dc.pluck('type'));
            var total_per_safari = safari_dim.group().reduceSum(dc.pluck('safari_count'));
            dc.pieChart('#filter-piechart')
                .height(470)
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

        var mapDetails = {

            // Center on Johannesburg

            center: { lat: -26.1715046, lng: 27.969983412 },
            zoom: 5
        };

        // The following function is in maps.js. It shows the selected locations on the Map.

        console.log("mapLocs = " + mapLocs);
        console.log("mapLabels = " + mapLabels);

        showOnMap(mapDetails, mapLocs, mapLabels);


        // Show the filter heading
        $("#user-message").addClass("filter-heading-style")
        $("#user-message").html("Sightseeing Filter").show();

        queue()
            .defer(d3.json, "/assets/data/sa-original.json")
            .await(makeGraphs);

        function makeGraphs(error, transactionsData) {

            var ndx = crossfilter(transactionsData);

            var sightsee_dim = ndx.dimension(dc.pluck('type'));
            var total_per_sightsee = sightsee_dim.group().reduceSum(dc.pluck('sight_see_count'));
            dc.pieChart('#filter-piechart')
                .height(470)
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
        console.log(selectionType);

        var mapLocs = [];
        var mapLabels = "";
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

            var hotelLabels = "ACQ";
            var hotelLocations = [

                // A = Hotel Verde
                { lat: -33.97415, lng: 18.589582917 },

                // C = Quayside Hotel, Simonstown

                { lat: -34.1928742, lng: 18.432612721 },

                // Q = Protea Hotel by Marriott
                { lat: -26.1486451, lng: 27.924185419 }
            ];

            var lodgesLabels = "GIP";
            var lodgesLocations = [

                // G = Knysna Elephant Park
                { lat: -34.0385536, lng: 23.26503617 },

                // I = Milkwood Manor
                { lat: -34.050294, lng: 23.373779317 },

                // P = Glen Afric
                { lat: -25.8135641, lng: 27.869428517 }

            ];

            var restCampLabels = "LN";
            var restCampLocations = [

                // L = Spekboom Tented Camp
                { lat: -33.5125013, lng: 25.751274517 },

                // N = Lower Sabie Rest Camp
                { lat: -25.11986, lng: 31.913190317 }
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

            console.log("pieSlices = " + pieSlices);

            // If nothing is selected, pieSlices will be empty . . .

            if (pieSlices.length > 0) {

                for (var i = 0; i < pieSlices.length; i++) {
                    if (pieSlices[i] === "_0") {

                        mapLocs = mapLocs.concat(hotelLocations);
                        mapLabels = mapLabels.concat(hotelLabels);
                    }

                    if (pieSlices[i] === "_1") {

                        mapLocs = mapLocs.concat(lodgesLocations);
                        mapLabels = mapLabels.concat(lodgesLabels);
                    }

                    if (pieSlices[i] === "_2") {

                        mapLocs = mapLocs.concat(restCampLocations);
                        mapLabels = mapLabels.concat(restCampLabels);
                    }
                }
            }
            else {

                // No slices selected, show all lodgings details . . .

                mapLocs = mapLocs.concat(hotelLocations, lodgesLocations, restCampLocations);
                mapLabels = mapLabels.concat(hotelLabels, lodgesLabels, restCampLabels);

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

            var elephantLabels = "GM";
            var elephantLocations = [

                // G = Knysna Elephant Park
                { lat: -34.0385536, lng: 23.26503617 },

                // M = Addo Elephant National Park
                { lat: -33.4833333, lng: 25.747811317 }
            ];

            var bigFiveLabels = "OPT";
            var bigFiveLocations = [

                // O = Kruger National Park
                { lat: -23.9883848, lng: 31.552551517 },

                // P = Glen Afric
                { lat: -25.8135641, lng: 27.869428517 },

                // T = Zulu Nyala Country Manor
                { lat: -25.9916381, lng: 27.97380617 }
            ];

            var lionLabels = "RV";
            var lionLocations = [

                // R = Lion and Safari Park
                { lat: -25.8324043, lng: 27.88659517 },

                // V = Ukutula Lodge and Game Reserve
                { lat: -25.5219364, lng: 27.67158617 }
            ];

            var cheetahLabels = "S";
            var cheetahLocations = [

                // S = de Wildt Cheetah Sanctuary
                { lat: -25.6736889, lng: 27.921508817 }

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

            // If everything is deselected, pieSlices will be empty

            if (pieSlices.length > 0) {

                for (var i = 0; i < pieSlices.length; i++) {
                    if (pieSlices[i] === "_0") {

                        mapLocs = mapLocs.concat(bigFiveLocations);
                        mapLabels = mapLabels.concat(bigFiveLabels);
                    }

                    if (pieSlices[i] === "_1") {

                        mapLocs = mapLocs.concat(lionLocations);
                        mapLabels = mapLabels.concat(lionLabels);
                    }

                    if (pieSlices[i] === "_2") {

                        mapLocs = mapLocs.concat(cheetahLocations);
                        mapLabels = mapLabels.concat(cheetahLabels);
                    }

                    if (pieSlices[i] === "_3") {

                        mapLocs = mapLocs.concat(elephantLocations);
                        mapLabels = mapLabels.concat(elephantLabels);
                    }
                }
            }
            else {

                // No slices selected, show all safari details . . .

                mapLocs = mapLocs.concat(bigFiveLocations, lionLocations, cheetahLocations, elephantLocations);
                mapLabels = mapLabels.concat(bigFiveLabels, lionLabels, cheetahLabels, elephantLabels);

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

            var sceneryLabels = "BDJ";
            var sceneryLocations = [

                /// B = Chapman's Peak
                { lat: -34.1007996, lng: 18.358971615 },

                // D = Cape of Good Hope
                { lat: -34.3567013, lng: 18.470203916 },

                // J = Nature's Valley
                { lat: -33.9782911, lng: 23.547230515 }
            ];

            var whalesLabels = "H";
            var whalesLocations = [

                // H = Plettenburg Bay
                { lat: -34.0610681, lng: 23.29123112 }
            ];

            var wineLabels = "F";
            var wineLocations = [

                // F = Marianne Wine Estate
                { lat: -33.8298546, lng: 18.877630117 }
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

            //If all the slices are deselected, pieSlices will be empty

            if (pieSlices.length > 0) {

                for (var i = 0; i < pieSlices.length; i++) {
                    if (pieSlices[i] === "_0") {

                        mapLocs = mapLocs.concat(cityLocations);
                        mapLabels = mapLabels.concat(cityLabels);
                    }

                    if (pieSlices[i] === "_1") {

                        mapLocs = mapLocs.concat(sceneryLocations);
                        mapLabels = mapLabels.concat(sceneryLabels);
                    }

                    if (pieSlices[i] === "_2") {

                        mapLocs = mapLocs.concat(whalesLocations);
                        mapLabels = mapLabels.concat(whalesLabels);
                    }

                    if (pieSlices[i] === "_3") {

                        mapLocs = mapLocs.concat(wineLocations);
                        mapLabels = mapLabels.concat(wineLabels);
                    }
                }
            }
            else {

                // No slices selected, show all sightseeing details . . .

                mapLocs = mapLocs.concat(cityLocations, sceneryLocations, whalesLocations, wineLocations);
                mapLabels = mapLabels.concat(cityLabels, sceneryLabels, whalesLabels, wineLabels);
            }

        }

        // The following function is in maps.js. It shows the selected locations on the Map.

        console.log("mapLocs = " + mapLocs);
        console.log("mapLabels = " + mapLabels);

        showOnMap(mapDetails, mapLocs, mapLabels);
    });

});
