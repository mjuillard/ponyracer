<template>
  <div v-for="race in races" :key="race.id">
    <Race :raceModel="race" />
  </div>
</template>

<script setup lang="ts">
import type { RaceModel } from '@/models/RaceModel';
import Race from '../components/Race.vue';
import { ref } from 'vue';
import { useRaceService } from '@/composables/RaceService';

const races = ref<Array<RaceModel> | null>(null);

races.value = await useRaceService().list();
</script>

<style></style>
