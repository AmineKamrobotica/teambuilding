<template>
  <v-container>
    <div class="contExplore text-center">
      <h1 class="hExplore">Explore our programms</h1>
      <v-card v-for="(item,index) in data" :key="index" class="mx-auto my-5" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              OVERLINE
            </div>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn outlined rounded text>
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    data: [],
  }),
  created() {
    axios.get("http://localhost:5000/building/").then((res) => {
      this.data = res.data;
      console.log(this.data);
    });
  },
};
</script>
