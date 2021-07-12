<template>
  <div>
    <v-card>
      <div class="d-flex flex-no-wrap">
        <v-avatar class="ma-3" size="125" tile>
          <v-img
            :src="require('../../assets/images/upload/' + `${item.image[0]}`)"
          ></v-img>
        </v-avatar>
        <div>
          <v-card-title class="text-h5" v-text="item.title"></v-card-title>
          <div>
            <h6>publisher : {{ item.owner }}</h6>
            <h6>location : {{ item.location }}</h6>
            <h6>date : {{ item.date }}</h6>
            <h6>hour : {{ item.time }}</h6>
          </div>
        </div>
      </div>
      <v-divider></v-divider>
      <v-card-actions class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-btn class="" color="green" text small @click="explore(item)">
            explore
          </v-btn>

          <v-btn
            class=""
            color="yellow"
            text
            small
            v-if="item.idOwner == idOwner && this.$store.state.token"
          >
            edit
          </v-btn>
          <v-btn
            class=""
            @click="delete2(item._id)"
            color="red"
            text
            small
            v-if="item.idOwner == idOwner && this.$store.state.token"
            ref="deleteProgramme"
          >
            delete
          </v-btn>
        </div>
        <div>
          <v-btn v-model="voted" @click="check" text icon color="indigo">
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
    
  }),
  watch: {
    voted: function(val) {
      val ? this.update(++this.item.vote) : this.update(--this.item.vote);
    },
  },
  methods: {
    explore(item2) {
      console.log(item2);
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
  },
};
</script>
