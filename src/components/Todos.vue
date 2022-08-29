<template>
  <div class="todo-list">
    <TodoForm />
    <ul v-if="isAuthenticated">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="todo.completed ? 'completed' : ''"
      >
        {{ todo.title }}
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="MARK_COMPLETE(todo.id)"
        />
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <p v-else>Not authorised</p>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import TodoForm from "./TodoForm.vue";
export default {
  name: "todo-list",
  created() {
    this.getTodos();
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isAuthenticated", "todos"]),
  },
  methods: {
    ...mapMutations(["MARK_COMPLETE"]),
    ...mapActions(["deleteTodo", "getTodos"]),
  },
  components: { TodoForm },
};
</script>

<style scoped>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}
.todo-list ul li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}
.todo-list li input[type="checkbox"] {
  -ms-transform: scale(2);
  -moz-transform: scale(2);
  -webkit-transform: scale(2);
  -o-transform: scale(2);
  transform: scale(2);
  padding: 10px;
  float: right;
}

.todo-list li button {
  float: right;
  margin-right: 20px;
}

.todo-list li button:hover {
  cursor: pointer;
  background: red;
  color: white;
}

.todo-list li.completed {
  background: rgb(119, 218, 243);
}

form {
  padding: 10px;
}
input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 6px 0;
  border: 0;
}

input[type="submit"] {
  margin: 10px auto;
  padding: 10px;
  border: 0;
  display: block;
}
</style>