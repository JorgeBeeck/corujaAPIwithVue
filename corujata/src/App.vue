<template>
  <div id="app">
    <main>
      <form @submit.prevent="addEstado">
        name
        <input v-model="estado.name" type="text" />
        <br />
        <button>ADD</button>
      </form>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>ESTADOS</td>
        </tr>
        <tr v-for="estado in estados" :key="estado.id">
          <td>{{ estado.id }}</td>
          <td>{{ estado.name }}</td>
          <td>
            <button @click="updateEstado(estado)">editar</button>
          </td>
          <td>
            <button @click="deleteEstado(estado)">Excluir</button>
          </td>
        </tr>
      </table>
    </main>
  </div>
</template>
<script>
import Places from "./services/places";
import axios from "axios";

export default {
  data() {
    return {
      estados: [],
      estado: {
        id: "",
        name: ""
      },
      token: null
    };
  },
  methods: {
    listEstados: function() {
      Places.listEstados().then(resp => {
        this.estados = resp.data;
      });
    },
    addEstado: function() {
      if (!this.estado.id) {
        Places.addEstado(this.estado).then(resp => {
          alert("Atualizado com sucesso");
          console.log(resp);
        });
      } else {
        Places.addEstado(this.estado).then(resp => {
          alert("Salvo com sucesso");
          console.log(resp);
          this.listEstados();
        });
      }
    },
    updateEstado: function(estado) {
      this.estado = estado;
    },
    deleteEstado: function(estado) {
      Places.deleteEstado(estado).then(resp => {
        alert("Exluido com sucesso");
        console.log(resp);
        this.listEstados();
      });
    }
  },
  mounted() {
    this.listEstados();
    axios
      .post("http://coruja-ta.herokuapp.com/auth/", {
        username: "jorge",
        password: "senha123@"
      })
      .then(resp => {
        this.token = resp.data.token;
        console.log(this.token);
      })
      .catch(err => {
        alert("erro ao achar token");
        console.log(err);
      });
    if (localStorage.token) {
      this.token = localStorage.token;
    }
  },
  watch: {
    token(token) {
      localStorage.token = token;
    }
  }
};
</script>

<style></style>
