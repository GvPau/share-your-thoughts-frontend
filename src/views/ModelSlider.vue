<template>
  <v-dialog
    :value="dialog"
    max-width="1000px"
  >
    <v-card :class="{ 'selected-card': isSelected }" class="modal-card">
      <v-card-title class="headline">Create a Post</v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="option in currentOptions" :key="option.id" cols="4">
            <v-btn
              @click="selectOption(option)"
              class="option-btn"
              :class="{
                'selected-option': isSelected && isSelectedStep(option),
              }"
            >
              <v-icon>{{ option.icon }}</v-icon>
              <div>{{ option.name }}</div>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="modal-actions">
        <v-btn @click="prevStep" v-if="currentStep > 0">Previous</v-btn>
        <v-btn
          @click="nextStep"
          :disabled="isNextButtonDisabled"
          v-if="currentStep !== steps.length - 1"
          >Next</v-btn
        >
        <v-btn
          @click="saveData"
          :disabled="isSaveButtonDisabled"
          v-if="currentStep === steps.length - 1"
          >Save</v-btn
        >
        <v-btn @click="closeModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
  },
  data() {
    return {
      localDialog: this.dialog,
      isSelected: false,
      selectedSteps: [],
      currentStep: 0,
      steps: [
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
      ],
    };
  },
  computed: {
    currentOptions() {
      return this.steps[this.currentStep].options;
    },
    isNextButtonDisabled() {
      return !this.selectedSteps[this.currentStep];
    },
    isSaveButtonDisabled() {
      return !this.selectedSteps[this.steps.length - 1];
    },
  },
  methods: {
    openModal() {
      this.localDialog = true;
    },
    closeModal() {
      this.localDialog = false;
      this.currentStep = 0;
    },
    selectOption(option) {
      this.selectedSteps.splice(this.currentStep, 1, option);
    },
    nextStep() {
      if (!this.isNextButtonDisabled) {
        this.currentStep++;
      }
    },
    prevStep() {
      this.currentStep--;
    },
    saveData() {
      console.log("Selected Steps:", this.selectedSteps);
      this.closeModal();
    },
  },
  watch: {
    dialog(newVal) {
      this.localDialog = newVal;
    },
    localDialog(newVal) {
      this.$emit("update:dialog", newVal);
    },
  },
};
</script>

<style scoped>
.modal-card {
  min-height: 400px; /* Adjust the height as needed */
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
