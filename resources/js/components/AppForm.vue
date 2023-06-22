<template>
    <div class="row" :class="[isLight ? 'bg-white' : 'bg-black']">
        <div class="col-12 col-lg-4 pr-5">
            <h5 class="d-inline">SENTITI LIBERO...</h5>
            <h3 class="py-3">DI LASCIARMI I TUOI CONTATTI</h3>
            <p>Se desideri ricevere un preventivo lascia qua sotto i tuoi dati e ti ricontatterò il prima possibile!</p>
        </div>
        <div class="col-12 col-lg-8">
            <form v-if="!sent" @submit.prevent="saveData" class="mt-5" id="form">
                <div class="form-row">
                    <div class="form-group col-12">
                        <label for="name">Nome</label>
                        <input type="text" class="form-control" id="name" v-model="name" :class="[isLight ? 'bg-white' : 'bg-black']">
                        <p class="text-danger" v-if="errors.name">{{ errors.name }}</p>
                    </div>
                    <div class="form-group col-12">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" :class="[isLight ? 'bg-white' : 'bg-black']">
                        <p class="text-danger" v-if="errors.email">{{ errors.email }}</p>
                    </div>
                    <div class="form-group col-12">
                        <label for="phone">Numero di telefono</label>
                        <input type="phone" class="form-control" id="phone" v-model="phone" :class="[isLight ? 'bg-white' : 'bg-black']">
                        <p class="text-danger" v-if="errors.phone">{{ errors.phone }}</p>
                    </div>
                </div>
                <button id="submit" type="submit" :class="[isLight ? 'bg-white' : 'bg-black']">Invia</button>
            </form>
            <div v-if="sent" class="d-flex flex-column align-items-center justify-content-center py-4 px-5 mt-4" id="sent-data" :class="[isLight ? 'bg-white' : 'bg-black']">
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
        name: '',
        email: '',
        phone: '',
        errors: {},
        sent: false,
    };
    },
    props: {
        isLight: {
            type: Boolean,
        },
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
            axios.post('https://francescomelani.com/api/contact', {
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
h5{
    font-size: 16px;
}

h3{
    font-size: 38px;
}

form{
    width: 100%;

    .form-control{
        background-color: transparent;
    }

    input{
        border: none;
        border-radius: 0%;
        border-bottom: 1px solid;

        &:focus{
            border: none;
            box-shadow: none;
            border-bottom: 1px solid;
        }
    }

    button{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    width: 200px;
    margin: 20px 0 9px;
    text-decoration: none;
    border-radius: 0;
    outline: 0;
    transition: color .2s ease-out,background-color .2s ease-out,border-color .2s ease-out,transform .3s cubic-bezier(.29,.11,.2,.96);
    transform-style: preserve-3d;
    padding: 11px 34px;
    border: 1px solid;
    cursor: pointer;

    &::before{
        content: '';
        position: absolute;
        display: inline-block;
        top: -1px;
        left: -1px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        background: linear-gradient(225deg,transparent 6px,currentColor 6px,currentColor calc(100% - 6px),transparent calc(100% - 6px),transparent 100%);
        transition: .25s cubic-bezier(.22,.61,.36,1);
        transform: translateZ(-1px);
        clip-path: inset(0 0 0 0);
    }

    &:hover{
        transform: translate3d(5px,5px,0);
    }

    &:hover::before{
        clip-path: inset(0 8px 8px 0);
    }
}

}
#sent-data{
    border: 1px solid;
}
</style>