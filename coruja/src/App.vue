<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Veja Mais</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Paises</a>
                <a class="dropdown-item" href="#">Estados</a>
                <a class="dropdown-item" href="#">Cidades</a>
                <a class="dropdown-item" href="#">Pontos Turisticos</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <br />

      <h1>Paises</h1>
      <br />
      <br />
      <div class="container">
        <div class="row">
          <!--Form-->
          <div class="col-4">
            <form @submit.prevent="savePlace">
              <h3>Esquecemos de alguem? Adicione já!</h3>
              <div class="form-group">
                <input
                  v-model="country.name"
                  placeholder="Coloque aqui o pais"
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
                <input
                  v-model="country.id"
                  placeholder="Coloque aqui o ID do pais"
                  type="number"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <!--Cidades-->
          <div class="col">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Pais</td>
                  <td>Apagar</td>
                  <td>Editar</td>
                </tr>
              </thead>

              <tbody>
                <tr v-for="country in countries" :key="country.id">
                  <td>{{ country.name }}</td>
                  <!--ID DO PAIS-->
                  <td>{{ country.id }}</td>
                  <!--NOME PAIS-->
                  <td>
                    <Button type="button" class="btn">Apagar</Button>
                  </td>
                  <td>
                    <Button type="button" class="btn">Editar</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Places from "./services/places";

export default {
  data() {
    return {
      country: {
        id: "",
        name: ""
      },
      countries: []
    };
  },
  mounted() {
    this.listItems();
  },
  methods: {
    listItems() {
      Places.listItems().then(resp => {
        this.countries = resp.data;
      });
    },
    savePlace() {
      Places.savePlace(this.country).then(resp => {
        alert(resp);
        this.country = resp;
      });
    }
  }
};
</script>

<style></style>
