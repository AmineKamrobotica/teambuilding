<template>
  <v-container>
    <h1 class="hExplore">Explore our programms</h1>
    <div class="contExplore text-center">
      <v-row>
        <v-col v-for="(item, i) in data" :key="i" cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap">
              <v-avatar class="ma-3" size="125" tile>
                <v-img
                  :src="
                    require('../../assets/images/upload/' + `${item.image[0]}`)
                  "
                ></v-img>
              </v-avatar>
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>
                <div>
                  <h6>publisher : {{item.owner}} </h6>
                  <h6>location : {{item.location}}</h6>
                  <h6>date : {{item.date}}</h6>
                  <h6>hour : {{item.time}}</h6>
                </div>
              </div>
              
            </div>
            <v-divider></v-divider>
            <v-card-actions class="d-flex flex-no-wrap justify-space-between">
              
              <div>
                <v-btn class="ml-2" color="green" rounded small>
                  explore
                </v-btn>

                <v-btn class="ml-2" color="yellow" rounded small>
                  edit
                </v-btn>
                <v-btn class="ml-2" color="red" rounded small>
                  delete
                </v-btn>
              </div>
              <v-btn class="ml-2" color="pink" rounded small>
                vote
              </v-btn>
            </v-card-actions>
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
    images: [],
    imgSrc: "image2.jpg",
    show: false,
    reveal: false,
  }),
  created() {
    axios.get("http://localhost:5000/building/").then((res) => {
      this.data = res.data;
      console.log(this.data);
    });
  },
};
</script>
<style>
@import url("./explore.css");
</style>
