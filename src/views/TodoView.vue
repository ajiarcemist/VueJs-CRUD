<template>
  <div class="container text-center">
    <h2>ini Halaman To Do List</h2>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" placeholder="add new todo..." />
      <input type="submit" value="add" />
    </form>
    <ul class="list-unstyled">
      <li
        v-for="(list, index) in todoStore.todoList"
        :key="list.name"
        class="border rounded-3 text-start mb-2 p-2 d-flex justify-content-between align-items-center"
      >
        <span>{{ list.name }}</span>
        <div>
          <button
            type="button"
            class="btn btn-sm btn-success me-2"
            @click="todoStore.setAsDone(index)"
          >
            set as Done
          </button>
          <button type="button" class="btn btn-sm btn-danger">Hapus</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodoStore } from '../stores/todoStore'
export default {
  setup() {
    const todoStore = useTodoStore()

    return { todoStore }
  },
  data() {
    return {
      newTodo: ''
    }
  }
}
</script>

<style scoped></style>
