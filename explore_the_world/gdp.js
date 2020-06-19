// 0Gross domestic product (GDP) per capita (2011 PPP $)
var years = [1990,1995,2000,2005,2010,2011,2012,2013,2014,2015,2016,2017,2018];

var chinaGDP= [1522,2557,3690,5703,9498,10355,11115,11920,12725,13535,14369,15254,16187];
var usGDP= [36813,39171,45661,49513,49479,49883,50632,51209,52081,53188,53632,54471,55681];

// TODO: add "Loading Data"
var series = [
  {
  name:'China',
  data:chinaGDP,

}
];

var options = {
  chart: {
    type: 'line',
    id:"chart"
  },

  legend: {
    horizontalAlign: 'center',
    fontSize:'13px',
    position:'right',
    onItemHover: {
    highlightDataSeries: true,
    },
    tooltipHoverFormatter: function(val, opts) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    }
  },
  title:{
    text:"GDP",
    style:{
      fontSize:'24px',
      
    },
  },
  subtitle:{
    text:'GDP',
    style:{
      fontSize:'14px',
      color:'#9699a2'
    }
  },
  stroke:{
    width:2,
  },

  series: series,
  xaxis: {
    categories: years,
    labels:{
      style:{
        fontSize:'14px',
      }
    },
    title:{
      text:"Years",
      style:{
        color:'black',
        fontSize:'14PX'
      },
    },
  },
  yaxis: {
    categories: years,
    title:{
      text:"GDP/Captia",
      style:{
        color:'black',
        fontSize:'14PX'
      },
    },
    labels:{
      style:{
        fontSize:'14px',
      }
    }
  }
}
var gdpChart = new ApexCharts(document.querySelector("#gdpChart"), options);
gdpChart.render();



async function loadData(file){
  d3.csv(file,function(d){

    return{
      country: d["Country"],
      hdiRank: +d["GDP per Capita Rank"],
      data: [ 
             +d["1990"],+d["1995"],+d["2000"],+d["2005"],+d["2010"],+d["2011"],+d["2012"],+d["2013"],+d["2014"],+d["2015"],+d["2016"],+d["2017"],+d["2018"]

            ]
    }

  }).then(function(data){

     
     for(const hdi in data){
       const rank = data[hdi]['hdiRank']
       let element = {};
       element.name= data[hdi]["country"];
       element.data= data[hdi]["data"];

       if(rank == 0 ){
        gdpChart.appendSeries(element);

       }
       if(rank >0 && rank <85){
        gdpChart.appendSeries(element);
       }


     }

     for(const hdi in data){

      const rank = data[hdi]['hdiRank']
      let country = data[hdi]["country"]
      if (rank ==0){
        gdpChart.toggleSeries(country);
      }
      if(rank >0 && rank<85 && rank!=8){
        gdpChart.toggleSeries(country);
      }


     }

  });
}

loadData("gdp_rank.csv");








//////////////////



var series = [{
  name: 'Series Column',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'Series Area',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'Series Line',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}]
var options = {

  chart: {
    height: 310,
    type: 'line',
    stacked: false,
    id:'chart'
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  series: series,
  fill: {
    opacity: [0.85,0.25,1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003','03/01/2003','04/01/2003','05/01/2003','06/01/2003','07/01/2003','08/01/2003','09/01/2003','10/01/2003','11/01/2003'],
  markers: {
    size: 0
  },
  xaxis: {
    type:'datetime'
  },
  yaxis: {
    title: {
      text: 'Points',
    },
    min: 0
  },
  legend: {
    show: false
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
        
      }
    }
  }

}

// var chartDemo = new ApexCharts(
//   document.querySelector("#chartDemo"),
//   options
// );

// chartDemo.render();


