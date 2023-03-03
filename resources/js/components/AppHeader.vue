<template>
    <header>
        <nav class="navbar navbar-light bg-light">
            <a class="btn-square d-flex align-items-center justify-content-center text-white text-decoration-none" href="tel:+393347540892">
                <i class="fa-solid fa-phone"></i>
            </a>
            <router-link :to="{name:'home'}">
                <a class="navbar-brand text-white ml-2" href="#"><img class="img-fluid" src="../../../public/images/test/logo-tenereza.png" alt=""></a>
            </router-link>
            <button @click="toggleMenu()" class="btn-square d-flex align-items-center justify-content-center" id="btn-menu" type="button">
                <i class="fa-solid fa-bars text-white"></i>
            </button>
            <div class="nav-menu flex-column align-items-center" id="navbarMenu">
                <button @click="toggleMenu()" class="btn-menu btn-square btn-close text-white d-flex align-items-center justify-content-center" id="btn-menu" type="button">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <h2 class="my-5 text-white">Menu</h2>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a @click="closeMenu()" class="nav-link py-3 text-white text-center border-bottom border-white" href="#anchor-service">Bar Service</a>
                        <a @click="closeMenu()" class="nav-link py-3 text-white text-center border-bottom border-white" href="#anchor-gallery">Gallery</a>
                        <a @click="closeMenu()" class="nav-link py-3 text-white text-center border-bottom border-white" href="#anchor-aggiuntivi">Servizi Aggiuntivi</a>
                        <a @click="closeMenu()" class="nav-link py-3 text-white text-center border-bottom border-white" href="#anchor-about">Chi Siamo</a>
                        <a @click="closeMenu()" class="nav-link py-3 text-white text-center border-bottom border-white" href="#anchor-preventivo">Preventivo</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default{
    name: 'AppHeader',
    data: () => ({
        links: [
            {name: 'home', label: 'Home'},
            {name: 'about', label: 'Chi siamo'},
        ]
    }),
    methods:{
      toggleMenu(){
        const navbarMenu = document.getElementById('navbarMenu');
        navbarMenu.classList.toggle('open')
      },
      closeMenu(){
        const navbarMenu = document.getElementById('navbarMenu');
        navbarMenu.classList.remove('open')
      },
    },
    mounted (){
        window.addEventListener('scroll', function(){
            const nav = this.document.querySelector('nav');
            nav.classList.toggle('sticky', window.scrollY > 0);
        })
    }
}
</script>

<style scoped lang="scss">

nav{
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 5;
background-color: transparent !important;
padding: 60px 60px;
transition: 1s;

img{
    height: 100px;
}

    .btn-square{
        width: 50px;
        height: 50px;
        background-color: transparent;
        border-radius: 0;
        border: 2px solid white;
        font-size: 20px;
        transition: 0.8s;

        &:hover{
            background-color: #b48c80;
            border: #b48c80;
            color: white;
        }

        &:focus{
            box-shadow: none;
        }
    }

   
    .nav-menu{
    display: flex;
    position: absolute;
    top: 0;
    right: -300px;
    height: 100vh;
    z-index: 20;
    background-image: url('../../../public/images/test/black-marble.jpg');
    background-size: 100vw;
    background-position: top right;
    width: 300px;
    padding: 40px;
    transition: 0.3s;

        .btn-close{
            position: absolute;
            top: 15px;
            right: 15px;
        }

        a{
        transition: 0.8s;

           &:hover{
            color: #b48c80 !important;
           } 
        }

    }
    .nav-menu.open{
        right: 0;
    }
}

ul{
    width: 100%;
}

nav.sticky{
    background-color: transparent !important;
    background-image: url('../../../public/images/test/black-marble.jpg');
    background-size: cover;
    padding: 10px 60px;
    transition: 1s;

    img{
        filter: invert(1);
        height: 70px;
    }
}

@media (max-width: 767px){
        nav{
            padding: 40px;

            img{
                height: 80px;
            }
        }

        nav.sticky{
            padding: 5px 20px;
        }
    }


</style>