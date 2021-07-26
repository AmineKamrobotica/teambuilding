<template>
  <v-main class="grey-bg-color">
    <v-container>
      <v-card outlined class="contOrganize mx-auto">
        <h1 class="hmemories">memories</h1>
        <div>
          <form method="POST" enctype="multipart/formdata">
            <input-file @inputFile="images"></input-file>
            <v-text-field
              prepend-inner-icon=" mdi-pen"
              v-model="title"
              label="Title"
              single-line
              outlined
            ></v-text-field>
            <v-text-field
              prepend-inner-icon="mdi-map-marker"
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

            <v-btn
              color="#2c699a"
              class="btnsOrganize"
              block
              large
              @click="change"
            >
              <v-icon left>mdi-cloud-upload</v-icon> Submit</v-btn
            >
          </form>
        </div>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import InputFile from "./inputFile.vue";

import axios from "axios";
import firebase from "../../db/firebase";
import moment from "moment";
export default {
  components: {
    InputFile,
  },
  data: () => ({
    image: [],
    files: [],
    title: "",
    description: "",
    location: "",
  }),

  computed: {},

  methods: {
    images(value) {
      this.files = value;
    },
    change() {
      if (this.$store.state.token && localStorage.getItem("id")) {
        var formData = new FormData();
        formData.append("title", this.title);
        formData.append("location", this.location);
        formData.append("description", this.description);
        formData.append("owner", this.$store.state.username);
        formData.append("idOwner", localStorage.getItem("id"));
        for (let i = 0; i < this.files.length; i++) {
          formData.append("image", this.files[i]);
        }
        axios
          .post("memories/postMemorie", formData)
          .then(this.$router.push("/exploreMemories"), this.$router.go(0))
          .then(this.updateNotification())
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$router.push("/login");
      }
    },
    updateNotification() {
      const timeElapsed = Date.now();
      const today = moment(timeElapsed).format("MMMM Do YYYY, HH:mm");
      var database = firebase.database().ref("notifications");
      var data = {
        timeNotificaiton: today,
        object: `<span class="text--primary">${this.$store.state.username}</span> &mdash; added new memories `,
        userId: localStorage.getItem("id"),
        username: this.$store.state.username,
        verb: "memories",
      };
      database.push(data);

      /* database
        .get()
        
        .then((snapshot) => {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log(childData);
          });
        }); */
    },
  },
};
</script>
<style scoped>
@import "./memories.css";
</style>
