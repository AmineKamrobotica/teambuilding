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
               class="spanUserName"
                @click="getUser(item.idOwner)"
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
            explore
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

        <div v-if="this.$store.state.token && this.$store.state.authed">
          <v-btn v-model="voted" @click="check" text icon color="#048ba8">
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <span>{{ item.vote }}</span>
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
    countUp: Number,
    voted: false,
    showVote: false,
  }),
  created() {
    setTimeout(() => {
      this.showVote = true;
    }, 2000);
  },
  watch: {
    voted: function(val) {
      val ? this.update(++this.item.vote) : this.update(--this.item.vote);
    },
  },
  methods: {
    explore(item2) {
      this.$router.push({ name: "details", params: { details: item2 } });
    },
    delete2(id) {
      this.$emit("deleteProgram", id);
    },
    check() {
      this.voted = !this.voted;
    },
    update(value) {
      this.$store
        .dispatch("updateVote", { id: this.item._id, voteEdited: value })
        .then(console.log(this.item.vote));
    },
    goToEdit(id) {
      this.$router.push({ name: "edit", params: { id: id } });
    },
    getUser(id){
      this.$emit("getUser",id)

    }
  },
};
</script>
