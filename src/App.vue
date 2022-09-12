<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';
import footerVue from './components/footer.vue';
</script>

<template><div>
 <Header></Header>
  <RouterView />
  <footerVue></footerVue>
  </div>
</template>

<style scoped>
</style>
