let chart = new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
          labels: ["Happy", "Okay", "Not happy"],
          datasets: [{
            label: "How satisfied",
            backgroundColor: ["#33cc33 ", "#f9f94f ","#ff0000 ",],
            data: [1,1,1 ]
          }]
        },
        options: {
          maintainAspectRatio: false,
          title: {
            display: true,
            text: ''
          }
        }
    });


    function rate() {

    }

    const smileys = Array.from(document.querySelectorAll('.smileys i'));

    for(let i = 0; i < smileys.length; i++) {
      smileys[i].addEventListener('click', function(e){
        console.log(e.target.id);
        chart.data.datasets[0].data[0] += 1;
          chart.update();

          if (e.target.id == 'happy') {
            chart.data.datasets[0].data[0] += 1;
              chart.update();
            }
            else if (e.target.id == 'okay') {
              chart.data.datasets[0].data[1] += 1;
                chart.update();
            }
            else {
              chart.data.datasets[0].data[2] += 1;
                chart.update();
            }
      });
    }
