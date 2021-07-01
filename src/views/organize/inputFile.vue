<template>
  <div
    style="    display: flex;
    margin-bottom: 15px;"
  >
    <v-btn @click="fileIput" color="#54478c" class="organizeBtn">upload Image</v-btn>
    <input
      type="file"
      accept="image/png, image/jpeg"
      ref="fileInput"
      style="display:none"
      @change="chnge"
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
    chnge() {
      console.log("amine");
    },
  },
};
</script>
<style scoped>
.organizeBtn{
  color: white;
  text-transform: capitalize;
}
</style>
