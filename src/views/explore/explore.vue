<template>
  <v-main class="grey-bg-color">
    <h1 class="hExplore">Explore our programms</h1>
    <v-container>
      <v-row class="fill-height" align-content="center" justify="center">
        <v-col v-if="!show" cols="6">
          <v-progress-linear
            color="#0db39e"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <div class="contExplore text-center">
        <v-row v-if="show">
          <v-spacer></v-spacer>
          <v-btn plain color="primary"
            ><router-link
              style="text-decoration: none;
    text-transform: capitalize;"
              to="/organize"
            >
              add a meeting</router-link
            ></v-btn
          >
          <v-col v-for="(item, i) in this.$store.state.data" :key="i" cols="12">
            <v-slide-x-transition>
              <card-explore
                @getUser="getUser"
                @deleteProgram="deleteProgram"
                :item="item"
              ></card-explore>
            </v-slide-x-transition>
          </v-col>
        </v-row>
        <confirm-delete
          :dialog="dialog"
          @disagree="disagree"
          @agree="agree"
        ></confirm-delete>
      </div>
    </v-container>
  </v-main>
</template>
<script>
//import axios from "axios";
import cardExplore from "./cardExplore.vue";
import confirmDelete from "./confirmDelete.vue";
export default {
  components: {
    cardExplore,
    confirmDelete,
  },
  data: () => ({
    data: [],
    dialog: false,
    id: "",
    show: false,
  }),
  created() {
    this.$store.dispatch("getAllBuilding").then(() => {
      setTimeout(() => {
        this.show = true;
      }, 500);
    });
  },
  methods: {
    disagree() {
      this.dialog = false;
    },
    deleteProgram(value) {
      this.id = value;
      this.$store.state.id = value;
      this.dialog = true;
    },
    agree() {
      this.$store.dispatch("deleteItem", { id: this.id }).then(() => {
        this.disagree();
        this.$router.go();
      });
    },
    getUser(value) {
      this.$store
        .dispatch("getUser", { id: value })
        .then(console.log(this.$store.state.currentUser));
    },
  },
};
</script>
<style>
@import url("./explore.css");
</style>
