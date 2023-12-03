<template>
  <div>
    <!-- <v-navigation-drawer theme="dark" dark v-model="drawer" temporary>
      <template v-slot:prepend>
        <v-list-item one-line>
          <v-list-item-content :style="{ 'align-items': 'center' }">
            <v-list-item-title> ShareYourThoughts </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon :color="item.color">{{ item.icon }} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block class="button" @click="logout"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer> -->

    <!-- <v-app-bar color="#ad7c53" prominent>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title color="black">Share your thoughts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="goToCreateEventPage()">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar> -->

    <div class="header">
      <div class="app-name">SHARE YOUR POSTS</div>
      <div class="company"> GOODGOOD TRAIN SL</div>
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
export default {
  computed: {
    items() {
      return this.$store.state.items;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    goToCreateEventPage: function () {
      this.$router.push("/");
    },

    logout() {
      localStorage.clear();
      this.$router.push("/");
    },

    fetchPosts() {
      this.$store.dispatch("fetchPosts");
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
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
  background-color: #333; /* Change the background color as needed */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Adjust the padding as needed */
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
