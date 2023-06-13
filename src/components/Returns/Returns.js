import Chart from 'chart.js/auto';
import ChartDeferred from 'chartjs-plugin-deferred';

const ctx = $('#mcnulty-returns');
const brandLightBlueMedium = '#B7C5D3';
const brandLightBlueDark = '#97ACC1';
const textBlackRegular = '#797979';
const uiBlackRegular = '#B5B5B5';
const chartDataFonts = {
  'font-family': "'Helvetica Now Micro', sans-serif",
  'font-weight': '400',
  'font-style': 'normal',
  'font-size': 13,
};

Chart.defaults.font.size = chartDataFonts['font-size'];
Chart.defaults.font.family = chartDataFonts['font-family'];
Chart.defaults.font.style = chartDataFonts['font-style'];
Chart.defaults.font.weight = chartDataFonts['font-weight'];
Chart.defaults.color = textBlackRegular; // confirm if this is applying to the font?

Chart.register(ChartDeferred);

const Returns = () => {
  const myChart = new Chart(ctx, {
    /* Old Chart
    type: 'bar',
    data: {
      datasets: [
        {
          backgroundColor: [brandLightBlueMedium],
          hoverBackgroundColor: [brandLightBlueDark],
        },
      ],
      // prettier-ignore
      labels: [2013,2014,2015,2016,2017,2018,2019,2020,2021],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          grid: {
            borderColor: uiBlackRegular,
            color: uiBlackRegular,
            drawTicks: false,
          },
          ticks: {
            callback: function (value) {
              return value <= 0 ? '' : `$${value}k`;
            },
            padding: 14, // what?
          },
        },
        x: {
          grid: {
            borderColor: uiBlackRegular,
            display: false,
          },
          ticks: {
            count: 18, // what?
          },
        },
      },
      animations: {
        color: {
          duration: 3000,
          from: brandLightBlueMedium,
          to: brandLightBlueDark,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      maxBarThickness: 50,
      barPercentage: 1,
      devicePixelRatio: 3,
      layout: {
        padding: {
          top: 20,
          right: 15,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
        deferred: {
          yOffset: '70%',
        },
      },
    },*/

    // New Chart
    type: 'bar',
    data: {
      labels: [
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
      ],
      datasets: [
        {
          label: 'Annual Dividend Income Growth',
          data: [
            190000, 207100, 227900, 255900, 270500, 299300, 336100, 357900,
            390500,
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      layout: {
        padding: {
          bottom: 55,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
        plugins: {
          deferred: {
            yOffset: '70%',
          },
        },
      },
      scales: {
        y: {
          grid: {
            drawTicks: false,
            drawBorder: true,
            borderWidth: 1,
            borderColor: uiBlackRegular,
            // color: uiBlackRegular,
            color: '#f9f9',
          },
          beginAtZero: true,
          ticks: {
            callback: function (value, index, values) {
              return '$' + value / 1000 + 'k';
            },
            min: 0,
            max: 400000,
            stepSize: 50000,
            autoSkip: false,
            autoSkipPadding: 0,
            maxTicksLimit: 10,
            padding: 0,
          },
          afterBuildTicks: function (scale) {
            scale.ticks = [
              0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000,
            ].map((value) => ({ value: value }));
            return;
          },
          beforeUpdate: function (scale) {
            scale.options.ticks.max = Math.max(
              ...scale.chart.data.datasets[0].data
            );
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    },
  });
};

export default Returns;
