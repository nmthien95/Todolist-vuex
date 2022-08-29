<template>
  <p class="Progress-bar" v-if="isAuthenticated">Progress:{{ progress }} %</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "progress-bar",
  computed: {
    ...mapGetters(["progress", "isAuthenticated"]),
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>