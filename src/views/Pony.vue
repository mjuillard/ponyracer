<template>
  <div @click="clicked()">
    <figure>
      <img :src="imgName" :alt="ponyModel.name" />
      <figcaption>{{ ponyModel.name }}</figcaption>
    </figure>
  </div>
</template>

<script setup lang="ts">
import { PonyModel } from '@/models/PonyModel';

const props = defineProps<{
  ponyModel: PonyModel;
}>();

const emit = defineEmits<{ ponySelected: [PonyModel] }>();

const imgName = '/images/pony-' + props.ponyModel.color.toLowerCase() + '.gif';

function clicked() {
  emit('ponySelected', props.ponyModel);
}
</script>

<style>
figure {
  margin: 3px;
  padding: 3px;
  font-size: 12px;
}

img {
  height: 50px;
}
</style>
