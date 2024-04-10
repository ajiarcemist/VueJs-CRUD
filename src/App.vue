<template>
  <div>
    <div class="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div class="border p-4 rounded">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/todolist" class="nav-link">To Do List</RouterLink>
          </li>
        </ul>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
.border {
  border: 1px solid #dee2e6;
}

.rounded {
  border-radius: 0.25rem;
}
.container {
  width: 600px;
}
</style>
