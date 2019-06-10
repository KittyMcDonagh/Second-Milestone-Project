queue()
            .defer(d3.json, "/assets/data/transactions.json")
            .await(makeGraphs);
        
        function makeGraphs(error, transactionsData) {
            console.log("in makeGraphs");
            var ndx = crossfilter(transactionsData);
            var name_dim = ndx.dimension(dc.pluck('name'));
            var total_spend_per_person = name_dim.group().reduceSum(dc.pluck('spend'));
            dc.pieChart('#per-person-chart')
                .height(330)
                .radius(90)
                .transitionDuration(1500)
                .dimension(name_dim)
                .group(total_spend_per_person);
            
            dc.renderAll();
        }