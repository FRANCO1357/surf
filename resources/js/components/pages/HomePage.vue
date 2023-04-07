<template>
    <main class="py-0 py-sm-5" :class="[isLight ? 'bg-white' : 'bg-black']">
        <div class="container py-5">
            <div class="row d-flex">
                <div class="text col-12 col-md-8">
                    <h1>My personal website</h1>
                    <p class="animated-text">TUTTO QUELLO CHE SO FARE LO PUOI TROVARE QUA!</p>
                </div>
                <figure class="col-12 col-sm-4">
                    <img class="img-fluid" src="../../../../public/images/immagini/avatar.webp" alt="">
                </figure>
            </div> 
            <div class="projects">
                <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 p-0">
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
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 60px;

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
        }
    }
}
</style>