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
        <v-row>
          <v-col md="6" sm="12"
            ><picke-date-time :time="time" @clicked="logChange"
          /></v-col>
          <v-col md="6" sm="12"><picke-time @timechange="timeChange"/></v-col>
        </v-row>
      </form>
      <v-btn color="#2c699a" class="btnsEdited" block x-large @click="editPost"
        >Submit</v-btn
      >
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
    id: "",
  }),
  created() {
    axios
      .get("http://localhost:5000/building/" + this.$route.params.id)
      .then((res) => {
        (this.id = this.$route.params.id),
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
    editPost() {
      var postInfo = {
        id: this.id,
        title: this.title,
        location: this.location,
        desc: this.description,
        time: this.time,
        date: this.date,
      };
      this.$store
        .dispatch("editPost", {
          postInfo: postInfo,
        })
        .then(this.$router.push("/explore"), this.$router.go());
    },
  },
};
</script>
<style scoped>
@import "./edited.css";
</style>
