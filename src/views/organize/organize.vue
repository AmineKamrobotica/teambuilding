<template>
  <v-container>
    <h1 class="hOrganize">Organize</h1>
    <div class="contOrganize">
      <form method="POST" enctype="multipart/formdata">
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
        <input-file @inputFile="images"></input-file>

        <v-textarea
          v-model="description"
          outlined
          name="input-7-4"
          label="description"
        ></v-textarea>
        <v-row>
          <v-col md="6" sm="12"><picke-date-time @clicked="logChange"/></v-col>
          <v-col md="6" sm="12"><picke-time @timechange="timeChange"/></v-col>
        </v-row>
        <v-btn color="#2c699a" class="btnsOrganize" block large @click="change">
          <v-icon left>mdi-cloud-upload</v-icon> Submit</v-btn
        >
      </form>
    </div>
  </v-container>
</template>
<script>
import InputFile from "./inputFile.vue";
import PickeDateTime from "./picke.vue";
import PickeTime from "./pickeTime.vue";
import axios from "axios";
export default {
  components: {
    InputFile,
    PickeDateTime,
    PickeTime,
  },
  data: () => ({
    date: "",
    time: "",
    image: [],
    files: [],
    title: "",
    description: "",
    location: "",
    vote: 0,
  }),

  computed: {},

  methods: {
    logChange(value) {
      this.date = value;
    },
    timeChange(value) {
      this.time = value;
    },
    images(value) {
      this.files = value;
    },
    change() {
      if (this.$store.state.token && localStorage.getItem("id")) {
        var formData = new FormData();
        formData.append("title", this.title);
        formData.append("location", this.location);
        formData.append("description", this.description);
        formData.append("date", this.date);
        formData.append("time", this.time);
        formData.append("owner", this.$store.state.username);
        formData.append("idOwner", localStorage.getItem("id"));
        formData.append("vote", this.vote);
        for (let i = 0; i < this.files.length; i++) {
          formData.append("image", this.files[i]);
        }
        /* formData.append("image", this.files[0]);
      formData.append("image", this.files[1]); */
        axios
          .post("http://localhost:5000/building/postBuilding", formData)
          .then(this.$router.push("/explore"), this.$router.go(0))
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
@import "./organize.css";
</style>
