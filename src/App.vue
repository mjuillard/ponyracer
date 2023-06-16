<template>
  <Navbar />
  <main class="container" style="margin-top: 70px">
    <!--<h1>Ponyracer</h1>-->

    <RouterView v-slot="{ Component }">
      <Alert v-if="error" @dismissed="error = false" :dismissible="dismissible" variant="danger"> An error occurred while loading. </Alert>
      <Suspense v-else timeout="0">
        <component :is="Component" />
        <template #fallback>Loading...</template>
      </Suspense>
    </RouterView>
  </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { onErrorCaptured, ref } from 'vue';

const dismissible = true;
const error = ref(false);
onErrorCaptured((e: unknown) => {
  console.warn(e);
  error.value = true;
  return false;
});
</script>

<style></style>
