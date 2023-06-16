<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink :to="{ name: 'home' }" class="navbar-brand">PonyRacer</RouterLink>
      <button type="button" class="navbar-toggler" @click="toggleNavbar()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbar" class="navbar-collapse" :class="{ collapse: navbarCollapsed }">
        <ul class="navbar-nav me-auto">
          <!--
          <li class="nav-item">
            <RouterLink :to="{ name: 'register' }" class="nav-link">Register</RouterLink>
          </li>
          -->
          <li class="nav-item">
            <RouterLink :to="{ name: 'races' }" class="nav-link">Races</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const navbarCollapsed = ref(true);

function toggleNavbar() {
  navbarCollapsed.value = !navbarCollapsed.value;
  return navbarCollapsed;
}
</script>

<style></style>
