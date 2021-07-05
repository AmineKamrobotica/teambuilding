<template>
  <div
    style="    display: flex;
    margin-bottom: 15px;"
  >
    <v-file-input
      v-model="files"
      placeholder="Upload your documents"
      label="File input"
      multiple
      prepend-icon="mdi-paperclip"
      @change="chnge"
    >
      <template v-slot:selection="{ text }">
        <v-chip small label color="primary">
          {{ text }}
        </v-chip>
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
      console.log(this.files[0]);
      this.$emit("inputFile", this.files);
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
