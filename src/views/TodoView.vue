<template>
  <div class="container text-center">
    <h2 class="text-white">Target Kamu</h2>
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
    <!-- selesai input form -->
    <div class="container">
      <div class="d-flex justify-content-evenly mb-3">
        <div class="">
          <button @click="show = 'all'" type="button" class="btn-custom-show rounded-4">
            Show All
          </button>
        </div>
        <div class="">
          <button @click="show = 'done only'" type="button" class="btn-custom-done rounded-4">
            Done Only
          </button>
        </div>
        <div class="">
          <button @click="show = 'undone only'" type="button" class="btn-custom-undone rounded-4">
            Undone Only
          </button>
        </div>
      </div>
    </div>
    <!-- list todo -->
    <div v-if="show == 'all'"><listTodo statusTodo="showAll" /></div>
    <div v-if="show == 'done only'"><listTodo statusTodo="doneOnly" /></div>
    <div v-if="show == 'undone only'"><listTodo statusTodo="undoneOnly" /></div>

    <!-- akhir list todo -->
  </div>
</template>
<script>
import { useTodoStore } from '../stores/todoStore'
import listTodo from '../components/listTodo.vue'

export default {
  components: {
    listTodo
  },
  setup() {
    const todoStore = useTodoStore()

    return { todoStore }
  },
  data() {
    return {
      newTodo: '',
      show: 'all'
    }
  },
  methods: {
    addTodo() {
      this.todoStore.addTodo({ name: this.newTodo, isDone: false })
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>
.custom-form {
  padding: 15px;
  position: relative;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding-right: 50px;
  box-sizing: border-box;
  border: 1px solid #ba55d3;
}

.input-wrapper button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 100px;
  background-color: #ff69b4;
  border-color: #ff69b4;
}

.btn-custom-show {
  background-color: #ffb6c1;
  border-color: #ffb6c1;
}

.btn-custom-done {
  background-color: #9370db;
  border-color: #9370db;
}

.btn-custom-undone {
  background-color: #ffc0cb;
  border-color: #ffc0cb;
}
h2 {
  font-family: 'Source Code Pro', monospace;
  font-weight: 600;
  font-style: normal;
  font-optical-sizing: auto;
}
</style>
