import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "../db/firebase";
console.log(firebase);

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: "",
    username: "",
    userData: [],
    id: "",
  },
  mutations: {},
  actions: {
    deleteItem(state, { id }) {
      axios.delete("http://localhost:5000/building/" + id).then(() => {
        console.log("hello dispatch");
      });
    },
    updateVote(state, { id, voteEdited }) {
      axios.put("http://localhost:5000/building/vote/" + id, {
        vote: voteEdited,
      });
    },
  },
});
