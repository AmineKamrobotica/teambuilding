<template>
  <v-container>
    <div class="contExplore text-center">
      <h1 class="hExplore">Explore our programms</h1>
      <v-row>
        <v-col v-for="(item, index) in data" :key="index" md="3">
          <v-card class="mx-auto" max-width="344">
            <v-img src="" height="200px" />

            <v-card-title>
              {{ item.image[0] }}
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text>
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    data: [],
    show: false,
    imgPreUrl: "../../../upload/",
  }),
  created() {
    axios.get("http://localhost:5000/building/").then((res) => {
      this.data = res.data;
      console.log(this.data[0]);
    });
  },
};
</script>
