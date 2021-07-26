<template>
  <v-row style="margin:2px">
    <v-col md="5" sm="6" xs="12"
      ><h2>description :</h2>
      <p>
        {{ this.infos.description }}
      </p></v-col
    >
  </v-row>
</template>
<script>
export default {
  props: { infos: [] },
};
</script>
