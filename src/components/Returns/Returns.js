import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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

Chart.register(ChartDataLabels);
Chart.defaults.set('plugins.datalabels', {
  font: {
    family: chartDataFonts['font-family'],
    size: chartDataFonts['font-size'].toString(),
    style: chartDataFonts['font-style'],
    weight: chartDataFonts['font-weight'],
  },
  anchor: 'end',
  align: 'top',
  clamp: true,
  offset: 7,
  formatter: function (value) {
    return value === undefined ? '' : `$${value}k`;
  },
});

Chart.register(ChartDeferred);

const Returns = () => {
  const myChart = new Chart(ctx, {
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
    },
  });
};

export default Returns;
