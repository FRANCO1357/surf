<template>
    <div class="row">
        <div class="col-12 mb-5">
            <form v-if="!sent" @submit.prevent="saveData" class="d-flex mt-5" id="form">
                <div class="form-row">
                    <div class="form-group w-100 mb-0">
                        <input type="email" class="form-control" id="email" v-model="email" placeholder="E-MAIL">
                        <p class="text-danger" v-if="errors.email">{{ errors.email }}</p>
                    </div>
                </div>
                <button id="submit" type="submit">Invia</button>
            </form>
            <div v-if="sent" class="d-flex flex-column align-items-center justify-content-center py-4 px-5 mt-4" id="sent-data">
                <i class="fa-solid fa-circle-check fa-3x mb-3"></i>
                <p class="text-center">Grazie per averci lasciato i tuoi dati, ti ricontatterò al più presto!</p>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default{
    name: 'AppForm',
    data() {
    return {
        email: '',
        errors: {},
        sent: false,
    };
    },
    methods: {
        validateForm() {
            let isValid = true;
            this.errors = {};

            // Validazione del campo Email
            if (!this.email) {
            this.errors.email = 'Inserisci la tua email.';
            isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(this.email)) {
            this.errors.email = 'Inserisci una email valida.';
            isValid = false;
            }

            return isValid;
        },
        saveData() {
            if (this.validateForm()) {
            axios.post('https://francescomelani.com/api/contact', {
                email: this.email,
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
h5{
    font-size: 16px;
}

h3{
    font-size: 38px;
}

form{
    width: 100%;

    .form-row{
        width: 80%;
        margin: 0;
    }

    button{
        width: 20%;
        background-color: yellow;
        border: none;
        transition: 0.5s;

        &:hover{
            background-color: black;
            color: yellow;
        }
    }

    .form-control{
        width: 100%;
        background-color: transparent;
    }

    input{
        border-radius: 0%;
        border: 1px solid white;
        color: white;

        &:focus{
            box-shadow: none;
            border: 1px solid white;
            color: white;
        }
    }

}
#sent-data{
    border: 1px solid;
}
</style>