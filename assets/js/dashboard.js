$(document).ready(function() {

    // Create piecharts of the various aspects of the South African Trip

    queue()
        .defer(d3.json, "/assets/data/sa-original.json")
        .await(makeGraphs);


    function makeGraphs(error, transactionsData) {

        var ndx = crossfilter(transactionsData);

        // Overall Trip - showing Lodgings, Sightseeing, Safaris
        // When this piechart is clicked on it will reset all the other charts and the markers displayed on the map

        var highlights_dim = ndx.dimension(dc.pluck('activities'));
        var total_days_per_highlight = highlights_dim.group().reduceSum(dc.pluck('both_count'));
        dc.pieChart('#overall-trip-chart')
            .height(360)
            .radius(90)
            .transitionDuration(1500)
            .dimension(highlights_dim)
            .group(total_days_per_highlight);


        /* 
                // Lodgings - showing Hotels, Lodges, Restcamps
                // When this piechart is clicked on it will clear all information displayed and display only whats selected on this chart

                var lodgings_dim = ndx.dimension(dc.pluck('type'));
                var total_per_lodging = lodgings_dim.group().reduceSum(dc.pluck('ldg_count'));
                dc.pieChart('#lodging-types-chart')
                    .height(360)
                    .radius(90)
                    .transitionDuration(1500)
                    .dimension(lodgings_dim)
                    .group(total_per_lodging);

                // Safaris - showing Elephants, Cheetahs, Lions, the Big 5
                // When this piechart is clicked on it will clear all information displayed and display only whats selected on this chart

                var safaris_dim = ndx.dimension(dc.pluck('type'));
                var total_per_safari = safaris_dim.group().reduceSum(dc.pluck('safari_count'));
                dc.pieChart('#safari-chart')
                    .height(360)
                    .radius(90)
                    .transitionDuration(1500)
                    .dimension(safaris_dim)
                    .group(total_per_safari);

                // Sightseeing - showing Elephants, Cheetahs, Lions, the Big 5
                // When this piechart is clicked on it will clear all information displayed and display only whats selected on this chart

                var sightsee_dim = ndx.dimension(dc.pluck('type'));
                var total_per_sightsee = sightsee_dim.group().reduceSum(dc.pluck('sight_see_count'));
                dc.pieChart('#sightseeing-chart')
                    .height(360)
                    .radius(90)
                    .transitionDuration(1500)
                    .dimension(sightsee_dim)
                    .group(total_per_sightsee);
        */
        dc.renderAll();
    }



    // ----------------------- Check for clicks on Piecharts

    // --- If the Overall Trip piechart is clicked on, reset the map and all piecharts:

    $("#overall-trip-chart").click(function() {

        /* 
                queue()
                    .defer(d3.json, "/assets/data/sa-original.json")
                    .await(makeGraphs); */

        //     initMap();

        // Get the pieces of the pie that are selected - the class "selected will have been added to the pie slice element"

        var sliceName = $(".pie-slice-group").children(".selected");

        // The name of the second class is the slice number ("-0", "-1", etc). 
        // There may be more than one slice selected

        var pieSlices = [];
        var mapLabels = "";
        var mapLocs = [];

        for (var i = 0; i < sliceName.length; i++) {
            var classNames = $(sliceName[i]).attr("class").split(" ");
            pieSlices = pieSlices.concat(classNames[1]);
        }

        //        var sightSeeingLabels = "BDEHJKRVX";
        var sightSeeingLabels = "BDHJKVX";
        var sightSeeingLocs = [

            // B = Chapman's Peak
            { lat: -34.1007996, lng: 18.358971615 },

            // D = Cape of Good Hope
            { lat: -34.3567013, lng: 18.470203916 },

            // E = Stellenbosch
            //            { lat: -33.9466716, lng: 18.77454512 },

            // H = Plettenburg Bay
            { lat: -34.0610681, lng: 23.29123112 },

            // J = Nature's Valley
            { lat: -33.9782911, lng: 23.547230515 },

            // K = Port Elizabeth
            { lat: -33.8012478, lng: 25.249983910 },

            // R = Soweto
            //            { lat: -26.2438785, lng: 27.768230212 },

            // V = Johannesburg
            { lat: -26.1715046, lng: 27.969983412 },

            // X = Northcliff Ridge Eco Park
            //            { lat: -26.1452546, lng: 27.967363217 },

            // F = Marianne Wine Estate
            { lat: -33.8298546, lng: 18.877630117 }

        ];

        var lodgingLabels = "ACQGIPLN";
        var lodgingLocs = [

            // A = Hotel VS erde
            { lat: -33.97415, lng: 18.589582917 },

            // C = Quayside Hotel, Simonstown

            { lat: -34.1928742, lng: 18.432612721 },

            // Q = Protea Hotel by Marriott
            { lat: -26.1486451, lng: 27.924185419 },

            // G = Knysna Elephant Park
            { lat: -34.0385536, lng: 23.26503617 },

            // I = Milkwood Manor
            { lat: -34.050294, lng: 23.373779317 },

            // P = Glen Afric
            { lat: -25.8135641, lng: 27.869428517 },

            // L = Skepboom Tented Camp
            { lat: -33.5125013, lng: 25.751274517 },

            // N = Lower Sabie Rest Camp
            { lat: -25.11986, lng: 31.913190317 }
        ];

        //        var safariLabels = "GMOPUSWT";
        var safariLabels = "GOPSWT";
        var safariLocs = [

            // G = Knysna Elephant Park
            { lat: -34.0385536, lng: 23.26503617 },

            // M = Addo Elephant National Park
            //           { lat: -33.4833333, lng: 25.747811317 },

            // O = Kruger National Park
            { lat: -23.9883848, lng: 31.552551517 },

            // P = Glen Afric
            { lat: -25.8135641, lng: 27.869428517 },

            // U = Zulu Nyala Country Manor
            //            { lat: -25.9916381, lng: 27.97380617 },

            // S = Lion and Safari Park
            { lat: -25.8324043, lng: 27.88659517 },

            // w = Ukutula Lodge and Game Reserve
            { lat: -25.5219364, lng: 27.67158617 },

            // T = de Wildt Cheetah Sanctuary
            { lat: -25.6736889, lng: 27.921508817 }
        ];


        for (var i = 0; i < pieSlices.length; i++) {
            if (pieSlices[i] == "_0") {

                mapLabels = sightSeeingLabels;
                mapLocs = sightSeeingLocs;
            }

            if (pieSlices[i] == "_1") {
                mapLabels = mapLabels.concat(lodgingLabels);
                mapLocs = mapLocs.concat(lodgingLocs);

            }

            if (pieSlices[i] == "_2") {
                mapLabels = mapLabels.concat(safariLabels);
                mapLocs = mapLocs.concat(safariLocs);

            }
            var mapDetails = {
                // Center half way between nearest and further marker so that all markers can be seen on the map
                //               center: { lat: -30.330950, lng: 25.002745 },
                center: { lat: -33.937306, lng: 18.653658 },

                zoom: 5
            };

            console.log(mapLabels);
            showOnMap(mapDetails, mapLocs, mapLabels)

        }
    });



    /*

        for (var i = 0; i < pieSlices.length; i++) {
            if (pieSlices[i] == "_0") {

                mapLocs = mapLocs.concat(cityLocations);
                mapLabels = mapLabels.concat(cityLabels);
            }

            var mapDetails = {
                // Center half way between nearest and further marker so that all markers can be seen on the map
                center: { lat: -30.330950, lng: 25.002745 },
                zoom: 5
            };
            showOnMap(mapDetails, mapLocs)


        });
        */

    /*
    // --- If the Lodgings Piechart is clicked show the relevant lodging type(s) depending the the slice that is clicked

    $("#lodging-types-chart").click(function() {

        var selectionType = "lodgings"
        selectLocations(selectionType);
    });


    // If the Safari Chart is clicked on - - - 
    $("#safari-chart").click(function() {

        var selectionType = "safari"
        selectLocations(selectionType);
    });

    // If the Safari Chart is clicked on - - - 
    $("#sightseeing-chart").click(function() {

        var selectionType = "sightseeing"
        selectLocations(selectionType);
    });

    // Select the pieces of the pie that were clicked on and display their markers on the map

    function selectLocations(selectionType) {

        var mapLocs = [];
        var mapLabels = "";
        var pieSlices = [];

        // If Lodgings Chart was clicked on . . . 

        if (selectionType == "lodgings") {

            // Get the pieces of the pie that are selected - the class "selected" will have been added to the pie slice element

            var sliceName = $(".pie-slice-group").children(".selected");

            // The name of the second class is the slice number ("-0", "-1", etc). 
            // There may be more than one slice selected

            for (var i = 0; i < sliceName.length; i++) {
                var classNames = $(sliceName[i]).attr("class").split(" ");
                pieSlices = pieSlices.concat(classNames[1]);
            }

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

            for (var i = 0; i < pieSlices.length; i++) {
                if (pieSlices[i] == "_0") {

                    mapLocs = mapLocs.concat(hotelLocations);
                    mapLabels = mapLabels.concat(hotelLabels);
                }

                if (pieSlices[i] == "_1") {

                    mapLocs = mapLocs.concat(lodgesLocations);
                    mapLabels = mapLabels.concat(lodgesLabels);
                }

                if (pieSlices[i] == "_2") {

                    mapLocs = mapLocs.concat(restCampLocations);
                    mapLabels = mapLabels.concat(restCampLabels);
                }
            }
        }

        // If the Safari Chart is clicked on - - - 
        if (selectionType == "safari") {

            // Get the pieces of the pie that are selected - the class "selected will have been added to the pie slice element"

            var sliceName = $(".pie-slice-group").children(".selected");

            // The name of the second class is the slice number ("-0", "-1", etc). 
            // There may be more than one slice selected

            for (var i = 0; i < sliceName.length; i++) {
                var classNames = $(sliceName[i]).attr("class").split(" ");
                pieSlices = pieSlices.concat(classNames[1]);
            }

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

            for (var i = 0; i < pieSlices.length; i++) {
                if (pieSlices[i] == "_0") {

                    mapLocs = mapLocs.concat(bigFiveLocations);
                    mapLabels = mapLabels.concat(bigFiveLabels);
                }

                if (pieSlices[i] == "_1") {

                    mapLocs = mapLocs.concat(lionLocations);
                    mapLabels = mapLabels.concat(lionLabels);
                }

                if (pieSlices[i] == "_2") {

                    mapLocs = mapLocs.concat(cheetahLocations);
                    mapLabels = mapLabels.concat(cheetahLabels);
                }

                if (pieSlices[i] == "_3") {

                    mapLocs = mapLocs.concat(elephantLocations);
                    mapLabels = mapLabels.concat(elephantLabels);
                }
            }
        }

        // If Sight Seeing was clicked on . . . 

        if (selectionType == "sightseeing") {

            // Get the pieces of the pie that are selected - the class "selected will have been added to the pie slice element"

            var sliceName = $(".pie-slice-group").children(".selected");

            // The name of the second class is the slice number ("-0", "-1", etc). 
            // There may be more than one slice selected

            for (var i = 0; i < sliceName.length; i++) {
                var classNames = $(sliceName[i]).attr("class").split(" ");
                pieSlices = pieSlices.concat(classNames[1]);
            }

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

            for (var i = 0; i < pieSlices.length; i++) {
                if (pieSlices[i] == "_0") {

                    mapLocs = mapLocs.concat(cityLocations);
                    mapLabels = mapLabels.concat(cityLabels);
                }

                if (pieSlices[i] == "_1") {

                    mapLocs = mapLocs.concat(sceneryLocations);
                    mapLabels = mapLabels.concat(sceneryLabels);
                }

                if (pieSlices[i] == "_2") {

                    mapLocs = mapLocs.concat(whalesLocations);
                    mapLabels = mapLabels.concat(whalesLabels);
                }

                if (pieSlices[i] == "_3") {

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
        showOnMap(mapDetails, mapLocs)

        // The following function is in maps.js. It shows the selected locations on the Map.
    }
    */
});
