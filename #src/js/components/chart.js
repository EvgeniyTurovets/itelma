//Chart
const ctx = document.getElementById('myChart');
if (ctx) {
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: 'Продано',
        data: [650000, 900000, 900000, 1000000, 1000000, 1200000, 1500000, 1600000, 1650000, 1800000],
        backgroundColor: '#00A7B5',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (val, index) {
              let result = nFormatter(val, 1);
              let tmp = result.split(' ');
              tmp[0] = tmp[0].replace('.', ',');
              return tmp.join(' ');
            },
            stepSize: 400000,
            padding: 18,
          },
          grid: {
            drawBorder: false,
          }
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: " тыс." },
      { value: 1e6, symbol: " млн." },
      { value: 1e9, symbol: " млрд." },
      // { value: 1e12, symbol: "T" },
      // { value: 1e15, symbol: "P" },
      // { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  };
}
