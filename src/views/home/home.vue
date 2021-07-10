<template>
  <v-container class="try">
    <v-snackbar
      transition="slide-x-transition"
      :timeout="1000"
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
      <v-col md="8">
        <p class="intro">
          Dive in! There are so many things to do here together
        </p>
        <p style="font-size: 21px;">
          Join the official group of proxym's Team Building,
        </p>
        <div class="divbtns">
          <v-btn outlined color="#2c699a" class="btns"
            ><router-link
              :to="this.$store.state.token ? '/organize' : '/login'"
              class="linkOrganize"
              >Organize</router-link
            ></v-btn
          >

          <v-btn
            color="#2c699a"
            elevation="0"
            style="color: white;"
            class="btns"
          >
            <router-link
              to="/explore"
              style="text-decoration: none; color: white"
            >
              explore
            </router-link>
          </v-btn>
        </div>
      </v-col>
      <v-col md="4">
        <v-img src="../../assets/images/home.png" />
      </v-col>
    </v-row>
    <build-passed />
    <Carousel :items="items" style="margin-top:30px" />
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
    snackbar: false,
    items: [
      require("./images/image2.jpg"),

      require("./images/image3.jpg"),

      require("./images/image5.jpg"),

      require("./images/image6.jpg"),
    ],
  }),
  created() {
    if (this.$route.params.userAuthed) {
      this.snackbar = true;
    }
  },
  methods: {},
};
</script>
