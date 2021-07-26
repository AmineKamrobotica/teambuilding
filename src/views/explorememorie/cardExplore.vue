<template>
  <div>
    <v-card outlined>
      <div>
        <v-img
          aspect-ratio="2.3"
          contain
          :src="require('../../assets/images/upload/' + `${item.image[0]}`)"
        ></v-img>

        <v-divider></v-divider>
        <v-list-item three-line style="text-align: left;">
          <v-list-item-content>
            <v-list-item-title style="font-size: 25px;">{{
              item.title
            }}</v-list-item-title>
            <v-list-item-subtitle>
              <span
                style="font-size: 12px;
    font-weight: bold; margin-top:0px;"
                >{{ item.owner }}</span
              >
              • •
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
            icon
            class=""
            color="#f1c453"
            text
            small
            v-if="item.idOwner == idOwner && this.$store.state.token"
            @click="goToEdit(item._id)"
            ><v-icon dark small>
              mdi-wrench
            </v-icon>
          </v-btn>
          <v-btn
            absolute
            icon
            class=""
            @click="delete2(item._id)"
            color="#e63946"
            text
            small
            v-if="item.idOwner == idOwner && this.$store.state.token"
            ref="deleteProgramme"
          >
            <v-icon dark small>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
//import carousel from '../carousel/Carousel.vue'
export default {
  components: {
    //carousel
  },
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
      this.$router.push({
        name: "detailsMemories",
        params: { details: item2 },
      });
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
