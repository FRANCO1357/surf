<template>
    <header :class="[currentPage === 'home' ? 'full-height' : 'low-height']">
        <AppParallax :is-light="isLight" v-if="currentPage === 'home'"/>
        <nav id="myNavHome" :class="[isLight ? 'bg-white' : 'bg-black']" v-if="currentPage === 'home'">
            <div class="logo">
                <router-link  :to="{name:'home'}">
                    <img :class="{'d-none' : isLight}" src="../../../public/images/immagini/logo.png" alt="Francesco Melani Logo">
                    <img :class="{'d-none' : !isLight}" src="../../../public/images/immagini/logo-light.png" alt="Francesco Melani Logo">
                </router-link>
            </div>
            <div class="empty d-none d-lg-block"></div>
            <ul class="d-none d-lg-flex">
                <li>
                    <router-link :to="{name:'home'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">HOME</a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'projects'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">PROJECTS</a>
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{name:'components'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">COMPONENTS</a>
                    </router-link>
                </li> -->
                <li>
                    <router-link :to="{name:'about'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">ABOUT</a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'contacts'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">CONTACTS</a>
                    </router-link>
                </li>
            </ul>
            <div class="toggle">
                <i :class="{'d-none' : isLight}" class="fa-solid fa-toggle-on fa-3x" @click="changeColor"></i>
                <i :class="{'d-none' : !isLight}" class="fa-solid fa-toggle-off fa-3x" @click="changeColor"></i>
            </div>
            <div class="menu border-right-0">
                <div class="wrapper-menu" @click="toggleMenu">
                    <div :class="[isLight ? 'bg-black' : 'bg-white']" class="line-menu"></div>
                    <div :class="[isLight ? 'bg-black' : 'bg-white']" class="line-menu"></div>
                    <div :class="[isLight ? 'bg-black' : 'bg-white']" class="line-menu"></div>
                </div>
                <div class="steaky-menu d-flex justify-content-center align-items-center" :class="{'open': menuOpen, 'bg-white': isLight, 'bg-black': !isLight }">
                    <img @click="toggleMenu" :class="{'d-none' : isLight}" class="img-fluid" role="button" src="../../../public/images/immagini/x-dark.png" alt="Francesco Melani X">
                    <img @click="toggleMenu" :class="{'d-none' : !isLight}" class="img-fluid" role="button" src="../../../public/images/immagini/x-light.png" alt="Francesco Melani X">
                    <ul class="d-flex justify-content-center align-items-center flex-column border-0">
                        <li>
                            <router-link :to="{name:'home'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">HOME</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'projects'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">PROJECTS</a>
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link :to="{name:'components'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">COMPONENTS</a>
                            </router-link>
                        </li> -->
                        <li>
                            <router-link :to="{name:'about'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">ABOUT</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'contacts'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">CONTACTS</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav id="myNav" :class="[isLight ? 'bg-white' : 'bg-black']" v-if="currentPage !== 'home'">
            <div class="logo">
                <router-link  :to="{name:'home'}">
                    <img :class="{'d-none' : isLight}" src="../../../public/images/immagini/logo.png" alt="Francesco Melani Logo">
                    <img :class="{'d-none' : !isLight}" src="../../../public/images/immagini/logo-light.png" alt="Francesco Melani Logo">
                </router-link>
            </div>
            <div class="empty d-none d-lg-block"></div>
            <ul class="d-none d-lg-flex">
                <li>
                    <router-link :to="{name:'home'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">HOME</a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'projects'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">PROJECTS</a>
                    </router-link>
                </li>
                <!-- <li>
                    <router-link :to="{name:'components'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">COMPONENTS</a>
                    </router-link>
                </li> -->
                <li>
                    <router-link :to="{name:'about'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">ABOUT</a>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'contacts'}">
                        <a :class="[isLight ? 'text-black' : 'text-white']" href="#">CONTACTS</a>
                    </router-link>
                </li>
            </ul>
            <div class="toggle">
                <i :class="{'d-none' : isLight}" class="fa-solid fa-toggle-on fa-3x" @click="changeColor"></i>
                <i :class="{'d-none' : !isLight}" class="fa-solid fa-toggle-off fa-3x" @click="changeColor"></i>
            </div>
            <div class="menu border-right-0">
                <div class="wrapper-menu" @click="toggleMenu">
                    <div :class="[isLight ? 'bg-black' : 'bg-white']" class="line-menu"></div>
                    <div :class="[isLight ? 'bg-black' : 'bg-white']" class="line-menu"></div>
                    <div :class="[isLight ? 'bg-black' : 'bg-white']" class="line-menu"></div>
                </div>
                <div class="steaky-menu d-flex justify-content-center align-items-center" :class="{'open': menuOpen, 'bg-white': isLight, 'bg-black': !isLight }">
                    <img @click="toggleMenu" :class="{'d-none' : isLight}" role="button" src="../../../public/images/immagini/x-dark.png" alt="Francesco Melani X">
                    <img @click="toggleMenu" :class="{'d-none' : !isLight}" role="button" src="../../../public/images/immagini/x-light.png" alt="Francesco Melani X">
                    <div class="x-container">
                        <div class="x-shape" @click="toggleMenu">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                        </div>
                    </div>
                    <ul class="d-flex justify-content-center align-items-center flex-column border-0">
                        <li>
                            <router-link :to="{name:'home'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">HOME</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'projects'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">PROJECTS</a>
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link :to="{name:'components'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">COMPONENTS</a>
                            </router-link>
                        </li> -->
                        <li>
                            <router-link :to="{name:'about'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">ABOUT</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'contacts'}">
                                <a @click="toggleMenu" :class="[isLight ? 'text-black' : 'text-white']" href="#">CONTACTS</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import AppParallax from './AppParallax.vue';

export default{
    name: "AppHeader",
    data() {
        return {
            isLight: false,
            menuOpen: false,
        };
    },
    props: {
        isLight: {
            type: Boolean,
        },
    },
    computed: {
        currentPage() {
            console.log(this.$route.name);
            return this.$route.name
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        changeColor() {
            this.isLight = !this.isLight;
            this.$emit("button-clicked", this.isLight);
        }
    },
    mounted() {
        const nav = document.getElementById('myNavHome');
        console.log(nav);
        const navTop = nav.offsetTop;
        const offset = -10;
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > navTop + offset) {
                nav.classList.add("fixed-top");
            }
            else {
                nav.classList.remove("fixed-top");
            }
        });
    },
    components: { AppParallax }
}
</script>

<style scoped lang="scss">
header{
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &.full-height{
        height: 100vh;
    }

    &.low-height{
        height: 100px;
        z-index: 2;
    }

    > img{
        position: fixed
    }

    nav{
        height: 100px;
        width: 96%;
        border: 1px solid;
        left: 2%;
        display: flex;

        &#myNavHome{
            position: absolute;
            bottom: 0;

            &.fixed-top{
                position: fixed;
                top: 0;
            }
        }

        &#myNav{
            position: fixed;
            top: 0;
        }

        > div{
            height: 100%;
            width: 12%;
            border-right: 1px solid;
            display: flex;
            align-items: center;
            justify-content: center;

            > img{
                height: 60%;
            }
        }

        ul{
            height: 100%;
            width: 52%;
            border-right: 1px solid;
            align-items: center;
            justify-content: space-between;
            list-style-type: none;
            margin: 0;
            padding: 0 100px;
        }

        .logo{
            border-right: 1px solid;

            a{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                img{
                    height: 50%;
                    animation-name: vibrate;
                    animation-duration: 1s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    transform-origin: 50% 50%;
                }
                @keyframes vibrate {
                    0%{
                        transform: translate(2px, 3px) rotate(0deg);
                    }
                    10%{
                        transform: translate(1px, -1px) rotate(0deg);
                    }
                    20%{
                        transform: translate(2px, 1px) rotate(-1deg);
                    }
                    30%{
                        transform: translate(3px, -2px) rotate(1deg);
                    }
                    40%{
                        transform: translate(-1px, 1px) rotate(-1deg);
                    }
                    50%{
                        transform: translate(1px, 3px) rotate(0deg);
                    }
                    60%{
                        transform: translate(-1px, 2px) rotate(-1deg);
                    }
                    70%{
                        transform: translate(1px, 1px) rotate(1deg);
                    }
                    80%{
                        transform: translate(2px, -1px) rotate(0deg);
                    }
                    90%{
                        transform: translate(-2px, 1px) rotate(-1deg);
                    }
                    100%{
                        transform: translate(2px, 3px) rotate(1deg);
                    }
                }
            }

            
        }

        .menu{

            .wrapper-menu{
                width: 50px;
                cursor: pointer;
                transition: 0.5s;
            }
            .line-menu{
                
                width: 100%;
                height: 1px;
                margin: 12px 0;
                transition: 0.5s;
            }

            &:hover{
                .line-menu {
                    &:first-child {
                    transform: translate(-20%);
                    }

                    &:last-child {
                        transform: translate(+20%);
                    }
                }
            }

            .steaky-menu{
                width: 100vw;
                position: fixed;
                z-index: 2;
                background-color: black;
                right: -100%;
                top: 0;
                bottom: 0;
                right: 0;
                left: 100%;
                transition: 1s;

                li{
                    font-size: 2rem;
                }

                &.open{
                    left: 0;
                }

                img{
                    width: calc(2% + 30px);
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    transition: 0.5s;

                    &:hover{
                        transform: rotate(90deg);
                    }
                }          
            }
        }
    }
}

@media (max-width: 991px){
    header{
        nav{
            height: 80px;
            > div{
                width: calc(100% / 3);
            }

            .menu{
                .steaky-menu{
                    li{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
    
}

</style> 