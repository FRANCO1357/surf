<template>
    <header>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand text-white" href="#">Soul Events</a>
            <button @click="toggleMenu()" class="btn-menu d-flex align-items-center justify-content-center" id="btn-menu" type="button">
                <i class="fa-solid fa-bars text-white"></i>
            </button>
            <div class="nav-menu flex-column align-items-center" id="navbarMenu">
                <button @click="toggleMenu()" class="btn-menu btn-close text-white d-flex align-items-center justify-content-center" id="btn-menu" type="button">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <h2 class="my-5 text-white">Menu</h2>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link py-3 text-white text-center border-bottom border-dark" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link py-3 text-white text-center border-bottom border-dark" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link py-3 text-white text-center border-bottom border-dark" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default{
    name: 'AppHeader',
    methods:{
      toggleMenu(){
        const navbarMenu = document.getElementById('navbarMenu');
        navbarMenu.classList.toggle('open')
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
padding: 80px 60px;
transition: 1s;

    .btn-menu{
        width: 50px;
        height: 50px;
        background-color: transparent;
        border-radius: 0;
        border: 2px solid white;
        font-size: 20px;
        transition: 0.8s;

        &:hover{
            background-color: red;
            border: red;
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
    background-color: #252222;
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
            color: red !important;
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
    background-color: #252222 !important;
    padding: 20px 60px;
    transition: 1s;
}


</style>