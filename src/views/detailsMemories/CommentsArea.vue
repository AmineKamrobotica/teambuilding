<template>
  <v-row style="margin: 4px">
    <v-col md="10" sm="12" xs="12">
      <v-textarea
        v-model="comment"
        filled
        outlined
        dense
        height="85px"
        label="your comment"
      ></v-textarea
    ></v-col>
    <v-col md="2" sm="12" xs="12"
      ><v-btn
        block
        color="primary"
        style="position: relative;"
        @click="comments"
      >
        comments</v-btn
      ></v-col
    >
  </v-row>
</template>
<script>
export default {
  data: () => ({
    comment: "",
  }),
  methods: {
    comments() {
      this.$emit("clicked", this.comment);
      this.comment = "";
    },
  },
};
</script>
