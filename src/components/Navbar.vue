<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="isAuthenticated">
        Total todos: {{ todos.length }}
        <button @click="TOFGGLE_AUTH">Logout</button>
      </li>
      <li v-else><button @click="TOFGGLE_AUTH">Login</button></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "navbar-menu",
  computed: {
    ...mapGetters(["isAuthenticated", "todos"]),
  },
  methods: mapMutations(["TOFGGLE_AUTH"]),

  mounted() {},
};
</script>

<style scoped>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>