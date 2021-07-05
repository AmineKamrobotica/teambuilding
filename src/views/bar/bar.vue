<template>
  <v-app-bar app color="white">
    <v-container class="py-0 fill-height">
      <span class="logo"> proxyfy</span>
      <v-spacer></v-spacer>

      <span style="display: flex;" v-for="(link,index) in links" :key="index"
        ><router-link class="link" :to="link.link">
          {{ link.name }}
        </router-link>
      </span>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    links: [
      { name: "home", link: "/" },
      { name: "sing up", link: "/signup" },
      { name: "log in", link: "/login" },
    ],
  }),
};
</script>
<style scoped>
@import "./bar.css";
</style>
