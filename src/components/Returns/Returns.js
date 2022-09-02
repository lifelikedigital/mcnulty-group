import Chart from 'chart.js/auto';
import { start } from 'repl';

const ctx = $('#mcnulty-returns');
const brandBlueDark = '#B9C9D4';
const black100 = '#000';
const black20 = '#CCC';

Chart.defaults.font.size = 13;
Chart.defaults.font.family = "'Circular', sans-serif";
Chart.defaults.font.style = 'normal';
Chart.defaults.font.weight = '300';
Chart.defaults.color = black100;

const Returns = () => {
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [
        {
          data: [190, 207.1, 227.9, 255.9, 270.5, 299.3, 336.1, 357.9, 390.5],
          backgroundColor: [brandBlueDark],
          categoryPercentage: 0.5,
        },
      ],
      labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            borderColor: 'black100', // #ff0000
            color: '#ff0000', // black20
          },
        },
        x: {
          grid: {
            borderColor: '#ff0000', // black100
            display: false,
          },
        },
      },
      maintainAspectRatio: false,
      maxBarThickness: 58,
      // layout: {
      //   padding: {
      //     left: 213,
      //     right: 213,
      //   },
      // },
      // plugins: {
      //   legend: {
      //     position: 'bottom',
      //     align: 'start',
      //   },
      // },
    },
  });
};

export default Returns;
