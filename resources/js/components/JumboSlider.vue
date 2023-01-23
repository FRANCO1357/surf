<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../../../public/images/test/slider-1.jpg" class="d-block img-fluid w-100" alt="...">
            <div class="carousel-caption">
                <h2>First slide label</h2>
                <p>Some representative placeholder content for the first slide.</p>
                <a href="#form" class="btn btn-danger">Contattaci</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../../../public/images/test/slider-2.jpg" class="d-block img-fluid w-100" alt="...">
            <div class="carousel-caption">
                <h2>Second slide label</h2>
                <p>Some representative placeholder content for the second slide.</p>
                <a href="#form" class="btn btn-danger">Contattaci</a>
            </div>
            </div>
            <div class="carousel-item">
            <img src="../../../public/images/test/slider-4.jpg" class="d-block img-fluid w-100" alt="...">
            <div class="carousel-caption">
                <h2>Third slide label</h2>
                <p>Some representative placeholder content for the third slide.</p>
                <a href="#form" class="btn btn-danger">Contattaci</a>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>
</template>

<script>
export default{
    name: 'JumboSlider',
}
</script>

<style scoped lang="scss">
.carousel-inner{
    height: 100vh;
    position: relative;

    img{
        height: 100vh;
        object-fit: cover;
    }

    .carousel-caption{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

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

.carousel-indicators{
        z-index: 3;
    }
</style>