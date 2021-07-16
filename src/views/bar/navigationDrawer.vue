<template>
  <v-navigation-drawer v-model="this.$store.state.drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group active-class="light-blue darken-4">
        <v-list-item>
          <v-list-item-title>
            <router-link class="linkDrawer" to="/">home</router-link>
          </v-list-item-title>
        </v-list-item>
        <div v-if="!this.$store.state.token && !this.$store.state.authed">
          <v-list-item
            v-for="(link, index) in this.$store.state.links"
            :key="index"
          >
            <v-list-item-title
              ><router-link class="linkDrawer" :to="link.link">
                {{ link.name }}
              </router-link></v-list-item-title
            >
          </v-list-item>
        </div>
        <div v-if="this.$store.state.token && this.$store.state.authed">
          <v-list-item
            v-for="(link, index) in this.$store.state.afterauth"
            :key="index"
          >
            <v-list-item-title
              ><router-link class="link" :to="link.link">
                {{ link.name }}
              </router-link></v-list-item-title
            >
          </v-list-item>
          <v-btn
            style="margin-left:10px"
            small
            icon
            color="#e63946"
            @click="logOut"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({}),
  methods: {
    logOut() {
      localStorage.removeItem("id");
      this.$router.go(0);
    },
  },
};
</script>
