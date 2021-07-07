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
