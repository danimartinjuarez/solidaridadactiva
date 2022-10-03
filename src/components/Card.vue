<template >
  <div
    class="p-2 border text-dark bg-opacity-10 m-2 col-md-5 mx-auto card"
    :class="{
      'bg-info border-info': user.activityType === 'baby',
      'bg-warning border-warning': user.activityType === 'senior',
      'bg-secondary border-secondary': user.activityType === 'general',
      'bg-success border-success': user.activityType === 'pets',
    }"
  >
    <img
      class="card-img-top img-fluid"
      :src="user.photo"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ user.title }}</h5>
      <hr />
      <h6 class="card-title">Que necesita:</h6>
      <p class="card-text">{{ user.whatLike }}</p>
      <h5 class="card-title">{{ user.location }}</h5>
    </div>
    <div class="card-footer d-flex justify-content-around">
      <button  @click.prevent="addFavorites(user)" class="btn border border-success">
        Me interesa
      </button>
      <button class="btn border-danger" @click.prevent="deleteUser(user)">
        🗑️ Borrar
      </button>
      <button
        class="btn border-warning"
        data-toggle="modal"
        :data-target="'#updateModal' + user.id"
      >
        ✏️ Modificar
      </button>
      <button
        class="btn border-info"
        data-toggle="modal"
        :data-target="'#viewModal' + user.id"
      >
        👀 Detalles
      </button>
      <div
        class="modal fade modal-lg"
        :id="'updateModal' + user.id"
        tabindex="-1"
        role="dialog"
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div
            class="modal-content bg-opacity-50"
            :class="{
              'bg-info border-info': user.activityType === 'baby',
              'bg-warning border-warning': user.activityType === 'senior',
              'bg-secondary border-secondary': user.activityType === 'general',
              'bg-success border-success': user.activityType === 'pets',
            }"
          >
            <div class="modal-header">
              <h5 class="modal-title text-white" id="updateModalLabel">
                Modificar : {{ user.title }}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div id="userForm">
                <form @submit.prevent="sendForm()">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-8 m-2">
                        <div class="form-group">
                          <label><h4>Titulo:</h4></label>
                          <input
                            v-model="user.title"
                            type="text"
                            :class="{ 'is-invalid': process && invalidTitle }"
                            class="form-control-lg m-4"
                            @focus="resetEstado"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 m-2">
                        <div class="form-group">
                          <label><h4>Nombre:</h4></label>
                          <input
                            ref="name"
                            v-model="user.name"
                            type="text"
                            class="form-control-lg"
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
                            class="form-control-lg"
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
                            class="form-control-lg"
                            @focus="resetEstado"
                          >
                            <option value="baby">Para Peques</option>
                            <option value="senior">Para Senior</option>
                            <option value="general">Para Todos</option>
                            <option value="pets">Para Mascotas</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group">
                          <label><h4>Localizacion:</h4></label>
                          <input
                            type="text"
                            v-model="user.location"
                            :class="{
                              'is-invalid': process && invalidLocation,
                            }"
                            class="form-control-lg"
                            @focus="resetEstado"
                          />
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="form-group">
                          <label><h4>Necesito:</h4></label>
                          <textarea
                            v-model="user.whatLike"
                            :class="{
                              'is-invalid': process && invalidWhatLike,
                            }"
                            class="form-control-lg w-100"
                            @focus="resetEstado"
                          />
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="form-group">
                          <label><h4>Ofrezco:</h4></label>
                          <textarea
                            v-model="user.whatOffer"
                            :class="{
                              'is-invalid': process && invalidWhatOffer,
                            }"
                            class="form-control-lg w-100"
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
                            class="form-control-lg m-2"
                            @focus="resetEstado"
                          />
                          <br />
                          <img :src="user.photo" class="m-2 img-fluid w-50" />
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
                          Ha sido modificado correctamente!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <button class="btn border border-danger text-white">
                            Modificar
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn border border-white text-white"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade modal-lg"
        :id="'viewModal' + user.id"
        tabindex="-1"
        role="dialog"
        aria-labelledby="viewModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div
            class="modal-content bg-opacity-50"
            :class="{
              'bg-info border-info': user.activityType === 'baby',
              'bg-warning border-warning': user.activityType === 'senior',
              'bg-secondary border-secondary': user.activityType === 'general',
              'bg-success border-success': user.activityType === 'pets',
            }"
          >
            <div class="modal-header">
              <h5 class="modal-title text-white" id="updateModalLabel">
                {{ user.title }}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card" style="width: 48rem">
                <img
                  class="card-img-top"
                  :src="user.photo"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h1 class="card-title">{{ user.title }}</h1>
                  <h4>Que le gustaria :</h4>
                  <p class="card-text">{{ user.whatLike }}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h4>Que ofrece:</h4>
                    <p>{{ user.whatOffer }}</p>
                  </li>
                  <li class="list-group-item">
                    <h5>Localizacion:</h5>
                    <h5>{{ user.location }}</h5>
                  </li>
                  <li class="list-group-item">
                    <h4>Tipo de actividad:</h4>
                    <h5>{{ user.activityType }}</h5>
                  </li>
                  <li class="list-group-item">
                    <h4>Nombre</h4>
                    <h6>{{ user.name }}</h6>
                  </li>
                  <li class="list-group-item">
                    <h4>Contacto:</h4>
                    <h6>{{ user.contact }}</h6>
                  </li>
                </ul>
                <div class="card-body">
                  <RouterLink to="/Normas"><h1>Normas</h1></RouterLink>
                </div>
              </div>
              <div class="modal-footer">
                <button  @click.prevent="addFavorites(user)" class="btn border border-white text-white hover-zoom">
        Me interesa
      </button>
                <button
                  type="button"
                  class="btn border border-white text-white"
                  data-dismiss="modal"
                >
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
import ActivityView from "../views/Activity.vue";
import { mapState, mapActions } from 'pinia';
import { favouriteList} from '../stores/favourites'
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
  components: {  ActivityView },

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

    ...mapActions(favouriteList, ["addFavorites"]),
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
    },
    ...mapState(favouriteList, ["user"]),
  },
};
</script>
<style scoped>
</style>