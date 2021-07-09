<template>
  <v-container>
    <v-carousel hide-delimiters dark show-arrows-on-hover height="400px">
      <v-carousel-item
        style="min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;"
        v-for="(item, i) in items"
        :key="i"
        :src="item"
      >
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script>
export default {
  props: {
    items: [],
  },
  data() {
    return {
      
    };
  },
};
</script>
<style scoped>
.description {
  width: 40%;
  position: relative;
  top: 28%;
  left: 5%;
  font-family: Tajawal, Roboto, Roboto monospace;
  color: white;
}
.carousel-style {
  background-color: black;
}
</style>
