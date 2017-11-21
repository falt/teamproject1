new Chart(document.getElementById("chart1"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10],
    datasets: [{
        data: [0,0,-35,0,25,10,30,15,20,50],
        label: "Mood för FE17",
        borderColor: "#ff8000",
        fill: false
      }

    ]
  },
  options: {
    title: {
      display: true,
      text: 'Dagstvärdering'
    },
      scales: {
          yAxes: [{
              ticks: {
                  display: false
              }
          }],
          xAxes: [{
              ticks: {
                  display: false
              }
          }]
      }
  }

});

new Chart(document.getElementById("chart2"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10],
    datasets: [{
        data: [0,0,-35,0,25,10,30,15,20,50],
        label: "Mood för FE17",
        borderColor: "#ff8000",
        fill: false
      }

    ]
  },
  options: {
    title: {
      display: true,
      text: 'Veckoutvärdering'
    },
      scales: {
          yAxes: [{
              ticks: {
                  display: false
              }
          }],
          xAxes: [{
              ticks: {
                  display: false
              }
          }]
      }
  }

});

new Chart(document.getElementById("chart3"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10],
    datasets: [{
        data: [0,0,-35,0,25,10,30,15,20,50],
        label: "Mood för FE17",
        borderColor: "#ff8000",
        fill: false
      }

    ]
  },
  options: {
    title: {
      display: true,
      text: 'Månadsutvärdering'
    },
      scales: {
          yAxes: [{
              ticks: {
                  display: false
              }
          }],
          xAxes: [{
              ticks: {
                  display: false
              }
          }]
      }
  }

});
