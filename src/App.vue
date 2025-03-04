<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Analytics />

  </div>
</template>

<script>
export default {
  name: 'App'
}
import { Analytics } from '@vercel/analytics/vue';

</script>
