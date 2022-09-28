<template >

        <div  v-if="user.activityType ==='baby'" 
        class=" bg-info p-2 text-dark bg-opacity-50 m-2 col-md-5 " id="card">
            <img class="w-50" :src=user.photo alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ user.title }}</h5>
                <hr>
                <h6 class="card-title">Que necesita:</h6>
                <p class="card-text">{{ user.whatLike }}</p>
                <h5 class="card-title">{{ user.location }}</h5>


            </div>  
        <InterestingButton></InterestingButton> 
        <button class="btn btn-danger ml-2" @click="deleteUser(user)">🗑️ Borrar</button>
        </div>
      
       

    <div v-if="user.activityType ==='senior'" class="bg-warning p-2 text-dark bg-opacity-50 m-2 d-flex col-md-5 "
        id="card">

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

    <div v-if="user.activityType ==='general'" class="bg-secondary p-2 text-dark bg-opacity-50 m-2 d-flex col-md-5 "
        id="card">

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
    <div v-if="user.activityType ==='pets'" class="bg-success p-2 text-dark bg-opacity-50 m-2 d-flex col-md-5 "
        id="card">

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
    components: { InterestingButton, ActivityView },
  
    methods: {
        deleteUser(){
            this.deleteUsuario(user);
        },

        async deleteUsuario(user) {
            try {
                await fetch(`http://127.0.0.1:8080/api/v1/users/delete/${user.id}`, {
                    method: "DELETE"
                });

                this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
<style scoped>
</style>