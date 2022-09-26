<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';
import footerVue from './components/footer.vue';

</script>

<template><div class="m-0 row justify-content-center app " style="--bs-gutter-x:0;">
 <Header></Header>
  <RouterView />
  <footerVue></footerVue>
  </div>
</template>

<style scoped>
.app{
    background: linear-gradient(to right,rgba(70, 70, 70, 0.875),rgba(70, 70, 70, 0.264));
    min-height: 100vh;
    min-width: 100vw;
  }
</style>
