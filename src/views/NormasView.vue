<template>
    <div class="m-4 p-5 bg-white  rounded textNormas">
     <NormasTextVue></NormasTextVue>
    </div>
</template>
<script setup>
    import NormasTextVue from '../components/NormasText.vue'
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
            width: 90%;
            max-height: 30vw;
            overflow: auto;
        }
</style>