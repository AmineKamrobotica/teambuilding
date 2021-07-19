<template>
  <span style="cursor: pointer" icon>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span dark v-bind="attrs" v-on="on">
          <v-icon>
            mdi-bell-outline
          </v-icon>
        </span></template
      >
      <v-list two-line>
        <v-subheader> Torday</v-subheader>
        <v-divider></v-divider>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.username"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
  </span>
</template>
<script>
import firebase from "../../db/firebase";
export default {
  data: () => ({
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        username: "Amine Kammoun",
        subtitle: `<span class="text--primary">Amine Kammoun</span> &mdash; added new event `,
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },

      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
  created() {
    //var count = 0;
    var database = firebase.database().ref("notifications");
    database.on("child_added", (snapshot) => {
      console.log(snapshot.val().username);
      this.items.push(snapshot.val());
    });
  },
};
</script>
