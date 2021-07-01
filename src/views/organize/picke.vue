<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          outlined
          dense
          v-model="date"
          label="date of building"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        color="#29628F"
        v-model="date"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => ({
    date: null,
    menu: false,
  }),
  methods: {
    save(date) {
      this.$emit("clicked", date);
    },
  },
};
</script>
