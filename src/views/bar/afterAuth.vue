<template>
  <div>
    <v-avatar class="avatarStyle" color="#0db39e">
      <span class="white--text text-h6">{{
        this.$store.state.username[0].toUpperCase()
      }}</span>
    </v-avatar>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      rounded="large"
    >
      <template v-slot:activator="{ on, attrs }">
        <span class="spanmdi" v-bind="attrs" v-on="on">
          <v-icon> mdi-chevron-down</v-icon>
        </span>
      </template>

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
          <v-list-item-content class="menuSpan">
            <v-list-item-action>
              <v-list-item-title>
                <router-link class="linkProfil" to="/profil">
                  <span
                    ><v-icon left>mdi-account</v-icon> profil
                  </span></router-link
                ></v-list-item-title
              >
            </v-list-item-action>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="menuSpan">
            <v-list-item-action>
              <v-list-item-title>
                <span style="color: #0db39e !important; " @click="logOut">
                  <v-icon left>mdi-logout</v-icon>
                  log out
                </span>
              </v-list-item-title>
            </v-list-item-action>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
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
<style scoped>
.menuSpan {
  padding: 0 !important;
}
.menuSpan:hover {
  background-color: #fafafa;
  cursor: pointer;
}
</style>
