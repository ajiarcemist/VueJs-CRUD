<template>
  <div class="container text-center">
    <h2>ini Halaman To Do List</h2>
    <form @submit.prevent="addTodo" class="custom-form">
      <div class="input-wrapper">
        <input
          type="text"
          v-model="newTodo"
          placeholder="add new list..."
          class="rounded-pill form-control"
        />
        <button type="submit" class="btn btn-primary rounded-pill">Add</button>
      </div>
    </form>
    <ul class="list-unstyled">
      <li
        v-for="(list, index) in todoStore.todoList"
        :key="list.name"
        :class="{ 'bg-warning-subtle': !list.isDone, 'bg-success': list.isDone }"
        class="border rounded-3 text-start mb-2 p-2 d-flex justify-content-between align-items-center"
      >
        <span>{{ list.name }}</span>
        <div>
          <button
            type="button"
            class="btn btn-sm"
            :class="{ 'btn-success': !list.isDone, 'btn-warning': list.isDone }"
            @click="toggleTodoStatus(index)"
          >
            {{ list.isDone ? 'Set as Undone' : 'Set as Done' }}
          </button>
          <!-- Use v-if to conditionally render the delete button -->
          <button type="button" class="mx-3 btn btn-sm btn-danger" @click="hapusTodoList(index)">
            Hapus
          </button>
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
  },
  methods: {
    addTodo() {
      this.todoStore.addTodo({ name: this.newTodo, isDone: false })
      this.newTodo = ''
    },
    toggleTodoStatus(index) {
      this.todoStore.toggleTodoStatus(index)
    },
    hapusTodoList(index) {
      this.todoStore.hapusTodoList(index)
    }
  }
}
</script>

<style scoped>
/* Add your scoped styles here */

.custom-form {
  padding: 15px;

  position: relative;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding-right: 50px; /* Adjust padding to accommodate the button */
  box-sizing: border-box; /* Ensure padding doesn't affect width */
}

.input-wrapper button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 100px;
}
</style>
