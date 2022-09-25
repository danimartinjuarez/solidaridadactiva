<template>
    <ul class="list-group list-group-horizontal ">
        <RouterLink to="/Baby" class="w-20 ">
            <li class="list-group-item list-group-item-info text-center h5">Para niños</li>
        </RouterLink>
        <RouterLink to="/Senior" class="w-20">
            <li class="list-group-item list-group-item-warning text-center h5">Para senior</li>
        </RouterLink>
        <RouterLink to="/General" class="w-20">
            <li class="list-group-item list-group-item-secondary text-center h5">Otros</li>
        </RouterLink>
        <RouterLink to="/Pets" class="w-20">
            <li class="list-group-item list-group-item-success text-center h5">Para mascotas</li>
        </RouterLink>
        <RouterLink to="/" class="w-20">
            <li class="list-group-item multicolor text-center h5">Todos</li>
        </RouterLink>
    </ul>
</template>
<style scoped>
.multicolor { 
        background: linear-gradient(to right, rgba(255, 174, 0, 0.54), rgba(225, 0, 255, 0.31),rgba(9, 255, 0, 0.54),rgba(0, 60, 255, 0.54));
           
            }
            .w-20{
                width: 20vw;
                margin-left: 2vw;
                margin-right: 2vw;
            }
</style>