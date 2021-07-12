<template>
  <v-container>
    <h1 class="hEdited">Organize</h1>
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
        <v-row>
          <v-col md="6" sm="12"><picke-date-time :time="time" @clicked="logChange"/></v-col>
          <v-col md="6" sm="12"><picke-time @timechange="timeChange"/></v-col>
        </v-row>
      </form>
      <v-btn color="#2c699a" class="btnsEdited" block x-large>Submit</v-btn>
    </div>
  </v-container>
</template>
<script>
import PickeDateTime from "../organize/picke.vue";
import PickeTime from "../organize/pickeTime.vue";
import axios from "axios";
export default {
  components: {
    PickeDateTime,
    PickeTime,
  },
  data: () => ({
    date: "",
    time: "",
    title: "",
    description: "",
    location: "",
    
  }),
  created() {
    axios
      .get("http://localhost:5000/building/" + this.$route.params.id)
      .then((res) => {
        (this.date = res.data.date),
          (this.time = res.data.time),
          (this.title = res.data.title),
          (this.description = res.data.description),
          (this.location = res.data.location);
      });
  },

  computed: {},

  methods: {
    logChange(value) {
      this.date = value;
    },
    timeChange(value) {
      this.time = value;
    },
    /* images(value) {
      this.files = value;
    }, */
    /* change() {
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
    }, */
  },
};
</script>
<style scoped>
@import "./edited.css";
</style>
