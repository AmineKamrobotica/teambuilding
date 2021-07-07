<template>
  <v-container>
    <h1 class="hExplore">Explore our programms</h1>
    <div class="contExplore text-center">
      <v-row>
        <v-col v-for="(item, i) in data" :key="i" cols="12">
          <card-explore :item="item"></card-explore>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
import cardExplore from "./cardExplore.vue";
export default {
  components: {
    cardExplore,
  },
  data: () => ({
    data: [],
  }),
  created() {
    axios.get("http://localhost:5000/building/").then((res) => {
      this.data = res.data;
      
    });
  },
};
</script>
<style>
@import url("./explore.css");
</style>
