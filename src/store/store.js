import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: [],
    authed: false,
    token: "",
    username: "",
    userData: [],
    id: "",
    comments: [],
    drawer: false,
    links: [
      { name: "sign up", link: "/signup" },
      { name: "log in", link: "/login" },
    ],
    afterauth: [
      { name: "Organize", link: "/organize" },
      { name: "memories", link: "#" },
    ],
  },
  mutations: {},
  actions: {
    getAllBuilding() {
      axios.get("http://localhost:5000/building/").then((res) => {
        this.state.data = res.data;
      });
    },
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
    postComment(state, { commentInfo }) {
      axios.put("http://localhost:5000/building/comments/" + commentInfo.id, {
        content: commentInfo.content,
        idPost: commentInfo.idPost,
        owner: commentInfo.owner,
        idOwner: commentInfo.idOwner,
      });
    },
  },
});
