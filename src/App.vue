<template>
  <v-app>
    <v-container fluid class="bg">
      <Header></Header>
      <Info></Info>
    </v-container>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Info from "./components/Info.vue";

export default {
  name: "App",

  components: {
    Header,
    Info
  },

  data: () => ({
    //
  })
};
</script>

<style  lang="scss">
.bg {
  height: 100%;
  width: 100%;
  background-image: url("./assets/background.png");
  background-size: cover;
  font-family: "Athiti", "Poppins", sans-serif;
}
</style>
