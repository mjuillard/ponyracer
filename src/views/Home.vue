<template>
  <div class="text-center" style="margin-top: 100px">
    <div>
      <h1>Ponyracer <small>Always a pleasure to bet on ponies</small></h1>
    </div>

    <div>
      <RouterLink class="btn btn-primary" :to="{ name: 'login' }">Login</RouterLink>
    </div>
    <p></p>
    <div>
      <RouterLink class="btn btn-primary" :to="{ name: 'register' }">Register</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
