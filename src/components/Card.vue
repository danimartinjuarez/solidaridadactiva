<template >
    <div  class="{'bg-info
      p-2
      border border-info
      text-dark
      bg-opacity-10
      m-2
      col-md-5
      mx-auto
    ': v-if=user.activityType === 'baby'}{
      'bg-warning
      p-2
      border border-warning
      text-dark
      bg-opacity-10
      m-2
      col-md-5
      mx-auto'
      : v-if=user.activityType === 'senior'} {
      'bg-secondary
      p-2
      border border-secondary
      text-dark
      bg-opacity-10
      m-2
      col-md-5
      mx-auto'
      : v-if=user.activityType === 'general'} {
      'bg-success
      p-2
      border border-succesbg-success
      text-dark
      bg-opacity-10
      m-2
      col-md-5
      mx-auto'
      : v-if=user.activityType === 'pets'}" >
        <img class="card-img-top img-fluid" :src="user.photo" alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr />
            <h6 class="card-title">Que necesita:</h6>
            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>
        </div>
        <div class="card-footer d-flex justify-content-around m-3">
            <InterestingButton></InterestingButton>
            <button class="btn border-danger m-3" @click.prevent="deleteUser(user)">
                🗑️ Borrar
            </button>
            <button class="btn border-warning m-3" data-toggle="modal" :data-target="'#updateModal' + user.id">
                ✏️ Modificar
            </button>
            <button class="btn border-warning m-3" data-toggle="modal" :data-target="'#viewModal' + user.id">
                ✏️ detalles
            </button>
            <div class="modal fade" :id="'updateModal' + user.id" tabindex="-1" role="dialog"
                aria-labelledby="updateModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="updateModalLabel">
                                Modificar {{ user.title }}
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="userForm">
                                <form @submit.prevent="sendForm()">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Nombre</label>
                                                    <input ref="name" v-model="user.name" type="text"
                                                        class="form-control"
                                                        :class="{ 'is-invalid': process && invalidName }"
                                                        @focus="resetEstado" @keypress="resetEstado" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Contacto</label>
                                                    <input v-model="user.contact" type="text"
                                                        :class="{ 'is-invalid': process && invalidContact }"
                                                        class="form-control" @focus="resetEstado" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Tipo de actividad</label>
                                                    <input v-model="user.activityType" type="text" :class="{
                                                      'is-invalid': process && invalidActivityType,
                                                    }" class="form-control" @focus="resetEstado" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Foto</label>
                                                    <input v-model="user.photo" type="text"
                                                        :class="{ 'is-invalid': process && invalidphoto }"
                                                        class="form-control" @focus="resetEstado" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Localizacion</label>
                                                    <input type="text" v-model="user.location" :class="{
                                                      'is-invalid': process && invalidLocation,
                                                    }" class="form-control" @focus="resetEstado" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Necesito:</label>
                                                    <input v-model="user.whatLike" type="text" :class="{
                                                      'is-invalid': process && invalidWhatLike,
                                                    }" class="form-control" @focus="resetEstado" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Ofrezco:</label>
                                                    <input v-model="user.whatOffer" type="text" :class="{
                                                      'is-invalid': process && invalidWhatOffer,
                                                    }" class="form-control" @focus="resetEstado" />
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label>Titulo</label>
                                                    <input v-model="user.title" type="text"
                                                        :class="{ 'is-invalid': process && invalidTitle }"
                                                        class="form-control" @focus="resetEstado" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div v-if="error && process" class="alert alert-danger" role="alert">
                                                    Debes rellenar todos los campos!
                                                </div>
                                                <div v-if="correcto" class="alert alert-success" role="alert">
                                                    Ha sido modificado correctamente!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <button class="btn btn-primary">
                                                        Añadir Usuario
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade modal-lg" :id="'viewModal' + user.id" tabindex="-1" role="dialog"
                    aria-labelledby="updateModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="updateModalLabel">
                                    {{ user.title }}
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="card" style="width: 48rem">
                                    <img class="card-img-top" :src="user.photo" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{{ user.title }}</h5>
                                        <p class="card-text">{{ user.whatLike }}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            Que ofrece: {{ user.whatOffer }}
                                        </li>
                                        <li class="list-group-item">
                                            Localizacion: {{ user.location }}
                                        </li>
                                        <li class="list-group-item">
                                            Tipo de actividad: {{ user.activityType }}
                                        </li>
                                        <li class="list-group-item">Nombre {{ user.name }}</li>
                                        <li class="list-group-item">
                                            Contacto: {{ user.contact }}
                                        </li>
                                    </ul>
                                    <div class="card-body">
                                        <RouterLink to="/Normas" class="w-20">Normas</RouterLink>  
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <button class="btn btn-primary">Añadir Usuario</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    
    
</template>

<script>
import InterestingButton from "./InterestingButton.vue";
import ActivityView from "../views/Activity.vue";
export default {
    data() {
        return {
            process: false,
            correcto: false,
            error: false,
        };
    },

    props: {
        user: Object,
    },
    components: { InterestingButton, ActivityView },

    methods: {
        deleteUser() {
            this.deleteUser();
        },

        async deleteUser() {
            const confirmDialog = confirm(
                "¿Quiere borrar a este usuario? " + this.user.name
            );
            if (confirmDialog == true) {
                try {
                    await fetch(
                        "http://127.0.0.1:8080/api/v1/users/delete/" + this.user.id,
                        {
                            method: "DELETE",
                        }
                    );
                } catch (error) {
                    console.error(error);
                }
                window.location.reload();
            }
        },
        sendForm() {
            this.process = true;
            this.resetEstado();

            // Comprobamos la presencia de errores
            if (
                this.invalidName ||
                this.invalidContact ||
                this.invalidActivityType ||
                this.invalidLocation ||
                this.invalidphoto ||
                this.invalidWhatLike ||
                this.invalidWhatOffer ||
                this.invalidTitle
            ) {
                this.error = true;
                return;
            }
            this.putUser();
            this.$refs.name.focus();
            this.error = false;
            this.correcto = true;
            this.process = false;
        },
        resetEstado() {
            this.correcto = false;
            this.error = false;
        },
        async putUser() {
            try {
                await fetch(
                    "http://127.0.0.1:8080/api/v1/users/update/" + this.user.id,
                    {
                        method: "PUT",
                        body: JSON.stringify(this.user),
                        headers: { "Content-type": "application/json; charset=UTF-8" },
                    }
                );
            } catch (error) {
                console.error(error);
            }
            window.location.reload();
        },
    },
    computed: {
        invalidName() {
            return this.userUpdate.name.length < 1;
        },
        invalidContact() {
            return this.userUpdate.contact.length < 1;
        },
        invalidActivityType() {
            return this.userUpdate.activityType.length < 1;
        },
        invalidLocation() {
            return this.userUpdate.location.length < 1;
        },
        invalidphoto() {
            return this.userUpdate.photo.length < 1;
        },
        invalidWhatLike() {
            return this.userUpdate.whatLike.length < 1;
        },
        invalidWhatOffer() {
            return this.userUpdate.whatOffer.length < 1;
        },
        invalidTitle() {
            return this.userUpdate.title.length < 1;
        },
    },
};
</script>
<style scoped>

</style>