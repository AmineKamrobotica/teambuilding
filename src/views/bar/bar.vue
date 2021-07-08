<template>
  <v-app-bar app color="white">
    <v-container class="py-0 fill-height">
      <span class="logo"> proxyfy</span>
      <v-spacer></v-spacer>

      <span style="display: flex;">
        <router-link to="/" class="link">home </router-link>
        <span style="display: flex;" v-if="!this.$store.state.token">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            class="link"
            :to="link.link"
          >
            {{ link.name }}
          </router-link>
        </span>
        <span style="display: flex;" v-if="this.$store.state.token">
          <router-link
            v-for="(link, index) in afterauth"
            :key="index + 100"
            class="link"
            :to="link.link"
          >
            {{ link.name }}
          </router-link>
          <router-link to="#" class="linkUser">{{
            this.$store.state.username
          }}</router-link>
        </span>
      </span>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    links: [
      { name: "sign up", link: "/signup" },
      { name: "log in", link: "/login" },
    ],
    afterauth: [
      { name: "Organize", link: "/organize" },
      { name: "memories", link: "#" },
    ],
  }),
};
</script>
<style scoped>
@import "./bar.css";
</style>
