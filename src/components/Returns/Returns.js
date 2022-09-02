import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const ctx = $('#mcnulty-returns');
const brandBlueDark = '#B9C9D4';
const black100 = '#000';
const black20 = '#CCC';

Chart.defaults.font.size = 13;
Chart.defaults.font.family = "'Circular', sans-serif";
Chart.defaults.font.style = 'normal';
Chart.defaults.font.weight = '300';
Chart.defaults.color = black100;

Chart.register(ChartDataLabels);
Chart.defaults.set('plugins.datalabels', {
  font: {
    family: "'Circular', sans-serif",
    size: '13',
    style: 'normal',
    weight: '300',
  },
  anchor: 'end',
  align: 'top',
  clamp: true,
  offset: 7,
  formatter: function (value) {
    return value === undefined ? '' : `$${value}K`;
  },
});

const Returns = () => {
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [
        {
          data: [
            ,
            190,
            207.1,
            227.9,
            255.9,
            270.5,
            299.3,
            336.1,
            357.9,
            390.5,
            ,
            ,
          ],
          backgroundColor: [brandBlueDark],
        },
      ],
      labels: [, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, ,],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            borderColor: black100,
            color: black20,
          },
          ticks: {
            callback: function (value) {
              return `$${value}K`;
            },
          },
        },
        x: {
          grid: {
            borderColor: black100,
            display: false,
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      maxBarThickness: 58,
      barPercentage: 1,
      devicePixelRatio: 1,
      layout: {
        padding: {
          top: 20,
        },
      },
      // layout: {
      //   padding: {
      //     left: 213,
      //     right: 213,
      //   },
      // },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });
};

export default Returns;
