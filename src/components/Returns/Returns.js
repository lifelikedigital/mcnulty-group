import Chart from 'chart.js/auto';

const ctx = $('#mcnulty-returns');
const brandBlueDark = '#B9C9D4';

const Returns = () => {
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      datasets: [
        {
          label: 'Capital Appreciation',
          data: [190, 207.1, 227.9, 255.9, 270.5, 299.3, 336.1, 357.9, 390.5],
          backgroundColor: [brandBlueDark],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export default Returns;
