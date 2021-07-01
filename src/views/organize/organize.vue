<template>
  <v-container>
    <div class="contOrganize text-center">
      <h1>Take the initiative and organize</h1>
      <form>
        <v-text-field
          v-model="title"
          label="Title"
          single-line
          outlined
        ></v-text-field>
        <v-text-field
          v-model="location"
          label="Location"
          single-line
          outlined
        ></v-text-field>

        <InputFile />
        <v-textarea
          v-model="description"
          outlined
          name="input-7-4"
          label="description"
        ></v-textarea>
        <picke-date-time date="date" />
      </form>
      <v-btn color="#2c699a" class="btnsOrganize" block x-large>Submit</v-btn>
    </div>
  </v-container>
</template>
<script>
import InputFile from "./inputFile.vue";
import PickeDateTime from "./picke.vue";
export default {
  
  components: {
    InputFile,
    PickeDateTime,
  },
  data: () => ({
    title: "",
    description: "",
    location: "",
  }),

  computed: {},

  methods: {},
};
</script>
<style scoped>
@import "./organize.css";
</style>
