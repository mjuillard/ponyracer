<template>
  <h2>{{ raceModel.name }}</h2>
  <p>{{ startTime }}</p>
  <!--

  <ul>
    <li v-for="pony in raceModel.ponies" :key="pony.id">
      <Pony :pony="pony" />
    </li>
  </ul>
  -->

  <div class="row">
    <div class="col" v-for="pony in raceModel.ponies" :key="pony.id">
      <Pony :ponyModel="pony" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RaceModel } from '@/models/RaceModel';
import fromNow from '@/utils/FromNow';
import { computed } from 'vue';
import Pony from '../views/Pony.vue';

const props = defineProps<{ raceModel: RaceModel }>();

const startTime = computed(() => fromNow(props.raceModel.startInstant));
</script>

<style></style>
