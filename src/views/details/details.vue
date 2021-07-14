<template>
  <v-main>
    <v-container grid-list-xs>
      <div class="divStyle">
        <h2>details of the programme</h2>
        <v-icon color="pink">mdi-home</v-icon>
      </div>
      <carousel :items="items"></carousel>
      <details-infos :infos="detailsData"></details-infos>

      <v-divider></v-divider>
      <h3>comments</h3>
      <v-divider></v-divider>
      <comments-area @clicked="comments"></comments-area>
      <comments :comments="commentsOfThePost"></comments>
    </v-container>
  </v-main>
</template>

<script>
import carousel from "../carousel/Carousel.vue";
import Comments from "./comments.vue";
import DetailsInfos from "./detailsInfo.vue";
import CommentsArea from "./CommentsArea.vue";
export default {
  props: {},
  components: {
    carousel,
    DetailsInfos,
    Comments,

    CommentsArea,
  },
  data: () => ({
    detailsData: [],
    items: [],
    comment: "",
    commentsOfThePost: [],
  }),
  created() {
    this.detailsData = this.$route.params.details;

    this.commentsOfThePost = this.detailsData.comments;

    for (let i = 0; i < this.detailsData.image.length; i++) {
      this.items.push(
        require("../../assets/images/upload/" + this.detailsData.image[i])
      );
    }


  },
  methods: {
    comments(value) {
      if (this.$store.state.token && localStorage.getItem("id")) {
        var comentInfo = {
          id: this.detailsData._id,
          content: value,
          idPost: this.detailsData._id,
          owner: this.$store.state.username,
          idOwner: localStorage.getItem("id"),
        };
        this.$store.dispatch("postComment", { commentInfo: comentInfo });
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
@import url("./details.css");
</style>
