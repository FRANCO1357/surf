<template>
    <main :class="[isLight ? 'bg-white' : 'bg-black']">
        <div class="container pb-5">
            <div class="projects">
                <div class="typewriter text-center">
                    <h2>Tutti i miei progetti</h2>
                </div>
                <div class="row">
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
                                <h3>{{ project.title }}</h3>
                                <h5 class="text-center">{{ project.languages }}</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'ProjectsPage',
    props: {
        isLight: {
            type: Boolean,
        },
        projects: Array,
    },
}
</script>

<style scoped lang="scss">
main {
    background-color: black;
    position: relative;
    z-index: 1;

    .projects {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .typewriter h2 {
            font-size: 2.5em;
            overflow: hidden;
            /* Ensures the content is not revealed until the animation */
            border-right: .15em solid;
            /* The typwriter cursor */
            white-space: nowrap;
            /* Keeps the content on a single line */
            margin: 40px auto;
            /* Gives that scrolling effect as the typing happens */
            letter-spacing: .15em;
            /* Adjust as needed */
            animation:
                typing 3.5s steps(30, end),
                blink-caret .5s step-end infinite;
        }

        /* The typing effect */
        @keyframes typing {
            from {
                width: 0
            }

            to {
                width: 100%
            }
        }

        /* The typewriter cursor effect */
        @keyframes blink-caret {

            from,
            to {
                border-color: transparent
            }

            50% {
                border-color: white
            }
        }

        #svg-filter {
            display: none;
        }

        .project-card {
            display: inline-block;
            padding: 10px;
            margin: 10px;
            position: relative;
            color: black;
            border: 1px solid;

            &.bg-black {
                border-color: white;
            }

            .description {
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

            &:hover .description {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            &:hover img {
                filter: url(#svg-blur);
            }
        }
    }
}

@media (max-width: 576px) {
    main {
        .projects {
            margin-top: 0;

            .typewriter h2 {
                font-size: 1.7em;
            }
        }
    }
}
</style>