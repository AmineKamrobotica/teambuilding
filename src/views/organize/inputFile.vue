<template>
  <div
    style="    display: flex;
    margin-bottom: 15px;"
  >
    <!-- 
    <v-btn @click="fileIput" color="#54478c" class="organizeBtn"
      >upload Image</v-btn
    >
    <v-file-input
      type="file"
      v-model="images"
      multiple
      accept="image/png, image/jpeg"
      ref="fileInput"
     
      @change="chnge"
    /> -->

    <v-file-input
      v-model="images"
      color="deep-purple accent-4"
      counter
      label="File input"
      multiple
      placeholder="Select your files"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
      @change="chnge"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
          {{ text }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="text-overline grey--text text--darken-3 mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </v-file-input>
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
    images: [],
    files: [],
    filesImages: [],
  }),
  methods: {
    fileIput() {
      this.$refs.fileInput.click();
    },
    chnge() {
      this.$emit("inputFile", this.images);
      console.log("amine");
    },
  },
};
</script>
<style scoped>
.organizeBtn {
  color: white;
  text-transform: capitalize;
}
</style>
