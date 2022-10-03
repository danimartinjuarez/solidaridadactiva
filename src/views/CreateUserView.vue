<template>
    <div id="userForm" :class="{
      'bg-info border-info': user.activityType === 'baby',
      'bg-warning border-warning': user.activityType === 'senior',
      'bg-secondary border-secondary': user.activityType === 'general',
      'bg-success border-success': user.activityType === 'pets',
    }" class="bg-opacity-10  border m-4">
        <form @submit.prevent="sendForm()" >
                  <div class="container">
                    <div class="row">
                        <div class="col-md-6 m-2">
                        <div class="form-group">
                          <label><h4>Titulo: </h4></label>
                          
                          <input
                            v-model="user.title"
                            type="text"
                            :class="{ 'is-invalid': process && invalidTitle }"
                            class="form-control-lg m-4"
                            @focus="resetEstado"
                            placeholder="Aqui el titulo"
                          />
                         
                        </div>
                      </div>
                      <div class="col-md-6 m-2">
                        <div class="form-group">
                          <label><h4>Nombre: </h4></label>
                          <input
                            ref="name"
                            v-model="user.name"
                            type="text"
                            class="form-control-lg m-4"
                            :class="{ 'is-invalid': process && invalidName }"
                            @focus="resetEstado"
                            @keypress="resetEstado"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 m-2">
                        <div class="form-group">
                          <label><h4>Contacto:</h4></label>
                          <input
                            v-model="user.contact"
                            type="text"
                            :class="{ 'is-invalid': process && invalidContact }"
                            class="form-control-lg m-4"
                            @focus="resetEstado"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label><h4>Localizacion:</h4></label>
                          <input
                            type="text"
                            v-model="user.location"
                            :class="{
                              'is-invalid': process && invalidLocation,
                            }"
                            class="form-control-lg m-4"
                            @focus="resetEstado"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 m-2">
                        <div class="form-group">
                          <label><h4>Tipo de actividad:</h4></label>
                          <select
                            v-model="user.activityType"
                            :class="{
                              'is-invalid': process && invalidActivityType,
                            }"
                            class="form-control-lg m-4"
                            @focus="resetEstado"
                          >
                          <option value="baby" >Para Peques</option>
                          <option value="senior">Para Senior</option>
                          <option selected value="general" >Para Todos</option>
                          <option value="pets">Para Mascotas</option>
</select>
                        </div>
                      </div>
                      
                      
                      <div class="col-md-8 m-2">
                        <div class="form-group">
                          <label><h4>Necesito:</h4></label>
                          <textarea
                          rows="6" 
                            v-model="user.whatLike"
                            :class="{
                              'is-invalid': process && invalidWhatLike,
                            }"
                            class="form-control-lg w-100 m-4"
                            @focus="resetEstado"
                          />
                        </div>
                      </div>
                      <div class="col-md-8 m-2">
                        <div class="form-group">
                          <label><h4>Ofrezco:</h4></label>
                          <textarea
                            v-model="user.whatOffer"
                            rows="6" 
                            :class="{
                              'is-invalid': process && invalidWhatOffer,
                            }"
                            class="form-control-lg w-100 m-4"
                            @focus="resetEstado"
                          />
                        </div>
                      </div>
                      
                      <div class="col-md-8 m-2">
                        <div class="form-group">
                          <label><h4>Foto:</h4></label>
                          <input
                            v-model="user.photo"
                            type="text"
                            :class="{ 'is-invalid': process && invalidphoto }"
                            class="form-control-lg m-4"
                            @focus="resetEstado"
                          />
                          <br/>
                          <img :src="user.photo" class="m-4 img-fluid w-50" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div
                          v-if="error && process"
                          class="alert alert-danger"
                          role="alert"
                        >
                          Debes rellenar todos los campos!
                        </div>
                        <div
                          v-if="correcto"
                          class="alert alert-success"
                          role="alert"
                        >
                          Ha sido creado correctamente!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-end">
                    
                      <div class="col-md-4">
                        <div class="form-group">
                          <button class="btn border border-danger  ">
                            Crear
                          </button>
                          <button
                      type="button"
                      class="btn border border-dark m-2"
                      
                    >
                      Close
                    </button>
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
                photo: '',
                whatOffer: '',
                whatLike: '',
                location: '',
                contact: '',
                activityType: '',
                title: ''
            }
        }
    },

    methods: {
        sendForm() {
            this.process = true;
            this.resetEstado();

            // Comprobamos la presencia de errores
            if (this.invalidName || this.invalidContact || this.invalidActivityType || this.invalidLocation || this.invalidphoto || this.invalidWhatLike || this.invalidWhatOffer || this.invalidTitle) {
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
        async postUser(user) {
            try {
                const response = await fetch('http://127.0.0.1:8080/api/v1/users/createUser', {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: { 'Content-type': 'application/json; charset=UTF-8' },
                });

                const usuarioCreado = await response.json();
                this.usuarios = [...this.usuarios, usuarioCreado];
            } catch (error) {
                console.error(error);
            }
            window.location.href = "/";
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
            return  this.user.activityType.length < 1;
        },
        invalidLocation() {
            return   this.user.location.length < 1;
        },
        invalidphoto() {
            return  this.user.photo.length < 1;
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

<style>
#userForm {
    min-width: 90%;
}
</style>