var years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];
var asian = ['Iran','Iraq','Israel','Nepal','Malaysia','Thailand','Turkey','Vietnam','Japan','Singapore','Hong Kong, China (SAR)','Korea (Republic of)','India'];
var other = ['Australia','New Zealand','Egypt','Canada','Cuba','Mexico'];
var europe = ['Austria','Norway','Switzerland','Ireland','Germany','Iceland','Sweden','Denmark','Finland','United Kingdom','Spain','France','Italy','Greece']

var chinaHdi = [0.501,0.509,0.520,0.530,0.537,0.549,0.558,0.566,0.574,0.583,0.591,0.599,0.610,0.622,0.631,0.643,0.657,0.670,0.681,0.690,0.702,0.711,0.719,0.727,0.735,0.742,0.749,0.753,0.758 ];
var usHdi = [0.860,0.862,0.867,	0.872,	0.875,	0.878,	0.879,0.881,	0.884,	0.885,	0.881,	0.884,	0.886,	0.889,	0.892,	0.896,	0.899,	0.902,	0.907,	0.908,	0.911,	0.914,	0.916,	0.914,	0.915,	0.917,	0.919,	0.919,	0.920];

async function loadData(file){
  d3.csv(file,function(d){

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
     
     for(const hdi in data){
       const rank = data[hdi]['hdiRank']
       const country = data[hdi]["country"];
       let hdiValue = data[hdi]["data"];

       
       if (europe.includes(country)){
        // addLineToChart(hdiChart,country,hdiValue,rank);
        // apexchartjs

        chart.appendSeries({
          name: "No."+rank + " "+country ,
          data: hdiValue
        })

       }
       if(asian.includes(country)){
        // addLineToChart(hdiAsian,country,hdiValue,rank);

                // apexchartjs

                chart.appendSeries({
                  name: "No."+rank + " "+country ,
                  data: hdiValue
                })
        
       }

       if(other.includes(country)){
                         // apexchartjs

                         chart.appendSeries({
                          name: "No."+rank + " "+country ,
                          data: hdiValue
                        })
       }

     }
     


  });
}

loadData("hdi.csv");

// var hdiChart = new Chart(document.getElementById("hdi"), {
//     type: 'line',
//   data: {
//     labels:years,
//     datasets: [
//       { 
//         data: chinaHdi,
//         label: "China",
//         borderColor: "orange",
//         fill: false
//       }, { 
//         data: usHdi,
//         label: "the U.S.",
//         borderColor: "navy",
//         fill: false
//       }
//     ]
//   },
//   options: {
//     legend: { display: true, position:'top' ,reverse:false},
//     title: {
//       display: true,
//       text: 'China, the U.S. & Selected European Countries Human Development Index 1990-2018',
//       fontSize:28
//     },
//     elements: {
//       point:{
//           radius: 2
//       }},
//     scales: {
//       xAxes: [{
//          gridLines: {
//             display: false
//          }
//       }],
//       yAxes: [{
//          gridLines: {
//             display: false
//          }
//       }]
//    },


//   }
//   });


//   function randomColorGenerator(){
//     let r = Math.floor(Math.random()*256);
//     let g= Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*255);
//     let rgbColor = "rgb("+r+","+g+","+b+")"
//     return rgbColor;
// }

//   function addLineToChart(hdiChart,label,newData,rank){
//       let s = rank/180;
//       let element = {};
//       element.data = newData;
//       element.label = label+': Ranking '+rank;
//       element.borderColor= randomColorGenerator();
//       element.fill = false;
//       let tail = hdiChart.data.datasets.length;

//       hdiChart.data.datasets[tail]=element;

//       hdiChart.update();
//   }

//   var hdiAsian = new Chart(document.getElementById("hdiAsian"), {
//     type: 'line',
//   data: {
//     labels:years,
//     datasets: [      
//       { 
//       data: chinaHdi,
//       label: "China",
//       borderColor: "orange",
//       fill: false
//     }, { 
//       data: usHdi,
//       label: "the U.S.",
//       borderColor: "navy",
//       fill: false
//     }
//     ]
//   },
//   options: {
//     legend: { display: true, position:'top' ,reverse:false},
//     title: {
//       display: true,
//       text: 'China, Asian Countries Human Development Index 1990-2018',
//       fontSize:28
//     },
//     elements: {
//       point:{
//           radius: 2
//       }},
//     scales: {
//       xAxes: [{
//          gridLines: {
//             display: false
//          }
//       }],
//       yAxes: [{
//          gridLines: {
//             display: false
//          }
//       }]
//    },

//   }
//   });


  // Explore Apexcharts

  var options = {
    chart: {
      type: 'line'
    },
    legend: {
      horizontalAlign: 'center',
      fontSize:'13px',
      position:'right',
      onItemHover: {
        highlightDataSeries: true
      },
      tooltipHoverFormatter: function(val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    title:{
      text:"Human Development Index 1990 - 2019",
      style:{
        fontSize:'24px',
        

      },
    },
    stroke:{
      width:2,
    },
    onItemClick: {
      toggleDataSeries: true
    },
    series: [{
      name:'No.83 China',
      data:chinaHdi
    },
    {
      name: 'No.15 U.S',
      data: usHdi
    }
  ],
    xaxis: {
      categories: years,
    }
  }


  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();