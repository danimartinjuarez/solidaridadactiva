<template>
    <div id="userForm">
        <form @submit.prevent="sendForm">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Nombre</label>
                            <input ref="name" v-model="user.name" type="text" class="form-control"
                                :class="{ 'is-invalid': process && invalidName }" @focus="resetEstado"
                                @keypress="resetEstado" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Contacto</label>
                            <input v-model="user.email" type="text"
                                :class="{ 'is-invalid': process && invalidEmail }" class="form-control"
                                @focus="resetEstado" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Tipo de actividad</label>
                            <input v-model="user.activityType" type="text" :class="{ 'is-invalid': process && invalidActivityType }" class="form-control"
                                @focus="resetEstado" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Foto</label>
                            <input v-model="user.photo" type="text" :class="{ 'is-invalid': process && invalidphoto}"
                                class="form-control" @focus="resetEstado" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Localizacion</label>
                            <input v-model="user.location" type="text" :class="{ 'is-invalid': process && invalidLocation }"
                                class="form-control" @focus="resetEstado" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Necesito:</label>
                            <input v-model="user.whatLike" type="text" :class="{ 'is-invalid': process && invalidWhatLike }"
                                class="form-control" @focus="resetEstado" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Ofrezco:</label>
                            <input v-model="user.whatOffer" type="text" :class="{ 'is-invalid': process && invalidWhatOffer }"
                                class="form-control" @focus="resetEstado" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Titulo</label>
                            <input v-model="user.title" type="text" :class="{ 'is-invalid': process && invalidTitle }"
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
                        <div v-if="error && process" class="alert alert-danger" role="alert">
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
</template>

<script>
export default {
    name: "userForm",
    data() {
        return {
            process: false,
            correcto: false,
            error: false,
            user: {
                name: '',
                email: '',
                activityType: '',
                location: '',
                photo: '',
                whatLike: '',
                whatOffer: '',
                title: '',
            }
        }
    },
    methods: {
        sendForm() {
            this.process = true;
            this.resetEstado();

            // Comprobamos la presencia de errores
            if (this.invalidName || this.invalidEmail || this.invalidActivityType || this.invalidLocation || this.invalidphoto || this.invalidWhatLike || this.invalidWhatOffer || this.invalidTitle) {
                this.error = true;
                return;
            }
            this.postUser(this.user);
            this.$refs.name.focus();
            this.error = false;
            this.correcto = true;
            this.process = false;
            // Restablecemos el valor de la variables
            this.user = {
                name: '',
                email: '',
                activityType: '',
                location: '',
                photo: '',
                whatLike: '',
                whatOffer: '',
                title: '',
            }
        },
        resetEstado() {
            this.correcto = false;
            this.error = false;
        },
        
        
    },
    computed: {
        nameInvalido() {
            return this.user.name.length < 1;
        },
        invalidEmail() {
            return this.user.email.length < 1;
        },
        invalidActivityType(){
            this.user.activityType.length < 1;
        }, 
        invalidLocation() {
            this.user.location.length < 1;
        },
        invalidphoto() {
            this.user.photo.length < 1;
        },
        invalidWhatLike() {
            this.user.whatLike.length < 1;
        },
        invalidWhatOffer() {
            this.user.whatOffer.length < 1;
        },
        invalidTitle() {
            this.user.title.length < 1;
        }
    },
    
        
    
    
}
</script>

<style>
    
</style>