
var names = [];
var weeks = [];
d3.csv("atp_wta.csv", function(data){
    names.push(data.Name);
    weeks.push(data.Weeks);
    
});

function makeChart() {

  
    var chart = new Chart('global', {
      type: 'horizontalBar',
      data: {
        labels: names,
        datasets: [
          {
            data: weeks,
          }
        ]
      }
    });
  }

  makeChart();