<template>
  <div>
    <v-navigation-drawer theme="dark" dark v-model="drawer" temporary>
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
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
      prominent
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title color="black">Share your thoughts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="goToCreateEventPage()">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main theme="dark">
      <v-container fluid>
        <v-row dense class="custom-card">
          <v-col v-for="n in 10" :key="n" cols="12">
            <v-card
              :title="`Content ${n}`"
              :subtitle="`Subtitle for Content ${n}`"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
            ></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [{ title: "Posts", icon: "mdi-domain", color: "red", to: "/" }],
  }),
  methods: {
    goToCreateEventPage: function () {
      this.$router.push("/");
    },

    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    toggleTheme() {
      const theme = useTheme();
      theme.dark = !theme.dark;
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
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Raleway&display=swap");

.main {
  font-family: "Raleway", sans-serif;
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
