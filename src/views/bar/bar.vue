<template>
  <div>
    <v-app-bar app color="white">
      <v-container class="py-0 fill-height">
        <router-link to="/"
          ><img src="../../assets/images/new_logo-removebg-preview (1).png" height="40px"
        /></router-link>
        <v-spacer></v-spacer>

        <span class="d-none d-md-flex">
          <main-bar
          style="margin-top:10px"
            v-if="this.$store.state.token && this.$store.state.authed"
          ></main-bar>
        </span>
        <v-spacer></v-spacer>
        <before-auth
          v-if="!this.$store.state.token && !this.$store.state.authed"
          class="hidden-md-and-down"
        ></before-auth>
        <after-auth
          v-if="this.$store.state.token && this.$store.state.authed"
          class="hidden-md-and-down"
        ></after-auth>
      </v-container>
      <v-app-bar-nav-icon
        color="#0db39e"
        @click="toggle"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <navigation-drawer></navigation-drawer>
  </div>
</template>
<script>
import navigationDrawer from "./navigationDrawer.vue";
import afterAuth from "./afterAuth.vue";
import beforeAuth from "./beforeAuth.vue";
import mainBar from "./mainBar.vue";
export default {
  components: {
    navigationDrawer,
    afterAuth,
    beforeAuth,
    mainBar,
  },
  data: () => ({}),

  methods: {
    toggle() {
      this.$store.state.drawer = !this.$store.state.drawer;
    },
  },
};
</script>
<style scoped>
@import "./bar.css";
</style>
