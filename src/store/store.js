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
    getVote(state, { data }) {
      var voteRef = firebase.database().ref("vote/" + data.idProgram);
      voteRef.push(data);
      console.log("hello noo");
    },
  },
});
