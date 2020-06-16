var years = [1990,1995,2000,2005,2010,2011,2012,2013,2014,2015,2016,2017,2018];

async function loadData(file){
  d3.csv(file,function(d){

    return{
      country: d["Country"],
      hdiRank: +d["HDI Rank (2018)"],
      data: [ 
             +d["1990"],+d["1995"],+d["2000"],+d["2005"],+d["2010"],
             +d["2011"],+d["2012"],+d["2013"],+d["2014"],+d["2015"],+d["2016"],+d["2016"],+d["2017"],+d["2018"]
            ]
    }

  }).then(function(data){
     console.log(data[1]["data"]);
     console.log(data[1]["country"]);
     console.log(data[10]["data"]);


  });
}


loadData("gdp.csv");