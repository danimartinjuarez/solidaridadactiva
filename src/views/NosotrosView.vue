<template>
  <div class="m-4 p-5 bg-white  rounded textNosotros" >
  <NosotrosViewtext></NosotrosViewtext></div>
</template>
<script setup>
  import NosotrosViewtext from '../components/NosotrosTextView.vue';
</script>
<style>
@media (min-width: 1024px) {
  .NosotrosView {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.textNosotros{
  border: 4px solid orange;
  width: 90%;
}
</style>
