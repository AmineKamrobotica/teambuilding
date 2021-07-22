import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //data of all building
    data: [],
    //check authentication state
    authed: false,
    //token authentications
    token: "",
    //username profil
    username: "",
    userData: [],
    id: "",
    comments: [],
    //drawer responsive
    drawer: false,
    // links befor auth
    links: [
      { name: "sign up", link: "/signup" },
      { name: "log in", link: "/login" },
    ],
    // links after auth
    afterauth: [
      { name: "Organize", link: "/organize" },
      { name: "memories", link: "/memories" },
    ],
    notifications: 0,
  },
  mutations: {},
  actions: {
    // in the explore view 
    getAllBuilding() {
      axios.get("building/").then((res) => {
        this.state.data = res.data;
      });
    },
    deleteItem(state, { id }) {
      axios.delete("building/" + id).then(() => {
        console.log("hello dispatch");
      });
    },
    updateVote(state, { id, voteEdited }) {
      axios.put("building/vote/" + id, {
        vote: voteEdited,
      });
    },
    editPost(state, { postInfo }) {
      axios.put("building/postBuilding/" + postInfo.id, {
        title: postInfo.title,
        location: postInfo.location,
        date: postInfo.date,
        time: postInfo.time,
        description: postInfo.desc,
      });
    },
    postComment(state, { commentInfo }) {
      axios.put("building/comments/" + commentInfo.id, {
        content: commentInfo.content,
        idPost: commentInfo.idPost,
        owner: commentInfo.owner,
        idOwner: commentInfo.idOwner,
      });
    },
  },
});
