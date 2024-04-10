<template>
  <ul class="list-unstyled">
    <li
      v-for="(list, index) in todos"
      :key="list.name"
      :class="{ 'todo-item-undone': !list.isDone, 'todo-item-done': list.isDone }"
      class="todo-border rounded-3 text-start mb-2 p-2 d-flex justify-content-between align-items-center"
    >
      <span>{{ list.name }}</span>
      <div>
        <button
          type="button"
          class="btn btn-sm"
          :class="{ 'btn-custom-done': !list.isDone, 'btn-custom-undone': list.isDone }"
          @click="toggleTodoStatus(index)"
        >
          {{ list.isDone ? 'Set as Undone' : 'Set as Done' }}
        </button>

        <button
          type="button"
          class="mx-3 btn btn-sm btn-custom-delete"
          @click="hapusTodoList(index)"
        >
          Hapus
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useTodoStore } from '../stores/todoStore'

export default {
  props: {
    statusTodo: String
  },
  setup(props) {
    const todoStore = useTodoStore()

    const todos = computed(() => {
      if (props.statusTodo === 'showAll') {
        return todoStore.showAll
      } else if (props.statusTodo === 'doneOnly') {
        return todoStore.doneOnly
      } else if (props.statusTodo === 'undoneOnly') {
        return todoStore.undoneOnly
      } else {
        return []
      }
    })

    return { todos, todoStore }
  },
  methods: {
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
.todo-item-undone {
  background-color: #ffc0cb;
}

.todo-item-done {
  background-color: #9370db;
}

.todo-border {
  border-color: #daa520;
}

.btn-custom-done {
  background-color: #ff69b4;
  border-color: #ff69b4;
}

.btn-custom-undone {
  background-color: #ffb6c1;
  border-color: #ffb6c1;
}

.btn-custom-delete {
  background-color: #dc143c;
  border-color: #dc143c;
}
</style>
