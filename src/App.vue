<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footerVue from './components/footer.vue';
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
<Header></Header>
<NavBar></NavBar>
<RouterView />
  

</template>

<style scoped>

</style>
