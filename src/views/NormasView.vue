<template>
    <div class="m-4 p-5 bg-white  rounded textNormas">
     <NormasTextVue></NormasTextVue>
    </div>
        <ButtonBackVue></ButtonBackVue>

</template>
<script setup>
import NormasTextVue from '../components/NormasText.vue'
    import ButtonBackVue from '../components/ButtonBack.vue';
import ButtonBack from '../components/ButtonBack.vue';
</script>
<style>
@media (min-width: 1024px)
        {
            .NormasView
            {
                min-height: 100vh;
                display: flex;
                align-items: center;
            }
        }
    
        .textNormas
        {
            border: 4px solid orange;
            width: 90vw;
            max-height: 57vh;
            overflow: auto;
        }
</style>