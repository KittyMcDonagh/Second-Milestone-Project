queue()
    .defer(d3.json, "/assets/data/sa-original.json")
    .await(makeGraphs);

function makeGraphs(error, transactionsData) {

    var ndx = crossfilter(transactionsData);

    var highlights_dim = ndx.dimension(dc.pluck('activities'));
    var total_days_per_highlight = highlights_dim.group().reduceSum(dc.pluck('both_count'));
    dc.pieChart('#overall-trip-chart')
        .height(360)
        .radius(90)
        .transitionDuration(1500)
        .dimension(highlights_dim)
        .group(total_days_per_highlight);

    var lodgings_dim = ndx.dimension(dc.pluck('type'));
    var total_per_lodging = lodgings_dim.group().reduceSum(dc.pluck('ldg_count'));
    dc.pieChart('#lodging-types-chart')
        .height(360)
        .radius(90)
        .transitionDuration(1500)
        .dimension(lodgings_dim)
        .group(total_per_lodging);

    var safaris_dim = ndx.dimension(dc.pluck('type'));
    var total_per_safari = safaris_dim.group().reduceSum(dc.pluck('safari_count'));
    dc.pieChart('#safari-chart')
        .height(360)
        .radius(90)
        .transitionDuration(1500)
        .dimension(safaris_dim)
        .group(total_per_safari);

    var sightsee_dim = ndx.dimension(dc.pluck('type'));
    var total_per_sightsee = sightsee_dim.group().reduceSum(dc.pluck('sight_see_count'));
    dc.pieChart('#sightseeing-chart')
        .height(360)
        .radius(90)
        .transitionDuration(1500)
        .dimension(sightsee_dim)
        .group(total_per_sightsee);

    dc.renderAll();
}


$("#overall-trip-chart").click(function() {
    queue()
        .defer(d3.json, "/assets/data/sa-original.json")
        .await(makeGraphs);
        
        initMap();

});

$("#lodging-types-chart").click(function() {

    //   Get the element where the Lodgings details will be shown

    var el = document.getElementById("show-lodgings");

    // Get the selected pieces of the pie that are selected

    var sliceName = $(".pie-slice-group").children(".selected");

    var pieSlices = [];

    // The second class name is the slice number ("-0", "-1", etc). 
    // There may be more than one selected slice

    for (var i = 0; i < sliceName.length; i++) {
        var classNames = $(sliceName[i]).attr("class").split(" ");
        pieSlices = pieSlices.concat(classNames[1]);
    }

    el.innerHTML = pieSlices;


    var selections = [];

    var locations = [];
    var labels = "";

    var hotelLabels = "ACQ";
    var hotelLocations = [

        // A = Hotel Verde
        { lat: -33.97415, lng: 18.589582917 },

        // C = Quayside Hotel, Simonstown
        { lat: -34.1928743, lng: 18.430560817 },

        // Q = Protea Hotel by Marriott
        { lat: -26.1486465, lng: 27.922543617 }

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

            locations = locations.concat(hotelLocations);
            labels = labels.concat(hotelLabels);
        }

        if (pieSlices[i] == "_1") {

            locations = locations.concat(lodgesLocations);
            labels = labels.concat(lodgesLabels);

        }

        if (pieSlices[i] == "_2") {

            locations = locations.concat(restCampLocations);
            labels = labels.concat(restCampLabels);

        }
    }
    
    el.innerHTML = labels;
    
    showOnMap(labels, locations);

    


});