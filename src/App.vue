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
export default {
  components: {
    Bar,
    Footer,
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>

</style>
