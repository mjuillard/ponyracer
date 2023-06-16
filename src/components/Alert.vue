<template>
  <div class="alert" :class="alertClasses">
    <slot></slot>
    <button v-if="props.dismissible" type="button" class="btn-close" aria-label="Close" @click="dismiss()"></button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ dismissible: boolean; variant: string }>();

const emit = defineEmits<{ dismissed: [boolean] }>();
function dismiss() {
  emit('dismissed', true);
}

defineSlots<{
  default: (props: Record<string, never>) => void;
}>();

const alertClasses = computed(() => 'alert alert-' + props.variant + (props.dismissible ? ' alert-dismissible' : ''));
</script>

<style></style>
