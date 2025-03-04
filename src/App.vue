<template>
  <Analytics />
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
// Import Analytics at the top
import { Analytics } from '@vercel/analytics/vue';

export default {
  name: 'App',
  components: {
    Analytics // Register the Analytics component here
  }
}
</script>
