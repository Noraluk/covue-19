<template>
  <v-card class="card card-confirmed" height="160px">
    <v-row>
      <v-col md="3" class="pt-0">
        <v-img width="60" height="60" :src="require(`../assets/${imgName}`)"></v-img>
      </v-col>
      <v-col class="pt-0 pl-3" md="9">
        <p class="my-auto" style="font-size:16px;font-weight:500">{{title}}</p>
        <p class="my-auto">
          <span style="font-size:35px;font-weight:600">{{numberOfPerson}}</span> คน
        </p>
        <p style="font-size:14px">อัพเดทล่าสุด {{timeNow}}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    imgName: String,
    title: String,
    numberOfPerson: Number,
    timeNow: String
  }
};
</script>

<style scoped>
p {
  color: white;
}

.card-confirmed {
  background: linear-gradient(130deg, rgb(255, 0, 221), rgb(255, 167, 3));
}
</style>