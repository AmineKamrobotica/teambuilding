import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authed: false,
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
    editPost(state, { id, title, location, date, time, desc }) {
      axios.put("http://localhost:5000/building/postBuilding/" + id, {
        title: title,
        location: location,
        date: date,
        time: time,
        description: desc,
      });
    },
  },
});
