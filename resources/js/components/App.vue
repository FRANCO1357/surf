<template>
    <div class="app" :class="[isLight ? 'bg-white' : 'bg-black']">
        <AppHeader :is-light="isLight" @button-clicked="buttonClicked"/>
        <router-view :is-light="isLight" :projects="projects"></router-view>
        <AppFooter :is-light="isLight"/>
    </div>
</template>

<script>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import { projects } from '../front';


export default{
    name: "App",
    data(){
        return{
            isLight: false,
            projects,
        }
    },
    components: { AppFooter, AppHeader },
    methods: {
        buttonClicked() {
            this.isLight = !this.isLight;
        }
    }
}
</script>

<style lang="scss">
.bg-white{
    background-color: white;
    color: black;
    border-color: black;

    &:focus{
        color: black;
    }

    &:hover{
        color: black;
    }
}

.bg-black{
    background-color: black;
    color: white;
    border-color: white;

    &:focus{
        color: white;
    }

    &:hover{
        color: white;
    }
}

.text-white{
    color: white;

    &:hover{
        color: white;
    }
}

.text-black{
    color: black;

    &:hover{
        color: black;
    }
}
</style>