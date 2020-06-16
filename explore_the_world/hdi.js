var years = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];

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
     let country = data[100]["country"];
     let hdiValue = data[100]["data"];
    //  addLineToChart(country,hdiValue)


  });
}


loadData("hdi.csv");


var chinaHdi = [0.501,0.509,0.520,0.530,0.537,0.549,0.558,0.566,0.574,0.583,0.591,0.599,0.610,0.622,0.631,0.643,0.657,0.670,0.681,0.690,0.702,0.711,0.719,0.727,0.735,0.742,0.749,0.753,0.758 ];
var canadaHdi = [0.850,	0.853,	0.856,	0.854,	0.859,	0.861,	0.863,	0.863,	0.861,	0.864,	0.868,	0.872,	0.877,	0.882,	0.887,	0.892,	0.895,	0.891,	0.893,	0.893,	0.895,	0.899,	0.906,	0.910,	0.914,	0.917,	0.920,	0.921,	0.922  ];
var swedenHdi = [0.816,	0.818,	0.821,	0.840,	0.849,	0.857,	0.864,	0.874,	0.888,	0.893,	0.897,	0.900,	0.903,	0.908,	0.896,	0.899,	0.902,	0.905,	0.901,	0.899,	0.906,	0.906,	0.908,	0.927,	0.929,	0.932,	0.934,	0.935,	0.937  ];
var usHdi = [0.860,	0.862,	,	0.872,	0.875,	0.878,	0.879,,	0.884,	0.885,	0.881,	0.884,	0.886,	0.889,	0.892,	0.896,	0.899,	0.902,	0.907,	0.908,	0.911,	0.914,	0.916,	0.914,	0.915,	0.917,	0.919,	0.919,	0.920];
const japanHdi = [0.816,	0.821,	0.824,	0.829,	0.835,	0.840,	0.845,	0.848,	0.847,	0.850,	0.855,	0.859,	0.862,	0.865,	0.869,	0.873,	0.877,	0.880,	0.881,	0.880,	0.885,	0.890,	0.895,	0.900,	0.904,	0.906,	0.910,	0.913,	0.915];


var hdiChart = new Chart(document.getElementById("hdi"), {
    type: 'line',
  data: {
    labels:years,
    datasets: [{ 
        data: chinaHdi,
        label: "China",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: usHdi,
        label: "the U.S.",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Human Development Index',
      fontSize:35
    }
  }
  });


  function addLineToChart(hdiChart,label,newData){
      let element = {};
      element.data = newData;
      element.label = label;
      let tail = hdiChart.data.datasets.length;

      hdiChart.data.datasets[tail]=element;

      hdiChart.update();
  }


  addLineToChart(hdiChart,"Sweden",swedenHdi);
  addLineToChart(hdiChart,"Canada",canadaHdi);
  addLineToChart(hdiChart,"Japan",japanHdi);

