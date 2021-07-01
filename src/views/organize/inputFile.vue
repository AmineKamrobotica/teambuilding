<template>
  <div
    style="    display: flex;
    margin-bottom: 15px;"
  >
    <v-btn @click="fileIput" color="success">upload Image</v-btn>
    <input
      type="file"
      accept="image/png, image/jpeg"
      ref="fileInput"
      style="display:none"
    />
  </div>
</template>
<script>
export default {
  data: () => ({
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
    image: "",
  }),
  methods: {
    fileIput() {
      this.$refs.fileInput.click();
    },
  },
};
</script>
