<template>
  <v-container style="margin-top:60px">
    <h1>the last building</h1>
    <v-row style="margin-top:40px">
      <v-col
        v-for="(item, n) in lastBuild"
        :key="n"
        cols="4"
        md="4"
        sm="12"
        xs="12"
      >
        <v-card height="200" flat color="white">
          <v-img class="vcard" height="200px" :src="require('../../assets/images/upload' + `${item.image[n]}`)" />
        </v-card>
        <span class="explorebtn"> details</span>
      </v-col>
    </v-row>
    <div class="divbtn text-center">
      <v-btn color="#0db39e" dark large class="btn">
        join the outdoors
      </v-btn>
    </div>
  </v-container>
</template>
<script>
export default {
  props: {
    lastData: [],
  },
  data: () => ({
    lastBuild: [
      {
        image: require("../../assets/images/upload/image5.jpg"),
      },
      {
        image: require("../../assets/images/upload/image2.jpg"),
      },
      {
        image: require("../../assets/images/upload/image3.jpg"),
      },
    ],
  }),
  methods: {},
};
</script>
<style scoped>
@import "./buildPassed.css";
</style>
