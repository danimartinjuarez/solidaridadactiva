<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footerVue from './components/footer.vue';
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';

</script>

<template><div class="h-100 w-100">
<Header></Header>
<NavBar></NavBar>
<RouterView />
  
  </div>
</template>

<style scoped>

</style>
