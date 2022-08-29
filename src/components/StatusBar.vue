<template>
  <div class="status-bar" v-if="isAuthenticated">
    <p>Done</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "status-bar",

  data() {
    return {};
  },
  computed: { ...mapGetters(["doneTodos", "isAuthenticated"]) },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
* ProgressBar.vue .progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}

* StatusBar.vue .status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>