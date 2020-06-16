var years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
var countries = [];
var hdiValues = [];


async function loadData(file){
  d3.csv(file,function(d){

    countries.push(d["Country"]);
    hdiValues.push([ 
      +d["1990"],+d["1991"],+d["1992"],+d["1993"],+d["1994"],+d["1995"],+d["1996"],+d["1997"],+d["1998"],+d["1999"],
      +d["2000"],+d["2001"],+d["2002"],+d["2003"],+d["2004"],+d["2005"],+d["2006"],+d["2007"],+d["2008"],+d["2009"],
      +d["2010"],+d["2011"],+d["2012"],+d["2013"],+d["2014"],+d["2015"],+d["2016"],+d["2016"],+d["2017"],+d["2018"]
     ])

    return{
      country: d["Country"],
      hdiRank: +d["HDI Rank (2018)"],
      data: [ 
             +d["1990"],+d["1991"],+d["1992"],+d["1993"],+d["1994"],+d["1995"],+d["1996"],+d["1997"],+d["1998"],+d["1999"],
             +d["2000"],+d["2001"],+d["2002"],+d["2003"],+d["2004"],+d["2005"],+d["2006"],+d["2007"],+d["2008"],+d["2009"],
             +d["2010"],+d["2011"],+d["2012"],+d["2013"],+d["2014"],+d["2015"],+d["2016"],+d["2016"],+d["2017"],+d["2018"]
            ]
    }

  }).then(function(data){
    console.log(hdiValues);

  });
}

loadData("hdi.csv");


 

    // for (var i=0;i<data.length;i++){
    //   let country = data[i]["Country"];
    //   let values = data[i][1990];
    //   console.log(data[i]);
    //   countries.push(data[i]["Country"])
    // }







// function getValueByCountry(country,data){
//   for (var i=0;i<data.length;i++){
//     alert("getvaluebycountry");
//     if(data[i]["Country"]==country){
//       return data[i]
//     }
//   }

// var chinaData = getValueByCountry("China",hdiData);
// console.log(chinaData);





  // console.log(data[0]["Country"]);
  // console.log(data[1]["Country"])



// works but load slow...
// var names = [];
// var weeks = [];
// d3.csv("atp_wta.csv", function(data){
//     names.push(data.Name);
//     weeks.push(data.Weeks);
    
// });

// function makeChart() {
//     var chart = new Chart('global', {
//       type: 'horizontalBar',
//       data: {
//         labels: names,
//         datasets: [
//           {
//             data: weeks,
//           }
//         ]
//       }
//     });
//   }

//   makeChart()