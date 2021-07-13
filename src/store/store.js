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
    comments: [],
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
    editPost(state, { postInfo }) {
      axios.put("http://localhost:5000/building/postBuilding/" + postInfo.id, {
        title: postInfo.title,
        location: postInfo.location,
        date: postInfo.date,
        time: postInfo.time,
        description: postInfo.desc,
      });
    },
    /* getCommentPost(state, { id }) {
      axios.get("http://localhost:5000/comments/" + id).then((res) => {
        this.comments = res.data;
      });
    }, */
    /* postComment(state,{commentInfo}){
      axios.post("http://localhost:5000/comments/postComments"+id)
    } */
  },
});
