<template>
  <v-container>
    <h1 class="hOrganize">Organize</h1>
    <div class="contOrganize text-center">
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
        <input-file @inputFile="images"></input-file>
        <!-- <v-file-input
          id="filesinput"
          v-model="files"
          placeholder="Upload your documents"
          label="File input"
          multiple
          type="file"
          prepend-icon="mdi-paperclip"
          name="image"
          @change="filesIput"
        >
          <template v-slot:selection="{ text }">
            <v-chip small label color="primary">
              {{ text }}
            </v-chip>
          </template>
        </v-file-input> -->
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
      </form>
      <v-btn color="#2c699a" class="btnsOrganize" block x-large @click="change"
        >Submit</v-btn
      >
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
      console.log("the date is " + this.date);
    },
    timeChange(value) {
      this.time = value;
      console.log("the time is " + this.time);
    },
    images(value) {
      this.files = value;
      console.log("images " + this.files);
    },
    change() {
      if (this.$store.state.token) {
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
          .then((res) => {
            console.log(res.data);
          })
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
