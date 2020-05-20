// Enter your code below

let data = {
    blue: 21,
    yellow: 11,
    red: 4,
    teal: 18,
    purple: 9,
    orange: 9,
    unknown: 4,
  };
  
  // Colors used :
  var backgroundColor=[
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)',
  ]
  var borderColor = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(159, 159, 159, 1)',
  ]
  
  
  
  new Chart(document.getElementById("hdi"), {
    type: 'doughnut',
    data: {
      // labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      labels: Object.keys(data),
  
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: backgroundColor,
  
          borderColor: borderColor,
          data: Object.values(data),
        }
      ]
    },
    options: {
      legend: { display: true, position:'bottom' },
      title: {
        display: true,
        text: 'Human Development Index',
        fontSize:35

      }
    }
  });
  
  
  new Chart(document.getElementById("edu"), {
    type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)',
      fontSize:35
    }
  }
  });



new Chart(document.getElementById("gdp"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050',
        fontSize:35

      }
    }
});

new Chart(document.getElementById("income"), {
    type: 'horizontalBar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050',
        fontSize:35

      }
    }
});

//   new Chart(document.getElementById("edu"),{

// });