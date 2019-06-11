queue()
    .defer(d3.json, "/assets/data/sa-original.json")
    .await(makeGraphs);

function makeGraphs(error, transactionsData) {
    
    var ndx = crossfilter(transactionsData);

    var highlights_dim = ndx.dimension(dc.pluck('activities'));
    var total_days_per_highlight = highlights_dim.group().reduceSum(dc.pluck('both_count'));
    dc.pieChart('#per-highlight-chart')
        .height(200)
        .radius(90)
        .transitionDuration(1500)
        .dimension(highlights_dim)
        .group(total_days_per_highlight);

    var lodgings_dim = ndx.dimension(dc.pluck('type'));
    var total_per_lodging = lodgings_dim.group().reduceSum(dc.pluck('ldg_count'));
    dc.pieChart('#per-lodging-type-chart')
        .height(200)
        .radius(90)
        .transitionDuration(1500)
        .dimension(lodgings_dim)
        .group(total_per_lodging);

    var safaris_dim = ndx.dimension(dc.pluck('type'));
    var total_per_safari = safaris_dim.group().reduceSum(dc.pluck('safari_count'));
    dc.pieChart('#per-safari-chart')
        .height(200)
        .radius(90)
        .transitionDuration(1500)
        .dimension(safaris_dim)
        .group(total_per_safari);

    dc.renderAll();
}

$("#per-lodging-type-chart").click(function() {
    
    var firstDiv = $("selected").first() 
    
    $("#show-lodgings").text("firstDiv = "+firstDiv[0])

    lodgingsMap();

});

$("#per-highlight-chart").click(function() {
    
    $("#show-safaris-sightseeing").text("is anything happening?")
    
   queue()
    .defer(d3.json, "/assets/data/sa-original.json")
    .await(makeGraphs);

});

