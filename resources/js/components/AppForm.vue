<template>
    <div class="container pb-5 d-flex flex-column align-items-center">
        <h5 class="bg-soft p-2 text-white text-center d-inline">PREVENTIVO</h5>
        <h2 class="text-center d-none d-md-block">Vuoi un preventivo?</h2>
        <h3 class="text-center d-md-none py-2">Vuoi un preventivo?</h3>
        <p class="text-center px-3">Se desideri ricevere un preventivo lascia qua sotto i tuoi dati e ti ricontatteremo il prima possibile!</p>
        <form @submit.prevent="saveData" class="mt-5">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" id="name" v-model="name">
                </div>
                <div class="form-group col-md-4">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email">
                </div>
                <div class="form-group col-md-4">
                    <label for="phone">Numero di telefono</label>
                    <input type="phone" class="form-control" id="phone" v-model="phone">
                </div>
            </div>
            <button type="submit" class="btn btn-soft rounded-0">Invia</button>
        </form>
    </div>

</template>

<script>
import axios from 'axios';
export default{
    name: 'AppForm',
    data() {
    return {
        name: '',
        email: '',
        phone: '',
        };
    },
    methods: {
    saveData() {
      axios.post('https://tnzbarcatering.com/api/contact', {
        name: this.name,
        email: this.email,
        phone: this.phone,
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
}
</script>

<style scoped lang="scss">
h2{
    font-size: 56px;
}
form{
    width: 100%;

    .btn-soft{
        font-size: 18px;
        padding: 10px 20px;
        background-color: #b48c80;
        color: white;
    }
}
</style>