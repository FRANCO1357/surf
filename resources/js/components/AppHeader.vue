<template>
    <header>
        <nav class="navbar navbar-expand-lg p-3">
            <a class="navbar-brand" href="#">
                <img src="../../../public/images/surf/surf-logo.png" alt="" class="img-fluid px-3">
            </a>
            <img src="../../../public/images/surf/bag.png" alt="" class="pr-4">
            <button class="navbar-toggler" type="button" @click="toggleNavbar">
                <i class="fa-solid fa-bars fa-2x text-white"></i>
            </button>

            <div class="collapse navbar-collapse ml-3" id="navbarSupportedContent" :class="{'show': isNavbarOpen}">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-4" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-4" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-4" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-4" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: "AppHeader",
    data() {
        return {
            isNavbarOpen: false
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        }
    }
}
</script>

<style scoped lang="scss">
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    nav {
        background-color: black;
        color: white;

        .navbar-brand {
            margin-right: auto;
        }

        img {
            height: 30px;
        }

        .nav-item.active .nav-link {
            color: yellow;
        }

        .nav-link {
            color: white;

            &:hover {
                color: yellow;
            }
        }
    }
}

@media (min-width: 992px) {
    header {
        nav {
            img {
                order: 3;
            }
        }
    }
}
</style> 