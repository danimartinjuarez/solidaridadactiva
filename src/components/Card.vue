<template >

    <div v-if="user.activityType ==='baby'"
        class="bg-info p-2 border border-info text-dark bg-opacity-10 m-2 col-md-5 mx-auto">
        <img class=" card-img-top img-fluid " :src=user.photo alt="Card image cap">
        <div class="card-body ">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>
            <h6 class="card-title">Que necesita:</h6>
            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>


        </div>
        <div class="card-footer d-flex justify-content-around m-3">

            <InterestingButton></InterestingButton>
            <button class="btn border-danger m-3" @click.prevent="deleteUser(user)">🗑️ Borrar</button>
            <button class="btn border-warning m-3" @click.prevent="modifyUser(user)">✏️ Modificar</button>
        </div>

    </div>

    <div v-if="user.activityType ==='senior'"
        class="bg-warning p-2 border border-warning text-dark bg-opacity-10 m-2  col-md-5 mx-auto" id="card">

        <img class="card-img img-fluid " :src=user.photo alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>

            <h6 class="card-title">Que necesita:</h6>

            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>
            <div class="card-footer d-flex justify-content-around m-3">
                <InterestingButton></InterestingButton>
                <button class="btn border-danger m-3" @click.prevent="deleteUser(user)">🗑️ Borrar</button>
                <button class="btn border-warning m-3" @click.prevent="modifyUser(user)">✏️ Modificar</button>

            </div>
        </div>
    </div>

    <div v-if="user.activityType ==='general'"
        class="bg-secondary p-2 text-dark bg-opacity-10 m-2  col-md-5 border border-secondary mx-auto" id="card">

        <img class="card-img img-fluid" :src=user.photo alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>

            <h6 class="card-title">Que necesita:</h6>

            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>
            <div class="card-footer d-flex justify-content-around m-3">
                <InterestingButton></InterestingButton>
                <button class="btn border-danger m-3" @click.prevent="deleteUser(user)">🗑️ Borrar</button>
                <button class="btn border-warning m-3" @click.prevent="modifyUser(user)">✏️ Modificar</button>

            </div>
        </div>
    </div>
    <div v-if="user.activityType ==='pets'"
        class="bg-success p-2 text-dark bg-opacity-10 m-2 col-md-5 border border-success mx-auto " id="card">

        <img class="card-img img-fluid" :src=user.photo alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ user.title }}</h5>
            <hr>
            <p class="card-text">{{ user.whatLike }}</p>
            <h5 class="card-title">{{ user.location }}</h5>
            <div class="card-footer d-flex justify-content-around m-3">

                <InterestingButton></InterestingButton>
                <button class="btn border-danger m-3" @click.prevent="deleteUser(user)">🗑️ Borrar</button>
                <button class="btn border-warning m-3" data-toggle="modal" data-target="#exampleModal">✏️
                    Modificar</button>
                <!-- <RouterLink to="/edituser" :user="edituser">edit</RouterLink> -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modificar</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div id="userForm">
                                    <form @submit.prevent="sendForm">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Nombre</label>
                                                        <input ref="name" :value="user.name" type="text"
                                                            class="form-control"
                                                            :class="{ 'is-invalid': process && invalidName }"
                                                            @focus="resetEstado" @keypress="resetEstado" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Contacto</label>
                                                        <input :value="user.contact" type="text"
                                                            :class="{ 'is-invalid': process && invalidContact }"
                                                            class="form-control" @focus="resetEstado" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Tipo de actividad</label>
                                                        <input :value="user.activityType" type="text"
                                                            :class="{ 'is-invalid': process && invalidActivityType }"
                                                            class="form-control" @focus="resetEstado" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Foto</label>
                                                        <input :value="user.photo" type="text"
                                                            :class="{ 'is-invalid': process && invalidphoto}"
                                                            class="form-control" @focus="resetEstado" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Localizacion</label>
                                                        <input :value="user.location" type="text"
                                                            :class="{ 'is-invalid': process && invalidLocation }"
                                                            class="form-control" @focus="resetEstado" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Necesito:</label>
                                                        <input :value="user.whatLike" type="text"
                                                            :class="{ 'is-invalid': process && invalidWhatLike }"
                                                            class="form-control" @focus="resetEstado" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Ofrezco:</label>
                                                        <input :value="user.whatOffer" type="text"
                                                            :class="{ 'is-invalid': process && invalidWhatOffer }"
                                                            class="form-control" @focus="resetEstado" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Titulo</label>
                                                        <input :value="user.title" type="text"
                                                            :class="{ 'is-invalid': process && invalidTitle }"
                                                            class="form-control" @focus="resetEstado" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <button class="btn btn-primary">Añadir Usuario</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div v-if="error && process" class="alert alert-danger"
                                                        role="alert">
                                                        Debes rellenar todos los campos!
                                                    </div>
                                                    <div v-if="correcto" class="alert alert-success" role="alert">
                                                        El user ha sido agregada correctamente!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import InterestingButton from './InterestingButton.vue';
import ActivityView from '../views/Activity.vue';
export default {
    data() {
        return {
            process: false,
            correcto: false,
            error: false,

        }
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
            const confirmDialog = confirm("¿Quiere borrar a este usuario? " + this.user.name);
            if (confirmDialog == true) {
                try {
                    await fetch("http://127.0.0.1:8080/api/v1/users/delete/" + this.user.id, {
                        method: "DELETE"
                    });


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
            if (this.invalidName || this.invalidContact || this.invalidActivityType || this.invalidLocation || this.invalidphoto || this.invalidWhatLike || this.invalidWhatOffer || this.invalidTitle) {
                this.error = true;
                return;
            }
            this.putUser(this.user);
            this.$refs.name.focus();
            this.error = false;
            this.correcto = true;
            this.process = false;
            // Restablecemos el valor de la variables
            this.user = {
                name: '',
                photo: '',
                whatOffer: '',
                whatLike: '',
                location: '',
                contact: '',
                activityType: '',
                title: ''
            }
        },
        resetEstado() {
            this.correcto = false;
            this.error = false;
        },
        async putUser(user) {
            try {
                const response = await fetch('http://127.0.0.1:8080/api/v1/users/update' + this.user.id, {
                    method: 'PUT',
                    body: JSON.stringify(user),
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                });

                const usuarioCreado = await response.json();
                this.usuarios = [...this.usuarios, usuarioCreado];
            } catch (error) {
                console.error(error);
            }
            window.location.reload();
        },

    },
    computed: {
        invalidName() {
            return this.user.name.length < 1;
        },
        invalidContact() {
            return this.user.contact.length < 1;
        },
        invalidActivityType() {
            return this.user.activityType.length < 1;
        },
        invalidLocation() {
            return this.user.location.length < 1;
        },
        invalidphoto() {
            return this.user.photo.length < 1;
        },
        invalidWhatLike() {
            return this.user.whatLike.length < 1;
        },
        invalidWhatOffer() {
            return this.user.whatOffer.length < 1;
        },
        invalidTitle() {
            return this.user.title.length < 1;
        }
    },


}
</script>
<style scoped>

</style>