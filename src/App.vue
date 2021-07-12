<template>
  <v-app>
    <Bar />
    <v-main style="background-color: #FFFEF6; padding-bottom: 100px;">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Bar from "./views/bar/bar";
import Footer from "./views/footer/footer";
import axios from "axios";
export default {
  components: {
    Bar,
    Footer,
  },
  name: "App",
  created() {
    if (localStorage.getItem("id")) {
      axios
        .get("http://localhost:5000/user/" + localStorage.getItem("id"))
        .then((res) => {
          this.$store.state.token = res.data.token;
          this.$store.state.username = res.data.name + " " + res.data.lastName;
        });
    }
  },
  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

* {
  font-family: "Nunito", sans-serif;
}
</style>
