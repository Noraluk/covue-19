<template>
  <v-card class="chart card-other-confirmed">
    <h5 class="chart-title">🦠 การเพิ่มขึ้นของไวรัสทั่วโลก</h5>
    <v-container id="confirmed-chart" style="padding=0px"></v-container>
  </v-card>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
  data() {
    return {
      chart: null
    };
  },
  props: {
    confirmed: Array,
    dates: Array
  },
  computed: {
    options() {
      return {
        chart: {
          type: "area",
          height: "220px",
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        series: [
          {
            name: "ผู้ติดเชื้อ ",
            data: this.confirmed || [0]
          }
        ],
        xaxis: {
          categories: this.dates || [0],
          labels: {
            style: {
              colors: "#b1afee"
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: "rgba(177,175,238,0.5)"
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            colorStops: [
              {
                offset: 30,
                color: "rgba(255,167,0,1)",
                opacity: 1
              },
              {
                offset: 100,
                color: "rgba(138,25,189,0)",
                opacity: 1
              }
            ]
          }
        },
        stroke: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          colors: "rgba(255,193,0,1)"
        },
        tooltip: {
          x: {
            show: false
          },
          marker: {
            fillColors: ["rgba(255,193,0,1)"]
          },
          theme: "dark"
        },
        grid: {
          borderColor: "rgba(165,165,165,0.05)"
        }
      };
    }
  },
  methods: {
    renderChart() {
      this.chart = new ApexCharts(
        document.querySelector("#confirmed-chart"),
        this.options
      );

      this.chart.render();
    }
  },
  watch: {
    dates: {
      handler() {
        this.chart.destroy();
        this.renderChart();
      }
    }
  },
  mounted() {
    this.renderChart();
  }
};
</script>

<style  scoped>
h5 {
  color: #b1afee;
  font-weight: 500;
}

h5::after {
  content: "(7 วันย้อนหลัง)";
  font-size: 15px;
  opacity: 0.6;
  padding-left: 6px;
}
</style>