<template>
   <ul class="list-group list-group-horizontal border-bottom border-dark">
        <RouterLink to="/Nosotros" class="w-20 ">
            <li class="list-group-item list-group-item text-center h5">Sobre Nosotros</li>
        </RouterLink>
        <RouterLink to="/Normas" class="w-20">
            <li class="list-group-item list-group-item text-center h5">Normas de Uso</li>
        </RouterLink>
        <RouterLink to="/Colabora" class="w-20">
            <li class="list-group-item list-group-item text-center h5">Colabora</li>
        </RouterLink>

        <RouterLink to="/categories" class="w-20">
            <li class="list-group-item multicolor text-center h5">Categorias</li>
        </RouterLink>
    </ul>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    li{
        font-size: large;

    }
    .w-20{
                width: 20vw;
                margin-left: 2vw;
                margin-right: 2vw;
            }
</style>