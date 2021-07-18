<template>
  <span style="display: flex;">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#0db39e" icon dark v-bind="attrs" v-on="on">
          <v-icon> mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{
                this.$store.state.username
              }}</v-list-item-title>
              <v-list-item-subtitle>proxymien</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-title>profil</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-btn small icon color="#e63946" @click="logOut">
                <v-icon>mdi-logout</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-title> log out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </span>
</template>
<script>
export default {
  data: () => ({
    menu: false,
  }),
  methods: {
    logOut() {
      localStorage.removeItem("id");
      this.$router.go(0);
    },
  },
};
</script>
