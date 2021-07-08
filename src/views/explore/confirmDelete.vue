<template>
  <v-row justify="center">
    <v-dialog persistent max-width="290" v-model="dialog">
      <v-card>
        <v-card-title class="text-h5">
          Warning
        </v-card-title>
        <v-card-text>Are you sure you want to delete this program</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="disagree">
            no
          </v-btn>
          <v-btn color="green darken-1" text @click="agree">
            yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    dialog: Boolean,
  },
  methods: {
    disagree() {
      this.$emit("disagree");
    },
    agree() {
      this.$emit("agree");
    },
  },
};
</script>
