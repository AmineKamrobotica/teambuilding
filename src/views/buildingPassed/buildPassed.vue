<template>
  <v-container style="margin-top:60px">
    <h1>the last building</h1>
    <v-row style="margin-top:40px">
      <v-col v-for="n in 3" :key="n" cols="4" md="4" sm="12" xs="12">
        <v-card height="200" flat color="black">
          <v-img class="vcard" height="200px" :src="lastBuild[n - 1].image" />
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
  data: () => ({
    lastBuild: [
      {
        image: require("../../assets/images/360x200.jpg"),
      },
      {
        image: require("../../assets/images/360x200.jpg"),
      },
      {
        image: require("../../assets/images/360x200.jpg"),
      },
    ],
  }),
};
</script>
<style scoped>
@import "./buildPassed.css";
</style>
