<template>
    <ul class="list-group list-group-horizontal ">
        <RouterLink to="/Baby" class="w-20 m-2">
            <li class="list-group-item  text-center h5 border-info text-info">Para niños</li>
        </RouterLink>
        <RouterLink to="/Senior" class="w-20 m-2">
            <li class="list-group-item  text-center h5 border-warning text-warning">Para senior</li>
        </RouterLink>
        <RouterLink to="/General" class="w-20 m-2">
            <li class="list-group-item  text-center border-secondary text-secondary h5">Otros</li>
        </RouterLink>
        <RouterLink to="/Pets" class="w-20 m-2">
            <li class="list-group-item  text-center h5 border-success text-success">Para mascotas</li>
        </RouterLink>
        <RouterLink to="/categories" class="w-20 m-2">
            <li class="list-group-item text-center h5">Todos</li>
        </RouterLink>
    </ul>
</template>
<style scoped>

            .w-20{
                width: 20vw;
                margin-left: 2vw;
                margin-right: 2vw;
            }
</style>