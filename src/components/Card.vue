<template >
    <RouterLink :user="user" v-if="user.activityType ==='baby'"  to="/activity"  class=" bg-info p-2 text-dark bg-opacity-50 m-2 " id="card" >

    <div  class="d-flex"  >
        <img class="w-50" :src=user.photo alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>
            <h6 class="card-title">Que necesita:</h6>
            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>

        
        </div>
    </div>
    <InterestingButton></InterestingButton></RouterLink>
    <div v-if="user.activityType ==='senior'" class="bg-warning p-2 text-dark bg-opacity-50 m-2 d-flex" id="card">

        <img class="w-50" :src=user.photo alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>

            <h6 class="card-title">Que necesita:</h6>

            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>

        <InterestingButton></InterestingButton>
        </div>
    </div>

    <div v-if="user.activityType ==='general'" class="bg-secondary p-2 text-dark bg-opacity-50 m-2 d-flex" id="card">

        <img class="w-50" :src=user.photo alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>

            <h6 class="card-title">Que necesita:</h6>

            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>

        <InterestingButton></InterestingButton>
        </div>
    </div>
    <div v-if="user.activityType ==='pets'" class="bg-success p-2 text-dark bg-opacity-50 m-2 d-flex" id="card">

        <img class="w-50" :src=user.photo alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>
            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>

           <InterestingButton></InterestingButton>
        </div>
    </div>

    
</template>

<script>
import InterestingButton from './InterestingButton.vue';
import ActivityView from '../views/Activity.vue';
export default {
    props: {
        user: Object,
    },
    components: { InterestingButton, ActivityView }
}
</script>
<style scoped>
#card
{
    width: 45%;
}
</style>