<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../../../public/images/test/slider-1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../../../public/images/test/slider-2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../../../public/images/test/slider-3.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="btn-prev d-none d-xl-block" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button class="btn-next d-none d-xl-block" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script>
export default{
    name: 'AboutSlider',
}
</script>

<style scoped lang="scss">
.carousel-inner{
    height: 60vh;
    position: relative;

    img{
        height: 60vh;
        object-fit: cover;
    }

    .carousel-caption{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);

        h2{
            font-size: 46px;
        }

        .btn-danger{
            border-radius: 0;
            padding: 12px 40px;
            font-size: 18px;
        }
    }
}

button{
    opacity: 1;
    border: none;
    background-color: transparent;

    &.btn-prev{
        position: absolute;
        right: 102%;
        top: 50%;
    }
    &.btn-next{
        position: absolute;
        left: 102%;
        top: 50%;
    }
    

    i{
        color: black;
        font-size: 28px;
    }
}

.carousel-indicators{
        z-index: 3;
    }
</style>