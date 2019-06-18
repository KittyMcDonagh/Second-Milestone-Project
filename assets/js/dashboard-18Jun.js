$(document).ready(function() {

    $("#user-message").html("Click on a menu item and the filter will appear here.").hide();
    $("#user-message").addClass("user-message-style-bg");
    $("#user-message").fadeTo(7000, .7);

    // If LODGINGS is clicked . . .

    $("#lodgings-link").click(function() {

        // Hide the user message
        $("#user-message").removeClass("user-message-style").hide();

        // Show the filter heading
        $("#user-message").addClass("filter-heading-style")
        $("#user-message").html("Lodgings Filter").show();

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

                // L = Skepboom Tented Camp
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

        // If the Safari Chart is clicked on - - - 
        if (selectionType === "Safari Filter") {

            // Set the labels and locations for the Safari Types . . .

            var elephantLabels = "GM";
            var elephantLocations = [

                // G = Knysna Elephant Park
                { lat: -34.0385536, lng: 23.26503617 },

                // M = Addo Elephant National Park
                { lat: -33.4833333, lng: 25.747811317 }
            ];

            var bigFiveLabels = "OPU";
            var bigFiveLocations = [

                // O = Kruger National Park
                { lat: -23.9883848, lng: 31.552551517 },

                // P = Glen Afric
                { lat: -25.8135641, lng: 27.869428517 },

                // U = Zulu Nyala Country Manor
                { lat: -25.9916381, lng: 27.97380617 }
            ];

            var lionLabels = "SW";
            var lionLocations = [

                // S = Lion and Safari Park
                { lat: -25.8324043, lng: 27.88659517 },

                // w = Ukutula Lodge and Game Reserve
                { lat: -25.5219364, lng: 27.67158617 }
            ];

            var cheetahLabels = "T";
            var cheetahLocations = [

                // T = de Wildt Cheetah Sanctuary
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

        // If Sight Seeing was clicked on . . . 

        if (selectionType === "Sightseeing Filter") {

            // Set the labels and locations for the Sightseeing types . . .

            var cityLabels = "GM";
            var cityLocations = [

                // E = Stellenbosch
                { lat: -33.9466716, lng: 18.77454512 },

                // K = Port Elizabeth
                { lat: -33.8012478, lng: 25.249983910 },

                // R = Soweto
                { lat: -26.2438785, lng: 27.768230212 },

                // V = Johannesburg
                { lat: -26.1715046, lng: 27.969983412 }
            ];

            var sceneryLabels = "OPU";
            var sceneryLocations = [

                /// B = Chapman's Peak
                { lat: -34.1007996, lng: 18.358971615 },

                // D = Cape of Good Hope
                { lat: -34.3567013, lng: 18.470203916 },

                // J = Nature's Valley
                { lat: -33.9782911, lng: 23.547230515 },

                // x = Northcliff Ridge Eco Park
                { lat: -26.1452546, lng: 27.967363217 }
            ];

            var whalesLabels = "SW";
            var whalesLocations = [

                // H = Plettenburg Bay
                { lat: -34.0610681, lng: 23.29123112 }
            ];

            var wineLabels = "T";
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

        var mapDetails = {
            // Center half way between nearest and further marker so that all markers can be seen on the map
            center: { lat: -30.330950, lng: 25.002745 },
            zoom: 5
        };

        // The following function is in maps.js. It shows the selected locations on the Map.
        
        console.log("mapLocs = "+mapLocs);
        console.log("mapLabels = "+mapLabels);

        showOnMap(mapDetails, mapLocs, mapLabels);
    });

});
