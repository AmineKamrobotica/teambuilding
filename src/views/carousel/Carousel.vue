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
      titles: ["tastour", "tbarka", "janoub", "hawaria"],
      descs: [
        "Harga deals with a set of social isssues,namely cladesti migration, focusing the camera on",
        "Aziza lives completely disconnected from the pace and values of her family. She inherited her father’s passion for alcohol and is involved without restraint in her rock band",
        "Ibrahim discovers that his son Marwan was active in a militant Islamist cell. He seeks to understand the reasons that drove him to extremism and to get to know the people who brainwashed him",

        "Dr. Fares pursues the reality of the nightmares of his mother who passed away a year ago, prompting him to reopen the file of her death",
      ],
      items: [
        {
          src: require("./images/image1.webp"),
        },
        {
          src: require("./images/image4.webp"),
        },
        {
          src: require("./images/image3.webp"),
        },
        {
          src: require("./images/image2.webp"),
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
