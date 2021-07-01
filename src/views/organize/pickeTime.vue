<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="time"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          outlined
          dense
          v-model="time"
          label="hour of the building"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        color="#29628F"
        v-if="menu"
        v-model="time"
        full-width
        format="24hr"
        @click:minute="$refs.menu.save(time)"
      ></v-time-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: null,
      menu: false,
    };
  },
};
</script>
