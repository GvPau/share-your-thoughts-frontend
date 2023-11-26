<template>
  <v-navigation-drawer
    color="grey-lighten-1"
    theme="dark"
    dark
    :value="drawer"
    @input="$emit('update:drawer', $event)"
    temporary
  >
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      items: [{ title: "Posts", icon: "mdi-domain", color: "red", to: "/" }],
    };
  },
  methods: {
    closeDrawer() {
      this.$emit("update:drawer", false);
    },
    // Add your other methods here
  },
  watch: {
    drawer() {
      // Add any watch logic here if needed
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles specific to the navigation drawer */
</style>
