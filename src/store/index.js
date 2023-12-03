import { fetchPosts } from "@/requests/posts";
import { createStore } from "vuex";

export default createStore({
  state: {
    items: [{ title: "Posts", icon: "mdi-domain", color: "red", to: "/" }],
    posts: [
      {
        title: "Posts 1",
        author: "This is a subtitle",
        description: "This is a description",
      },
    ],
  },
  mutations: {
    updatePosts(state, newPosts) {
      state.posts = newPosts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      // Simulate an API call to fetch posts
      const posts = await fetchPosts();
      commit("updatePosts", posts);
    },
  },
  getters: {
    // Your getters go here
  },
});
