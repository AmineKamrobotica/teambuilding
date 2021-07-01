<template>
  <v-footer color="#0db39e " padless>
    <v-row v-if="!hide" justify="center" no-gutters>
      <span class="linkFooter" v-for="link in links" :key="link">{{
        link
      }}</span>
      <v-col class="#0db39e lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>proxym IT</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    links: ["home", "show building", "organize"],
  }),
  computed: {
    hide() {
      return this.$route.path === "/login" || this.$route.path === "/signup";
    },
  },
};
</script>
<style scoped>
.linkFooter {
  color: #ffff;
  cursor: pointer;
  margin-right: 30px;
  font-size: 18px;
}
.linkFooter:hover {
  color: #000;
}
</style>
