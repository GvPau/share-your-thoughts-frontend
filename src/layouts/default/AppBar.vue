<template>
  <div>
    <div class="header">
      <div class="app-name">SHARE YOUR POSTS</div>
      <div class="company">GOODGOOD TRAIN SL</div>
    </div>

    <v-main theme="dark">
      <div class="main">
        <v-container fluid>
          <v-row dense class="custom-card">
            <v-col v-for="post in posts" :key="post.id" cols="12">
              <v-card
                :title="post.title"
                :subtitle="post.author"
                :text="post.description"
              ></v-card>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" class="new-post">
              <v-btn @click="fetchPosts">Create New Post</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";

export default {
  setup() {
  // Declare reactive variables
  const drawer = ref(false);
  const posts = computed(() => store.getters.posts);
  const router = useRouter();
  const store = useStore();

  // Declare functions
  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  const fetchPosts = async () => {
    await store.dispatch("fetchPosts");
  };

  // Lifecycle hook
  onMounted(async () => {
    await fetchPosts();
  });

  // Return reactive variables and functions
  return {
    drawer,
    posts,
    logout,
    fetchPosts,
  };
}

};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam&family=Yanone+Kaffeesatz&display=swap");

.main {
  background-color: #393d46;
  height: 100%;
  font-family: "Kalam", cursive;
  font-family: "Yanone Kaffeesatz", sans-serif;
}

.header {
  height: 6vh;
  background-color: #333;
  /* Change the background color as needed */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  /* Adjust the padding as needed */
}

.app-name {
  font-family: "Kalam", cursive;
  font-family: "Yanone Kaffeesatz", sans-serif;
  margin: 0 auto;
  font-size: x-large;
}

.company {
  font-family: "Kalam";
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: medium;
}

.new-post {
  position: fixed;
  bottom: 20px;
  display: flex;
  justify-content: center;
}

.button {
  position: relative;
  cursor: pointer;
  z-index: 1;
}

.button:before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  background-color: rgb(89, 255, 255);
  transition: 0.5s ease;
  z-index: -1;
}

.button:hover:before {
  left: 0;
  right: 0;
  opacity: 1;
}

.custom-card {
  margin: 20px;
}
</style>
