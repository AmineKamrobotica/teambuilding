<template>
  <div>
    <v-card outlined>
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="50" tile>
          <v-img
            :src="require('../../assets/images/upload/' + `${item.image[0]}`)"
          ></v-img>
        </v-avatar>
        <v-list-item three-line style="text-align: left;">
          <v-list-item-content>
            <v-list-item-title style="font-size: 25px;">{{
              item.title
            }}</v-list-item-title>
            <v-list-item-subtitle>
              <span
                style="font-size: 15px;
    font-weight: bold; margin-top:0px;"
                >{{ item.owner }}</span
              >
              • <span>{{ item.date }} • {{ item.time }}</span>
            </v-list-item-subtitle>
            <v-list-item-title style="margin-top:10px;">
              <v-icon left small> mdi-map-marker</v-icon>
              <span>{{ item.location }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider></v-divider>
      <v-card-actions class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-btn class="" color="#16db93" text small @click="explore(item)">
            view
            <v-icon dark right small>
              mdi-arrow-right
            </v-icon>
          </v-btn>

          <v-btn
            class=""
            color="#f1c453"
            text
            small
            v-if="item.idOwner == idOwner && this.$store.state.token"
            @click="goToEdit(item._id)"
            ><v-icon dark small left>
              mdi-wrench
            </v-icon>
            edit
          </v-btn>
          <v-btn
            class=""
            @click="delete2(item._id)"
            color="#e63946"
            text
            small
            v-if="item.idOwner == idOwner && this.$store.state.token"
            ref="deleteProgramme"
          >
            <v-icon dark small left>mdi-delete</v-icon>
            delete
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  components: {},
  props: { item: [] },
  data: () => ({
    dialog: false,
    idOwner: localStorage.getItem("id"),
    
    
  }),
  created() {
    setTimeout(() => {
      this.showVote = true;
    }, 2000);
  },
  methods: {
    explore(item2) {
      this.$router.push({ name: "details", params: { details: item2 } });
    },
    delete2(id) {
      this.$emit("deleteProgram", id);
    },
    
    goToEdit(id) {
      this.$router.push({ name: "editMemories", params: { id: id } });
    },
  },
};
</script>
