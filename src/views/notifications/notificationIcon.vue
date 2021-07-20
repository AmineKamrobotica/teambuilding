<template>
  <span style="cursor: pointer" icon>
    <v-menu  offset-y>
      <template scrollable v-slot:activator="{ on, attrs }">
        <span @click="badge = false" dark v-bind="attrs" v-on="on">
          <v-badge v-model="badge" dot>
            <v-icon>
              mdi-bell-outline
            </v-icon>
          </v-badge>
        </span></template
      >
      <v-list two-line>
        <v-subheader> Notifications</v-subheader>
        <v-divider></v-divider>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-avatar>
              <v-avatar color="#0db39e">
                <span class="white--text text-h6">{{
                  item.username[0].toUpperCase()
                }}</span>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.username"></v-list-item-title>
              <v-list-item-subtitle v-html="item.object"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="index + 100"></v-divider>
        </template>
      </v-list>
    </v-menu>
  </span>
</template>
<script>
import firebase from "../../db/firebase";
export default {
  data: () => ({
    items: [],
    badge: false,
  }),
  created() {
    //var count = 0;
    var database = firebase.database().ref("notifications");
    database.on("child_added", (snapshot) => {
      this.items.push(snapshot.val());
      console.log(1);
      this.badge = true;
      console.log(this.items);
    });
  },
};
</script>
