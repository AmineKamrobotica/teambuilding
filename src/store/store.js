import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
    deleteItem(state,{id}) {
      axios.delete("http://localhost:5000/building/" + id).then(() => {
        console.log("hello dispatch");
      });
    },
  },
});
