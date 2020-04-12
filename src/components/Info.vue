<template >
  <v-container fluid style="padding:0px">
    <v-row>
      <v-col md="12" align="center">
        <v-btn
          class="btn-bg"
          height="46px"
          rounded
          style="font-size: 20px;font-weight: bold;color:white"
        >🌎ทั่วโลก</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <!-- card-confirmed -->
      <v-col md="4">
        <confirmed-card
          :imgName="confirmed.img"
          :title="confirmed.title"
          :numberOfPerson="globalSummary.confirmed.value"
          :timeNow="now"
        />
      </v-col>
      <!-- card-confirmed -->
      <!-- card recoverd -->
      <v-col md="4">
        <other-confirmed-card
          :imgName="recovered.img"
          :title="recovered.title"
          :numberOfPerson="globalSummary.recovered.value"
          :timeNow="now"
        />
      </v-col>
      <!-- card recoverd -->
      <!-- card  death-->
      <v-col md="4">
        <other-confirmed-card
          :imgName="death.img"
          :title="death.title"
          :numberOfPerson="globalSummary.deaths.value"
          :timeNow="now"
        />
      </v-col>
      <!-- card  death-->
    </v-row>
    <v-row>
      <!-- confirmed chart -->
      <v-col md="8">
        <confirmed-chart
          style="padding=0px"
          :confirmed="globalSevenDays.confirmed"
          :dates="globalSevenDays.dates"
        />
      </v-col>
      <!-- confirmed chart -->
      <!-- summary chart -->
      <v-col md="4">
        <summary-chart :summary="globalSummary" />
      </v-col>
      <!-- summary chart -->
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import ConfirmedCard from "./ConfirmedCard.vue";
import OtherConfirmedCard from "./OtherConfirmedCard.vue";
import ConfirmedChart from "./ConfirmedChart.vue";
import SummaryChart from "./SummaryChart.vue";

export default {
  data() {
    return {
      confirmed: {
        img: "confirmed.svg",
        title: "จำนวนผู้ติดเชื้อ"
      },
      recovered: {
        img: "recovered.svg",
        title: "จำนวนผู้ได้รับการรักษา"
      },
      death: {
        img: "death.svg",
        title: "จำนวนผู้เสียชีวิต"
      },
      now: null
    };
  },
  components: {
    ConfirmedCard,
    OtherConfirmedCard,
    ConfirmedChart,
    SummaryChart
  },
  computed: {
    ...mapGetters(["globalSummary", "globalSevenDays"])
  },
  created() {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time = today.getHours() + ":" + today.getMinutes();
    const dateTime = date + " " + time;
    this.now = dateTime;
  },
  mounted() {
    this.$store.dispatch("getGlobalSummary");
    this.$store.dispatch("getGlobalDaily");
  }
};
</script>

<style scope>
.btn-bg {
  background: linear-gradient(120deg, orange, rgb(255, 74, 3));
}

.btn-font {
  font-size: 40px;
  font-weight: bold;
}

.chart {
  border-radius: 15px !important;
  padding: 30px;
}

.card {
  transition: transform 0.3s, box-shadow 0.3s;
  transition-timing-function: linear;
  border-radius: 15px !important;
  padding: 30px;
}

.card:hover {
  box-shadow: 0px 70px 100px -20px rgba(150, 37, 255, 0.178);
  transform: translateY(-5px);
}

.card-other-confirmed {
  background-color: hsla(0, 0%, 100%, 0.04) !important;
  border: 1px solid hsla(0, 0%, 100%, 0.07) !important;
}

.chart-title {
  font-size: 20px;
}
</style>