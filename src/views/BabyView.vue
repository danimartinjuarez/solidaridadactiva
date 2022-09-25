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
                for (var i = 0; i < data.length; i++) {
                    if (data[i].activityType === "baby") {
                        this.users.push(data[i]);
                    }
                }
                
            });
    },
    components: { Card, MenuFilter }
}
</script>

<template>
    <MenuFilter></MenuFilter>
    <div class=" home row row-cols-1 row-cols-md-3 m-5">
        <Card v-for="user in users" :key='user.id' :user="user"></Card>

    </div>
</template>
<style scoped>
.home
{
    max-width: 95vw;
}
</style>
