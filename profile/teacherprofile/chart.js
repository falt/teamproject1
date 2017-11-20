new Chart(document.getElementById("chart1"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5],
    datasets: [{
        data: [86,114,106,106,107,111,133,221,783,5000],
        label: "FE17",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [282,350,411,502,635,809,4000,1402,4000,2000],
        label: "FE16",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: [168,170,178,1000,2000,276,408,547,675,1000],
        label: "EN16",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: [40,20,1500,16,24,38,5000,167,508,784],
        label: "EN17",
        borderColor: "#e8c3b9",
        fill: false
      }, {
        data: [6,3,2,500,7,26,82,172,312,433],
        label: "Timell",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Daglig utvärdering'
    }
  }
});

new Chart(document.getElementById("chart2"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5],
    datasets: [{
        data: [86,114,106,106,107,111,133,221,783,5000],
        label: "FE17",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [282,350,411,502,635,809,3000,1402,4000,2000],
        label: "FE16",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: [168,170,178,1000,2000,276,408,547,675,1000],
        label: "EN16",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: [40,20,1500,16,24,38,5000,167,508,784],
        label: "EN17",
        borderColor: "#e8c3b9",
        fill: false
      }, {
        data: [6,3,2,500,7,26,82,172,312,433],
        label: "Timell",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Vecko-utvärdering'
    }
  }
});

new Chart(document.getElementById("chart3"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5],
    datasets: [{
        data: [86,114,106,106,107,111,133,221,783,5000],
        label: "FE17",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [282,350,411,502,635,809,4000,1402,4000,2000],
        label: "FE16",
        borderColor: "#8e5ea2",
        fill: false
      }, {
        data: [168,170,178,1000,2000,276,408,547,675,1000],
        label: "EN16",
        borderColor: "#3cba9f",
        fill: false
      }, {
        data: [40,20,1500,16,24,38,5000,167,508,784],
        label: "EN17",
        borderColor: "#e8c3b9",
        fill: false
      }, {
        data: [6,3,2,500,7,26,82,172,312,433],
        label: "Timell",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Månads-utvärdering'
    }
  }
});
