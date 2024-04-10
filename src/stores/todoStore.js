import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [
      { name: 'Belajar HTML', isDone: false },
      { name: 'Belajar CSS', isDone: false },
      { name: 'Belajar Javascript', isDone: false },
      { name: 'Belajar PHP', isDone: false }
    ]
  }),
  actions: {
    addTodo(todo) {
      this.todoList.push(todo)
    },
    toggleTodoStatus(index) {
      this.todoList[index].isDone = !this.todoList[index].isDone
    },
    hapusTodoList(index) {
      this.todoList.splice(index, 1)
    }
  }
})
