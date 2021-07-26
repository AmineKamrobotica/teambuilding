<template>
  <v-container>
    <h1 class="hEdited">Edit</h1>
    <div class="contEdited text-center">
      <form method="POST" enctype="multipart/formdata">
        <v-text-field
          v-model="title"
          label="Title"
          single-line
          outlined
        ></v-text-field>
        <v-text-field
          v-model="location"
          label="Location"
          single-line
          outlined
        ></v-text-field>
        <v-textarea
          v-model="description"
          outlined
          name="input-7-4"
          label="description"
        ></v-textarea>
      </form>
      <v-btn color="#2c699a" class="btnsEdited" block x-large @click="editPost"
        >Submit</v-btn
      >
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    title: "",
    description: "",
    location: "",
    id: "",
  }),
  created() {
    axios.get("memories/" + this.$route.params.id).then((res) => {
      (this.id = this.$route.params.id),
        (this.title = res.data.title),
        (this.description = res.data.description),
        (this.location = res.data.location);
    });
  },

  computed: {},

  methods: {
    editPost() {
      var memInfo = {
        id: this.id,
        title: this.title,
        location: this.location,
        desc: this.description,
      };
      this.$store
        .dispatch("editMem", {
          memInfo: memInfo,
        })
        .then(this.$router.push("/exploreMemories"), this.$router.go());
    },
  },
};
</script>
<style scoped>
@import "./edited.css";
</style>
