<template>
    <main class="py-0 py-sm-5" :class="[isLight ? 'bg-white' : 'bg-black']">
        <div class="container py-5">
            <div class="row d-flex">
                <div class="text col-12 col-md-8">
                    <h1>My personal website</h1>
                    <h2>Tutto quello che so fare lo puoi trovare qua.</h2>
                    <p>Benvenuti nel mio sito web portfolio! Io sono Francesco Melani e sono sviluppatore web appassionato che ha lavorato su una vasta gamma di progetti, dai siti web aziendali alle applicazioni web complesse. La mia missione è quella di aiutare i miei clienti a raggiungere i loro obiettivi online attraverso soluzioni innovative e personalizzate. Scopri di più sui miei servizi e sulle mie competenze navigando il sito e non esitare a contattarmi per discutere di un progetto che abbia bisogno di un tocco creativo e professionale.</p>
                </div>
                <figure class="col-12 col-sm-4">
                    <img class="img-fluid" src="../../../../public/images/immagini/avatar.webp" alt="Francesco Melani Avatar">
                </figure>
            </div> 
            <div class="projects position-relative mb-5 pb-5">
                <div class="typewriter text-center">
                    <h2>Alcuni miei progetti</h2>
                </div>
                <!-- <div class="pacman"></div>
                <div class="dot"></div> -->
                <div class="row">
                    <div v-for="(project, index) in projects.slice(0, 6)" :key="project.id" class="col-12 col-md-6 p-0">
                        <a href="" class="project-card" :class="[isLight ? 'bg-white' : 'bg-black']">
                            <div class="thumb">
                                <img class="img-fluid" :src="project.thumb" :alt="project.title">
                                <svg id="svg-filter">
                                <filter id="svg-blur">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
                                </filter>
                                </svg>
                            </div>
                            <div class="description">
                                <h3>{{project.title}}</h3>
                                <h5 class="text-center">{{project.languages}}</h5>
                            </div>
                        </a>
                    </div>
                    <router-link :to="{name:'projects'}">
                        <a href="" class="btn-td" :class="[isLight ? 'bg-white' : 'bg-black']">Vedi tutti i progetti</a>
                    </router-link>
                </div>
            </div>
            <AppForm :is-light="isLight" />

        </div>
    </main>
</template>

<script>
import AppForm from '../AppForm.vue';

export default{
    name: "HomePage",
    components: { AppForm },
    props: {
        isLight: {
            type: Boolean,
        },
        projects: Array,
    },
}
</script>

<style scoped lang="scss">
main{
    min-height: 200vh;
    position: relative;
    z-index: 1;
    overflow: hidden;

    .text{

        h1{
            font-size: 18px;
            margin: 30px 0;
        }

        h2{
            font-size: 52px;
            line-height: 60px;
            font-weight: 100;
        }

        .animate {
            animation: weight-animation 1s ease-in-out alternate infinite;
        }

        @keyframes weight-animation {
            from {
                font-weight: 100;
            }
            to {
                font-weight: 900;
            }
        }

    }

    figure{
        width: 50%;
        margin-top: -50px;
    }

    .projects{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 60px;
            min-height: 500px;

            .typewriter h2 {
                font-size: 2.5em;
                overflow: hidden; /* Ensures the content is not revealed until the animation */
                border-right: .15em solid; /* The typwriter cursor */
                white-space: nowrap; /* Keeps the content on a single line */
                margin: 40px auto; /* Gives that scrolling effect as the typing happens */
                letter-spacing: .15em; /* Adjust as needed */
                animation: 
                typing 3.5s steps(30, end),
                blink-caret .5s step-end infinite;
            }

            $time: 0.4s;

@mixin animation($name) {
  @-webkit-keyframes #{$name} {@content;}
  @-moz-keyframes #{$name} {@content;}
  @-o-keyframes #{$name} {@content;}
  @keyframes #{$name} {@content;}
}

@include animation(up) {
  0%, 100% {
    transform: rotate(0);
  } 
  50% {
    transform: rotate(-30deg);
  }
}

@include animation(down) {
  0%, 100% {
    transform: rotate(0);
  } 
  50% {
    transform: rotate(30deg);
  }
}

@include animation(r-to-l) {
  100% {
    margin-left: -1px;
  } 
}

@mixin use-animation($name, $time){
  -webkit-animation: $name $time infinite;
  -moz-animation: $name $time infinite;
  -o-animation: $name $time infinite;
  animation: $name $time infinite;
}

.pacman{
    position: absolute;
    top: 50%;
    left: 50%;
}

  
  .pacman:before, .pacman:after{
    content: '';
    background: #ffda07;
    width: 100px;
    height: 50px;
    margin-left: - 100px/2;
    margin-top: - 50px;
    border-radius: 50px 50px 0 0;
    display: block;
    @include use-animation(up, $time);
  }
  
  .pacman:after {
    margin-top: -1px;
    border-radius: 0 0 50px 50px;
    @include use-animation(down, $time);
  } 
  
  .dot{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-top: - 5px;
    margin-left: 30px;
    border-radius: 50%;
    background: white;
    z-index: -1;
    box-shadow: 30px 0 0 white,
                60px 0 0 white,
                90px 0 0 white,
                120px 0 0 white,
                150px 0 0 white;
    @include use-animation(r-to-l, $time);
  }

            /* The typing effect */
            @keyframes typing {
                from { width: 0 }
                to { width: 100% }
            }

            /* The typewriter cursor effect */
            @keyframes blink-caret {
                from, to { border-color: transparent }
                50% { border-color: white }
            }

            #svg-filter { display: none; }

            .project-card{
                display: inline-block;
                padding: 10px;
                margin: 10px;
                position: relative;
                color: black;
                border: 1px solid;

                &.bg-black{
                    border-color: white;
                }

                .description{
                    display: none;
                    background-color: white;
                    color: black;
                    box-shadow: 0 0 7px 0.8px rgb(81, 81, 81);
                    padding: 20px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                &:hover .description{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                &:hover img{
                    filter: url(#svg-blur);
                }
            }

            .btn-td{
                position: relative;
                display: inline-block;
                vertical-align: middle;
                font-size: 18px;
                width: 225px;
                margin: 20px 0 9px 10px;
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
}

@media (max-width: 576px){
    main{
        .text{
            text-align: center;
            h2{
                font-size: 42px;
                line-height: 50px;
                margin-bottom: 24px;
            }
        }

        .projects{
            margin-top: 0;

            .typewriter h2{
                font-size: 1.7em;
            }
        }
    }
}

</style>