<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footerVue from './components/footer.vue';
import Header from './components/Header.vue';

</script>

<template><div class="h-100 w-100">
<Header></Header>
<RouterView />
  
  </div>
</template>

<style scoped>

</style>
