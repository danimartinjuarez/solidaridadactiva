<script >
import Card from '../components/Card.vue';
import MenuFilter from '../components/MenuFilter.vue';
export default {
    data() {
        return {
            users: []
        };
    },
    created() {
        fetch("http://127.0.0.1:8080/api/v1/users")
            .then(response => response.json())
            .then(data => {
                this.users = data;
            });
    },
    components: { Card, MenuFilter }
}
</script>

<template>
    <div class="border-top border-dark"></div>
    <MenuFilter ></MenuFilter>
    <div class=" w-100 row mt-2">
    <Card v-for='user in users' :key='user.id' :user="user" ></Card>

    </div>
</template>
<style scoped>
</style>
