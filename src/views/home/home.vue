<template>
  <v-container class="try">
    <v-row class="fill-height" align-content="center" justify="center">
      <v-col v-if="!rightShow" cols="6">
        <v-progress-linear
          color="#0db39e"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>

    <v-row class="all">
      <v-slide-y-transition>
        <v-col v-if="rightShow" md="8" sm="12" xs="12">
          <p class="intro">
            Dive in! There are so many things to do here together
          </p>
          <p style="font-size: 21px;">
            Join the official group of proxym's Team Building,
          </p>
          <div>
            <v-btn outlined color="#2c699a" class="btns"
              ><router-link
                :to="this.$store.state.token ? '/organize' : '/login'"
                class="linkOrganize"
              >
                <v-icon dark small left>mdi-gavel</v-icon>Organize</router-link
              ></v-btn
            >

            <v-btn
              color="#2c699a"
              elevation="0"
              style="color: white; margin-left:10px"
              class="btns"
            >
              <router-link
                to="/explore"
                style="text-decoration: none; color: white"
              >
                <v-icon dark left small>
                  mdi-arrow-right
                </v-icon>
                explore
              </router-link>
            </v-btn>
          </div>
        </v-col>
      </v-slide-y-transition>
      <v-col v-if="leftShow" md="4" sm="12" xs="12" class="hidden-sm-and-down">
        <v-img src="../../assets/images/home.png" />
      </v-col>
    </v-row>
    <div style="margin-top: 100px" v-if="remainShow">
      <h1>the last building</h1>
      <v-row style="margin-top:40px">
        <v-col
          v-for="(item, n) in lastData"
          :key="n"
          cols="4"
          md="4"
          sm="12"
          xs="12"
        >
          <v-card height="200" flat color="white">
            <v-img
              class="vcard"
              height="200px"
              :src="require('../../assets/images/upload/' + `${item.image[0]}`)"
            />
          </v-card>
          <span class="explorebtn" @click="explore(item)"> details</span>
        </v-col>
      </v-row>
      <div class="divbtn text-center">
        <router-link class="btn" to="/exploreMemories">
          <v-btn  color="#0db39e" dark large >
            join the outdoors
          </v-btn>
        </router-link>
      </div>
    </div>
    <v-scroll-y-transition>
      <Carousel v-if="remainShow" :items="items" style="margin-top:30px" />
    </v-scroll-y-transition>
  </v-container>
</template>
<style scoped>
@import "./home.css";
</style>
<script>
import Carousel from "../carousel/Carousel.vue";
import axios from "axios";
export default {
  components: {
    Carousel,
  },
  data: () => ({
    remainShow: false,
    rightShow: false,
    leftShow: false,
    snackbar: false,
    items: [
      require("./images/image3.jpg"),
      require("./images/image2.jpg"),

      require("./images/image5.jpg"),

      require("./images/image6.jpg"),
    ],
    lastData: [],
    imageLast: [],
  }),
  created() {
    axios.get("building/").then((res) => {
      this.lastData = res.data.splice(-3);
    });
    setTimeout(() => {
      this.rightShow = true;
    }, 500);
    setTimeout(() => {
      this.leftShow = true;
    }, 800);
    setTimeout(() => {
      this.remainShow = true;
    }, 2000);
  },
  methods: {
    getLastBuilding() {},
    explore(item2) {
      this.$router.push({ name: "details", params: { details: item2 } });
    },
  },
};
</script>
