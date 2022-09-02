import Chart from 'chart.js/auto';

const ctx = $('#mcnulty-returns');
const brandBlueDark = '#B9C9D4';
const black100 = '#000';

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
          label: 'Dividend Income Amount',
          data: [190, 207.1, 227.9, 255.9, 270.5, 299.3, 336.1, 357.9, 390.5],
          backgroundColor: [brandBlueDark],
        },
      ],
      labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
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
      scales: {
        y: {
          borderColor: '#ff0000',
        },
        x: {
          borderColor: '#ff0000',
        }
    },
  });
};

export default Returns;
