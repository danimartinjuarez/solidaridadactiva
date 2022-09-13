<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';
import footerVue from './components/footer.vue';
</script>

<template><div class="m-0 row justify-content-center " style="--bs-gutter-x:0;">
 <Header></Header>
  <RouterView />
  <footerVue></footerVue>
  </div>
</template>

<style scoped>
</style>
