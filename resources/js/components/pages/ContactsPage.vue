<template>
    <main :class="[isLight ? 'bg-white' : 'bg-black']">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-12 col-md-8">
                    <p class="pr-md-3 m-0">Se hai domande, richieste o
                        desideri ulteriori informazioni sui servizi che offro, non esitare a contattarmi compilando il modulo
                        sottostante. Sarà un piacere rispondere alle tue esigenze nel minor tempo possibile.
                        <br><br>
                        Inoltre, puoi seguirmi sui social media per rimanere aggiornato sulle ultime novità, progetti
                        e idee varie.
                        <br><br>
                        Grazie per il tuo interesse. Non vedo l'ora di sentirti e di avere l'opportunità di
                        collaborare con te per aiutarti a realizzare i tuoi progetti!</p>
                </div>
                <div class="col-12 col-md-4">
                    <ul class="deck list-unstyled">
                        <li class="deck__item deck__item--instagram" :class="[isLight ? 'bg-white' : 'bg-black']">
                            <a class="deck__link d-flex flex-column align-items-center justify-content-center h-100">
                                <i class="fa-brands fa-instagram fa-5x d-block mb-5"></i>
                                <a href="https://instagram.com/franco_mela?igshid=OGQ5ZDc2ODk2ZA==" class="deck__label">Instagram</a>
                            </a>
                        </li>
                        <li class="deck__item deck__item--github" :class="[isLight ? 'bg-white' : 'bg-black']">
                            <a class="deck__link d-flex flex-column align-items-center justify-content-center h-100">
                                <i class="fa-brands fa-github fa-5x d-block mb-5"></i>
                                <a href="https://github.com/FRANCO1357" class="deck__label">GitHub</a>
                            </a>
                        </li>
                        <li class="deck__item deck__item--facebook" :class="[isLight ? 'bg-white' : 'bg-black']">
                            <a class="deck__link d-flex flex-column align-items-center justify-content-center h-100">
                                <i class="fa-brands fa-facebook-f fa-5x d-block mb-5"></i>
                                <a href="https://www.facebook.com/francesco.melani.3" class="deck__label">Facebook</a>
                            </a>
                        </li>
                        <li class="deck__item deck__item--linkedin" :class="[isLight ? 'bg-white' : 'bg-black']">
                            <a class="deck__link d-flex flex-column align-items-center justify-content-center h-100">
                                <i class="fa-brands fa-linkedin-in fa-5x d-block mb-5"></i>
                                <a href="https://www.linkedin.com/in/francesco-melani-4052a9178/" class="deck__label">LinkedIn</a>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <AppForm :is-light="isLight" />
        </div>
    </main>
</template>

<script>
import AppForm from '../AppForm.vue';

export default {
    name: "ProjectsPage",
    components: { AppForm },
    props: {
        isLight: {
            type: Boolean,
        },
    },
}
</script>

<style scoped lang="scss">
main {
    overflow: hidden;
}


.deck {
    position: relative;
    width: 10em;
    height: 13em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 200px;
    -webkit-backface-visibility: hidden;
    text-align: center;
}

.deck__item {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid;
    border: .1em solid;

    transform-origin: 90% 92%;
    transition: .3s;

    &:hover~.deck__item {
        transform: rotate(120deg);
    }
}

.deck__item:last-of-type:after {
    content: "";
    position: absolute;
    left: 90%;
    top: 92%;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    background: white;
    margin: -.6em 0 0 -.6em;
    border: 1px solid black;
}

.deck__item:last-of-type:before {
    content: "";
    position: absolute;
    right: .4em;
    bottom: .95em;
    width: 1.19em;
    height: .15em;
    background: black;
    z-index: 2;
}

.deck__link {
    text-decoration: none;
    display: block;
    color: white;
    color: rgba(white, .8);
}

.deck__label {
    color: white;
    text-decoration: underline;
}

.deck__icon {
    font-family: 'FontAwesome', sans-serif;
    font-size: 4em;
    color: black;
    color: rgba(black, .6);
    display: block;
    margin: .5em auto;
}

$list: instagram #5c9ddd,
    github #4183c4,
    facebook #2971b9,
    linkedin #0f5aa5;

$deg: -20;

@each $item in $list {
    .deck__item--#{nth($item, 1)} {
        background: nth($item, 2) !important;
        transform: rotate(#{$deg}deg);
    }

    $deg: $deg + 15;
}</style>