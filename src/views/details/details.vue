<template>
  <v-container grid-list-xs>
    <div
      style="    display: flex;
    justify-content: space-between;
    justify-items: center;
    justify-self: center; "
    >
      <h2>details of the programme</h2>
      <v-icon color="pink">mdi-home</v-icon>
    </div>
    <carousel :items="items"></carousel>
    <v-row>
      <v-col md="5"
        ><h2>description :</h2>
        <p>
          {{ this.detailsData.description }}
        </p></v-col
      >
      <v-col md="3"
        ><h2>date :</h2>
        <span>{{ this.detailsData.date }}</span></v-col
      >
      <v-col md="3"
        ><h2>time :</h2>
        <span>{{ this.detailsData.time }}</span></v-col
      >
      <v-col md="1"
        ><h3>vote :</h3>
        <span>{{ this.detailsData.vote }}</span></v-col
      >
    </v-row>

    <v-divider></v-divider>
    <h3>comments</h3>
    <v-divider></v-divider>
    <v-row style="margin: 5px">
      <v-col md="10" sm="12" xs="12">
        <v-textarea
          filled
          outlined
          dense
          height="85px"
          label="your comment"
        ></v-textarea
      ></v-col>
      <v-col md="2" sm="12" xs="12"
        ><v-btn block color="primary" style="position: relative;">
          comments</v-btn
        ></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import carousel from "../carousel/Carousel.vue";
export default {
  props: {},
  components: {
    carousel,
  },
  data: () => ({
    detailsData: [],
    items: [],
  }),
  created() {
    this.detailsData = this.$route.params.details;

    for (let i = 0; i < this.detailsData.image.length; i++) {
      this.items.push(
        require("../../assets/images/upload/" + this.detailsData.image[i])
      );
    }
  },
};
</script>
