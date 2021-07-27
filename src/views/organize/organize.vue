<template>
  <v-main class="grey-bg-color">
    <v-container>
      <v-snackbar top color="#e63946" v-model="alert" :timeout="1500">
        check your data entred

        <template v-slot:action="{ attrs }">
          <v-btn color="#1d3557" text v-bind="attrs" @click="alert = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-card outlined class="contOrganize mx-auto">
        <h1 class="hOrganize">Organize</h1>
        <div>
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
              <v-col md="6" xs="12" sm="12"
                ><picke-date-time @clicked="logChange"
              /></v-col>
              <v-col md="6" xs="12" sm="12"
                ><picke-time @timechange="timeChange"
              /></v-col>
            </v-row>
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
import PickeDateTime from "./picke.vue";
import PickeTime from "./pickeTime.vue";
import axios from "axios";
import firebase from "../../db/firebase";
import moment from "moment";
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
    alert: false,
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
        if (
          this.title == "" ||
          this.location == "" ||
          this.description == "" ||
          this.date == "" ||
          this.time == "" ||
          this.files == ""
        ) {
          this.alert = true;
        } else {
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
            .post("building/postBuilding", formData)
            .then(
              this.updateNotification(),
              setTimeout(() => {
                this.$router.go();
              }, 1500)
            )
            .then(this.$router.push("/explore"))
            .catch((err) => {
              console.log(err);
            });
        }
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
        object: `<span class="text--primary">${this.$store.state.username}</span> &mdash; added new event `,
        userId: localStorage.getItem("id"),
        username: this.$store.state.username,
        verb: "organize",
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
@import "./organize.css";
</style>
