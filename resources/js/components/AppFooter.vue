<template>
    <footer :class="[isLight ? 'bg-white' : 'bg-black']" class="d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col-12 col-sm-4">
                <div class="logo">
                    <img :class="{'d-none' : isLight}" src="../../../public/images/immagini/logo.png" alt="">
                    <img :class="{'d-none' : !isLight}" src="../../../public/images/immagini/logo-light.png" alt="">
                </div>
            </div>
            <div class="col-12 col-sm-4 d-flex flex-column justify-content-center align-items-center text-center text-sm-left">
                <ul class="list-unstyled">
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
            </div>
            <div class="col-12 col-sm-4 d-flex flex-column justify-content-center align-items-center text-center text-sm-left">
                <ul class="list-unstyled">
                    <li><a href="https://github.com/FRANCO1357" :class="[isLight ? 'text-black' : 'text-white']">GITHUB</a></li>
                    <li><a href="https://www.linkedin.com/in/francesco-melani-4052a9178/" :class="[isLight ? 'text-black' : 'text-white']">LINKEDIN</a></li>
                    <li>
                        <router-link :to="{name:'privacy-policy'}">
                            <a :class="[isLight ? 'text-black' : 'text-white']" href="#">PRIVACY POLICY</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'cookie-policy'}">
                            <a :class="[isLight ? 'text-black' : 'text-white']" href="#">COOKIE POLICY</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    
</template>

<script>
export default{
    name: 'AppFooter',
    props: {
        isLight: {
            type: Boolean,
        },
    },
}
</script>

<style scoped lang="scss">

footer{
    width: 96%;
    margin-left: 2%;
    border: 1px solid;

    .row{
        height: 100%;
        width: 100%;

        .col-12, .col-md-4{
            height: 200px;
        }
    }

    .logo{
        height: 100%;
        padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
            height: 100px;
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

@media (max-width: 575px){
    footer{
        .row{
        height: 100%;

        .col-12, .col-md-4{
            height: 150px;
        }
    }
    }
}

</style>