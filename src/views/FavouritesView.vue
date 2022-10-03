<script >
import { mapWritableState } from 'pinia';
import { favouriteList } from '../stores/favourites';
import Card from '../components/Card.vue';
export default {
    components: { Card },
    computed:{
    ...mapWritableState(favouriteList, ['usersInFav'])
    }
}
    </script>
    
    <template>
        <div class="border-top border-dark"></div>
        
        <div class=" w-100 row mt-2">
        <Card v-for='user in usersInFav' :key='user.id' :user="user" ></Card>
    
        </div>
    </template>
    <style scoped>
    </style>