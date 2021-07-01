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
        :src="item.src"
      >
        <div class="description">
          <h2>{{ titles[i] }}</h2>
          <p>{{ descs[i] }}</p>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      titles: ["1st meet", "2nd meet", "3rd meet", "4th meet"],
      descs: ["", "", "", ""],
      items: [
        {
          src: require("./images/image2.jpg"),
        },
        {
          src: require("./images/image3.jpg"),
        },
        {
          src: require("./images/image5.jpg"),
        },
        {
          src: require("./images/image6.jpg"),
        },
      ],
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
