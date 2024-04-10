<template>
  <div class="background-gradient d-flex justify-content-center align-items-center min-vh-100">
    <div class="custom-container">
      <ul class="nav justify-content-center">
        <li class="nav-item mx-2">
          <RouterLink to="/" class="nav-link-custom">Home</RouterLink>
        </li>
        <li class="nav-item mx-2">
          <RouterLink to="/about" class="nav-link-custom">About</RouterLink>
        </li>
        <li class="nav-item mx-2">
          <RouterLink to="/todolist" class="nav-link-custom">To Do List</RouterLink>
        </li>
      </ul>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
.background-gradient {
  background-image: url('../src/assets/gradient-ungu.jpg');
  background-size: cover;
  background-position: center;
}

.custom-border {
  border: 1px solid #ba55d3;
}

.custom-rounded {
  border-radius: 0.25rem;
}
.custom-container {
  width: 600px;
  border: 1px solid #ff69b4;
}

.nav-link-custom {
  color: #ffb6c1;
  text-decoration: none;
}

.nav-link-custom:hover {
  color: #ff69b4;
}

.btn-primary {
  background-color: #ff69b4;
  border-color: #ff69b4;
}

.btn-primary:hover {
  background-color: #ffb6c1;
  border-color: #ffb6c1;
}
</style>
