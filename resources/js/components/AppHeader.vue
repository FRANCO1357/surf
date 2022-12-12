<template>
    <header>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand text-white" href="#">Soul Events</a>
            <button @click="toggleMenu()" class="btn" id="btn-menu" type="button">
                <i class="fa-solid fa-bars text-white"></i>
            </button>
            <div class="nav-menu" id="navbarMenu">
                <button @click="toggleMenu()" class="btn" id="btn-menu" type="button">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
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
}
</script>

<style scoped lang="scss">

nav{
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 2;
background-color: transparent !important;
padding: 50px;

    .btn{
        border-radius: 0;
        border: 2px solid white;

        &:focus{
            box-shadow: none;
        }
    }
   
    .nav-menu{
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 2;
    background-color: white;
    padding: 40px;
    }
    .nav-menu.open{
        display: block;
    }
}


</style>