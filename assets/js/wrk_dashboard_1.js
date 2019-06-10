queue()
    .defer(d3.json, "/assets/data/sa-original.json")
    .await(makeGraphs);

function makeGraphs(error, transactionsData) {
    console.log("in makeGraphs");
    console.log("transactionsData = " + transactionsData);
    var ndx = crossfilter(transactionsData);

    var activities_dim = ndx.dimension(dc.pluck('activities'));
    var total_days_per_activity = activities_dim.group().reduceSum(dc.pluck('days'));
    dc.pieChart('#per-activity-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(activities_dim)
        .group(total_days_per_activity);

   

    dc.renderAll();
}
