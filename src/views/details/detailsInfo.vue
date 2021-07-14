<template>
  <v-row>
    <v-col md="5" sm="6" xs="12"
      ><h2>description :</h2>
      <p>
        {{ this.infos.description }}
      </p></v-col
    >
    <v-col md="3" sm="6" xs="12"
      ><h2>date :</h2>
      <span>{{ this.infos.date }}</span></v-col
    >
    <v-col md="3" sm="6" xs="12"
      ><h2>time :</h2>
      <span>{{ this.infos.time }}</span></v-col
    >
    <v-col md="1" sm="6" xs="12"
      ><h3>vote :</h3>
      <span>{{ this.infos.vote }}</span></v-col
    >
  </v-row>
</template>
<script>
export default {
  props: { infos: [] },
};
</script>
