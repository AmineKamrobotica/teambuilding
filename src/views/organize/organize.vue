<template>
  <v-container>
    <h1 class="hOrganize">Organize</h1>
    <div class="contOrganize text-center">
      <form>
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

        <InputFile @inputFile="images" />
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
      <v-btn color="#2c699a" class="btnsOrganize" block x-large @click="Change"
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
    title: "",
    description: "",
    location: "",
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
      this.image.push(value);
      console.log("images " + this.image);
    },
    Change() {
      axios
        .post("http://localhost:5000/building/postBuilding", {
          title: this.title,
          location: this.location,
          description: this.description,
          date: this.date,
          time: this.time,
          image: this.image,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
@import "./organize.css";
</style>
