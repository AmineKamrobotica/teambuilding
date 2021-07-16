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
    <v-snackbar
      transition="slide-x-transition"
      :timeout="6000"
      v-model="snackbar"
      absolute
      top
      color="success"
      outlined
      right
    >
      authentication successfully
    </v-snackbar>

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
    <v-scroll-y-transition>
      <build-passed :lastData="imageLast" v-if="remainShow" />
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <Carousel v-if="remainShow" :items="items" style="margin-top:30px" />
    </v-scroll-y-transition>
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
    if (this.$route.params.userAuthed) {
      this.snackbar = true;
    }

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
    getLastBuilding() {
      this.$store.dispatch("getAllBuilding").then(() => {
        this.lastData = this.$store.state.data.splice(-3);
        for (let i = 0; i < this.lastData.length; i++) {
          this.imageLast.push(
            require("../../assets/images/upload/" + this.lastData[i].image[0])
          );
        }
      });
    },
  },
};
</script>
