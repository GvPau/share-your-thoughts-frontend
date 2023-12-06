import { fetchPosts } from "@/requests/posts";
import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    updatePosts(state, newPosts) {
      console.log("update posts", state, newPosts);
      state.posts = newPosts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await fetchPosts();
      if (posts.length > 0) {
        commit("updatePosts", posts);
      }
    },
  },
  getters: {
    posts(state) {
      return state.posts;
    },
  },
});
