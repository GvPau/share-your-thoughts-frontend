<template>
  <div>
    <div class="header">
      <div class="app-name">SHARE YOUR POSTS</div>
      <div class="company">GOODGOOD TRAIN SL</div>
    </div>

    <v-main>
      <div class="main">
        <v-container fluid>
          <v-row dense class="custom-card">
            <v-col v-for="post in posts" :key="post.id" cols="12">
              <v-card :title="post.title" :subtitle="post.author" :text="post.description"></v-card>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" class="new-post">
              <v-btn @click="openModal">Create New Post</v-btn>
            </v-col>
          </v-row>

          <v-dialog v-model="isModalOpen" max-width="1000px">
            <v-card class="modal-card">
              <v-card-title class="headline">Create a Post</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col v-for="option in currentOptions" :key="option.id" cols="4">
                    <v-btn @click="selectOption(option)" class="option-btn">
                      <v-icon>{{ option.icon }}</v-icon>
                      <div>{{ option.name }}</div>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="modal-actions">
                <v-btn @click="prevStep" v-if="currentStep > 0">Previous</v-btn>

                <v-btn @click="saveData" v-if="currentStep === steps.length - 1">Save</v-btn>
                <v-btn @click="closeModal">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-container>
      </div>
    </v-main>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";

export default {
  setup() {
    // Declare reactive variables
    const store = useStore();
    const posts = computed(() => store.getters.posts);
    const isModalOpen = ref(false);
    const selectedSteps = ref([]);
    const steps = [
      {
        options: [
          { id: 1, icon: "mdi-flower", name: "Nature" },
          { id: 2, icon: "mdi-car", name: "Cars" },
          { id: 3, icon: "mdi-music", name: "Music" },
        ],
      },
      {
        options: [
          { id: 1, icon: "mdi-book-open", name: "Book Summary 1" },
          { id: 2, icon: "mdi-book", name: "Book Summary 2" },
          { id: 3, icon: "mdi-book-multiple", name: "Book Summary 3" },
        ],
      },
      {
        options: [
          { id: 1, icon: "mdi-account", name: "Author 1" },
          { id: 2, icon: "mdi-account-circle", name: "Author 2" },
          { id: 3, icon: "mdi-account-multiple", name: "Author 3" },
        ],
      },
    ];
    let currentStep = ref(0);

    const currentOptions = computed(() => {
      const currentStepValue = currentStep.value;
      const currentStepOptions = steps[currentStepValue]
        ? steps[currentStepValue].options
        : [];

      return currentStepOptions;
    });

    // Declare functions
    const closeModal = () => {
      isModalOpen.value = false;
      currentStep.value = 0;
    };

    const selectOption = (option) => {
      console.log("option", option);

      selectedSteps.value = [
        ...selectedSteps.value.slice(0, currentStep.value),
        option,
      ];

      if (currentStep.value !== steps.length - 1) {
        nextStep();
      }
    };

    const nextStep = () => {
      currentStep.value++;
    };

    const prevStep = () => {
      currentStep.value--;
    };

    const saveData = () => {
      closeModal();
    };

    const fetchPosts = async () => {
      await store.dispatch("fetchPosts");
    };

    const openModal = () => {
      isModalOpen.value = true;
    };

    // Lifecycle hook
    onMounted(async () => {
      await fetchPosts();
    });

    // Return reactive variables and functions
    return {
      posts,
      isModalOpen,
      openModal,
      closeModal,
      selectedSteps,
      currentStep,
      steps,
      currentOptions,
      isNextButtonDisabled,
      isSaveButtonDisabled,
      selectOption,
      nextStep,
      prevStep,
      saveData,
    };
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

.custom-card {
  margin: 20px;
}

.modal-card {
  min-height: 400px;
  /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.option-btn {
  width: 100%;
  text-align: center;
}

.modal-actions {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
