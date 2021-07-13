<template>
  <v-container>
    <h1 class="hExplore">Explore our programms</h1>
    <div class="contExplore text-center">
      <v-row>
        <v-col v-for="(item, i) in data" :key="i" cols="12">
          <card-explore
            @deleteProgram="deleteProgram"
            :item="item"
          ></card-explore>
        </v-col>
      </v-row>
      <confirm-delete
        :dialog="dialog"
        @disagree="disagree"
        @agree="agree"
      ></confirm-delete>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
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
  }),
  created() {
    axios.get("http://localhost:5000/building/").then((res) => {
      this.data = res.data;
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
  },
};
</script>
<style>
@import url("./explore.css");
</style>
