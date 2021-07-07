<template>
  <v-container grid-list-xs>
    <carousel :items="items"></carousel>
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
    items: [require("../../assets/images/upload/image2.jpg")],
  }),
  created() {
    this.detailsData = this.$route.params.details;
    console.log(this.detailsData);
  },
};
</script>
