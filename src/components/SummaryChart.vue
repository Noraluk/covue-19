<template>
  <v-card class="chart card-other-confirmed">
    <h5 class="chart-title">อัตราส่วน</h5>
    <v-container id="summary-chart"></v-container>
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
    summary: Object
  },
  computed: {
    options() {
      return {
        series: [0],
        chart: {
          height: "220px",
          type: "donut"
        },
        labels: ["ผู้ติดเชื้อ", "ผู้รับการรักษา", "ผู้เสียชีวิต"],
        dataLabels: {
          style: {
            fontSize: "14px",
            fontFamily: "Poppins"
          },
          formatter: function(val) {
            return val.toFixed(2) + "%";
          }
        },
        colors: [
          "rgba(255, 95, 109,1)",
          "rgba(225, 0, 255,1)",
          "rgba(29, 22, 83,1)"
        ],
        fill: {
          type: "gradient",
          colors: [
            "rgba(255, 95, 109,1)",
            "rgba(225, 0, 255,1)",
            "rgba(29, 22, 83,1)"
          ],
          gradient: {
            gradientToColors: [
              "rgba(246,202,95,1)",
              "rgba(145,49,244,1)",
              "rgba(26,4,49,1)"
            ]
          }
        },
        legend: {
          labels: {
            colors: "#b1afee"
          },
          markers: {
            fillColors: [
              "rgba(255, 95, 109,1)",
              "rgba(225, 0, 255,1)",
              "rgba(29, 22, 83,1)"
            ]
          }
        },
        stroke: {
          width: 0
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    }
  },
  watch: {
    summary: {
      handler() {
        this.options.series = [
          this.summary.confirmed.value,
          this.summary.recovered.value,
          this.summary.deaths.value
        ];
        this.chart.destroy();
        this.render();
      },
      deep: true
    }
  },
  methods: {
    render() {
      this.chart = new ApexCharts(
        document.querySelector("#summary-chart"),
        this.options
      );
      this.chart.render();
    }
  },
  mounted() {
    this.render();
  }
};
</script>

<style  scoped>
h5 {
  color: #b1afee;
  font-weight: 500;
}
</style>