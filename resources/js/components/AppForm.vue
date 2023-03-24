<template>
    <div class="container pb-5 d-flex flex-column align-items-center">
        <h5 class="bg-soft p-2 text-white text-center d-inline">PREVENTIVO</h5>
        <h2 class="text-center d-none d-md-block">Vuoi un preventivo?</h2>
        <h3 class="text-center d-md-none py-2">Vuoi un preventivo?</h3>
        <p class="text-center px-3">Se desideri ricevere un preventivo lascia qua sotto i tuoi dati e ti ricontatteremo il prima possibile!</p>
        <form v-if="!sent" @submit.prevent="saveData" class="mt-5" id="form">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" id="name" v-model="name">
                    <p class="text-danger" v-if="errors.name">{{ errors.name }}</p>
                </div>
                <div class="form-group col-md-4">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email">
                    <p class="text-danger" v-if="errors.email">{{ errors.email }}</p>
                </div>
                <div class="form-group col-md-4">
                    <label for="phone">Numero di telefono</label>
                    <input type="phone" class="form-control" id="phone" v-model="phone">
                    <p class="text-danger" v-if="errors.phone">{{ errors.phone }}</p>
                </div>
            </div>
            <button id="submit" type="submit" class="btn btn-soft rounded-0">Invia</button>
        </form>
        <div v-if="sent" class="d-flex flex-column align-items-center justify-content-center py-4 px-5 mt-4" id="sent-data">
            <i class="fa-solid fa-circle-check fa-3x mb-3"></i>
            <p class="text-center">Grazie per averci lasciato i tuoi dati, ti ricontatteremo al più presto!</p>
        </div>
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
        errors: {},
        sent: false,
    };
    },
    methods: {
        validateForm() {
            let isValid = true;
            this.errors = {};

            // Validazione del campo Nome
            if (!this.name) {
            this.errors.name = 'Inserisci il tuo nome.';
            isValid = false;
            }

            // Validazione del campo Email
            if (!this.email) {
            this.errors.email = 'Inserisci la tua email.';
            isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(this.email)) {
            this.errors.email = 'Inserisci una email valida.';
            isValid = false;
            }

            // Validazione del campo Telefono
            if (!this.phone) {
            this.errors.phone = 'Inserisci il tuo numero di telefono.';
            isValid = false;
            }

            return isValid;
        },
        saveData() {
            if (this.validateForm()) {
            axios.post('https://tnzbarcatering.com/api/contact', {
                name: this.name,
                email: this.email,
                phone: this.phone,
            })
            .then(response => {
                console.log(response.data);
                this.sent = true;
            })
            .catch(error => {
                console.log(error);
            });
            }
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

    .btn-soft {
            --clr-font-main: hsla(0 0% 20% / 100);
            --btn-bg-1: rgb(142, 142, 142);
            --btn-bg-2: rgb(49, 49, 55);
            --btn-bg-color: hsla(360 100% 100% / 1);
            --radii: 0.5em;
            cursor: pointer;
            padding: 10px 40px;
            font-size: 20px;
            transition: 0.8s;
            background-size: 280% auto;
            background-image: linear-gradient(325deg, var(--btn-bg-2) 0%, var(--btn-bg-1) 55%, var(--btn-bg-2) 90%);
            border: 2px solid white;
            border-radius: 0px;
            color: var(--btn-bg-color);
            box-shadow: 0px 0px 10px rgba(56, 56, 56, 0.5), 0px 5px 5px -1px rgba(84, 84, 84, 0.25), inset 4px 4px 8px rgba(62, 62, 62, 0.5), inset -4px -4px 8px rgba(44, 44, 44, 0.35);

            &:hover{
                background-position: right top;
            }
        }

.btn-soft:is(:focus, :focus-within,:active) {
  outline: none;
  box-shadow: 0 0 0 3px var(--btn-bg-color), 0 0 0 6px var(--btn-bg-2);
}

@media (prefers-reduced-motion: reduce) {
  .btn-soft {
    transition: linear;
  }
}
}
#sent-data{
    background-color: rgb(204, 255, 219);
    border-radius: 10px;
    border: 1px solid rgb(182, 238, 199);
}
</style>