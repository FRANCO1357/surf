<template>
    <main class="py-0 py-sm-5" :class="[isLight ? 'bg-white' : 'bg-black']">
        <div class="container py-5">
            <div class="row d-flex">
                <div class="text col-12 col-md-8">
                    <h1>My personal website</h1>
                    <p class="animated-text">Tutto quello che so fare lo puoi trovare qua.</p>
                </div>
                <figure class="col-12 col-sm-4">
                    <img class="img-fluid" src="../../../../public/images/immagini/avatar.webp" alt="">
                </figure>
            </div> 
            <div class="projects">
                <div class="typewriter text-center">
                    <h2>Alcuni miei progetti</h2>
                </div>
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
            font-size: 14px;
            margin: 30px 0;
        }

        p{
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
            align-items: center;
            flex-wrap: wrap;
            margin-top: 60px;

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
            p{
                font-size: 36px;
                line-height: 40px;
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