/// <reference types="vite/client" />

import type Alert from '@/components/Alert.vue';
import type { RouterView, RouterLink } from 'vue-router';

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    Alert: typeof Alert;
    RouterLink: typeof RouterLink;
    RouterView: typeof RouterView;
  }
}
