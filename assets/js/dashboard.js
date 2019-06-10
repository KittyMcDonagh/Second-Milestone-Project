queue()
    .defer(d3.json, "/assets/data/sa-original.json")
    .await(makeGraphs);

function makeGraphs(error, transactionsData) {
    console.log("in makeGraphs");
    console.log("transactionsData = " + transactionsData);
    var ndx = crossfilter(transactionsData);

    var highlights_dim = ndx.dimension(dc.pluck('activities'));
    var total_days_per_highlight = highlights_dim.group().reduceSum(dc.pluck('both_count'));
    dc.pieChart('#per-highlight-chart')
        .height(200)
        .radius(90)
        .transitionDuration(1500)
        .dimension(highlights_dim)
        .group(total_days_per_highlight);

    var activities_dim = ndx.dimension(dc.pluck('activities'));
    var total_days_per_activity = activities_dim.group().reduceSum(dc.pluck('acctv_count'));
    dc.pieChart('#per-activity-chart')
        .height(200)
        .radius(90)
        .transitionDuration(1500)
        .dimension(activities_dim)
        .group(total_days_per_activity);


    var residence_dim = ndx.dimension(dc.pluck('location'));
    var total_days_per_residence = residence_dim.group().reduceSum(dc.pluck('accom_days'));
    dc.pieChart('#per-residence-chart')
        .height(200)
        .radius(90)
        .transitionDuration(1500)
        .dimension(residence_dim)
        .group(total_days_per_residence);


    var lodgings_dim = ndx.dimension(dc.pluck('type'));
    var total_per_lodging = lodgings_dim.group().reduceSum(dc.pluck('ldg_count'));
    dc.pieChart('#per-lodging-type-chart')
        .height(200)
        .radius(90)
        .transitionDuration(1500)
        .dimension(lodgings_dim)
        .group(total_per_lodging);


    dc.renderAll();
}
