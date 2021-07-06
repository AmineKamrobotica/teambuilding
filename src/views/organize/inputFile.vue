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
    files: [],

  }),
  methods: {
    chnge() {
      console.log(this.files);
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
