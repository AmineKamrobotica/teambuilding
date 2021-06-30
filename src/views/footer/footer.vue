<template>
  <v-footer color="#0db39e " padless>
    <v-row justify="center" no-gutters>
      <v-span class="link" v-for="link in links" :key="link">{{ link }}</v-span>
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
};
</script>
<style scoped>
.link {
  color: #ffff;
  cursor: pointer;
  margin-right: 30px;
  font-size: 18px;
}
.link:hover {
  color: #000;
}
</style>
