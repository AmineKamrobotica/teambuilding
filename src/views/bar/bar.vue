<template>
  <div>
    <v-app-bar app color="white" hide-on-scroll>
      <v-container class="py-0 fill-height">
        <span class="logo">proxyfy</span>
        <v-spacer></v-spacer>

        <span class="d-none d-md-flex" style="display: flex;">
          <main-bar
            v-if="this.$store.state.token && this.$store.state.authed"
          ></main-bar>
        </span>
        <v-spacer></v-spacer>
        <before-auth
          v-if="!this.$store.state.token && !this.$store.state.authed"
        ></before-auth>
        <after-auth
          v-if="this.$store.state.token && this.$store.state.authed"
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
