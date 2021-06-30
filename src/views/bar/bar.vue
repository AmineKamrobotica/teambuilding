<template>
  <v-app-bar app color="white">
    <v-container class="py-0 fill-height">
      <v-span class="logo">proxyfy</v-span>
      <v-spacer></v-spacer>

      <v-span class="link" v-for="link in links" :key="link">{{ link }}</v-span>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    links: ["home", "sing up", "log in"],
  }),
};
</script>
<style scoped>
.link {
  color: #0db39e;
  cursor: pointer;
  margin-right: 30px;
  font-size: 18px;
}
.link:hover{
    color: #2c699a;
}
.logo {
  font-size: 28px;
  margin-bottom: 9px;
  font-weight: bold;
  color: #0db39e;
}
</style>
