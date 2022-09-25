<template>
  <div class="m-4 p-5 bg-white  rounded textNosotros" >
  <NosotrosViewtext></NosotrosViewtext></div>
  <ButtonBackVue></ButtonBackVue>
</template>
<script setup>
import NosotrosViewtext from '../components/NosotrosTextView.vue';
  import ButtonBackVue from '../components/ButtonBack.vue';
</script>
<style>
  .NosotrosView {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

.textNosotros{
  border: 4px solid orange;
  width: 90%;
}
</style>
