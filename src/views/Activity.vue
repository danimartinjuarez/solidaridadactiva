<template >
    <div v-if="user.activityType ==='baby'"  class=" bg-info p-2 text-dark bg-opacity-50 m-2 " id="card" >
        <img class="w-50" :src=user.photo alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>
            <h6 class="card-title">Que necesita:</h6>
            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>
    
    
        </div>
    </div>
    <InterestingButton></InterestingButton>
</template>
<script>
import InterestingButton from '../components/InterestingButton.vue';
export default {
    data() {
        return {
            user: []
        };
    },
    created() {
        fetch("http://127.0.0.1:8080/api/v1/users/")
            .then(response => response.json())
            .then(data => {
                this.user = data;
            });
    },
   
}
</script>
<style >
    
</style>