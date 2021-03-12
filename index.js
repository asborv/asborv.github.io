// link https://www.ssb.no/medie
const mediaDist = [
  { papiravis: [84,77,30,27] },
  { fjernsyn: [81,82,60,48,] },
  { radio: [71,57,50,48,] },
  { lydmedier: [43,50,51,55,] },
  { Ukeblad: [21,17,5,4,] },
  { bøker: [24,20,24,25,] },
  { "serier/film/video": [10,10,37,43,] },
  { internett: [0,27,91,90,] },
];

// link https://www.highcharts.com/demo/line-basic
const c = {
  title: { text: "Medier i Noreg" },

  subtitle: { text: "Prosentvis fordeling av medieforbruk 1991 - 2019" },
  
  yAxis: {
    title: { text: "Forbruk / %" }
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 1991 to 2019"
    }
  },

  legend: {
    laylout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  plotOptions: {
    series: {
      label: { connectorAllowed: false },
      pointStart: 1991,
    }
  },

  // x-verdiar visast ikkje som dei skal, kvifor ikkje?
  series: 
    mediaDist.map((obj, i) => ({
      name: Object.keys(obj)[0],
      data: Object.values(obj)[0]
    })),

  responsive: {
    rules: [{
      condition: {
        maxWidth: 1000
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
}

Highcharts.chart("container", c);

// setInterval(() => {
//   Highcharts.chart("container", { ...c, series: Array(6).fill(0).map(p => ({
//     name: "ting",
//     data: Array(10).fill(0).map(t => Math.random() * 100)
//   })) })
// }, 2000);