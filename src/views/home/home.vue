<template>
  <v-container>
    <v-row class="all">
      <v-col md="8">
        <p class="intro">
          Dive in! There are so many things to do here together
        </p>
        <p style="font-size: 21px;">
          Join the official group of proxym's Team Building,
        </p>
      </v-col>
      <v-col md="4">
        <v-img src="../../assets/images/home.png" />
      </v-col>
    </v-row>
    <build-passed />
    <Carousel style="margin-top:30px" />
  </v-container>
</template>
<style scoped>
@import "./home.css";
</style>
<script>
import BuildPassed from "../buildingPassed/buildPassed.vue";
import Carousel from "../carousel/Carousel.vue";
export default {
  components: {
    BuildPassed,
    Carousel,
  },
};
</script>
