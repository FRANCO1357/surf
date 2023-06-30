<template>
    <main>
        <section id="jumbotron">
            <div class="row align-items-center my-5">
                <div class="col-12 col-md-5 p-5 p-md-0">
                    <picture>
                        <img src="../../../../public/images/surf/pexels-jess-loiterton-4321800.jpg" alt=""
                            class="img-fluid">
                    </picture>
                    <div class="row px-4 d-none d-md-flex">
                        <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                        <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                        <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                        <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                        <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                    </div>
                </div>
                <div class="col-12 col-md-2 pb-5 pb-md-0 text">
                    <h1>WE<span>LOVE</span> <br> <span>SUN</span>OCEAN <br> & WAVES</h1>
                </div>
                <div class="col-5 d-none d-md-block">
                    <picture>
                        <div class="row justify-content-end px-5">
                            <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                            <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                            <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                            <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                            <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                            <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                            <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                            <div class="col-1"><i class="fa-regular fa-plus mx-3 my-4"></i></div>
                        </div>
                        <img src="../../../../public/images/surf/pexels-amanda-klamrowski-1409200.jpg" alt=""
                            class="img-fluid">
                    </picture>
                </div>
            </div>
        </section>
        <section id="surfboards" class="bg-black">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-2 px-0 px-lg-5">
                        <img src="../../../../public/images/surf/surfboard-1.png" alt="" class="img-fluid p-3">
                    </div>
                    <div class="col-6 col-md-2 px-0 px-lg-5">
                        <img src="../../../../public/images/surf/surfboard-2.png" alt="" class="img-fluid p-3">
                    </div>
                    <div class="col-6 col-md-2 px-0 px-lg-5">
                        <img src="../../../../public/images/surf/surfboard-3.png" alt="" class="img-fluid p-3">
                    </div>
                    <div class="col-6 col-md-2 px-0 px-lg-5">
                        <img src="../../../../public/images/surf/surfboard-4.png" alt="" class="img-fluid p-3">
                    </div>
                    <div class="col-6 col-md-2 px-0 px-lg-5">
                        <img src="../../../../public/images/surf/surfboard-5.png" alt="" class="img-fluid p-3">
                    </div>
                    <div class="col-6 col-md-2 d-f0 px-lg-5 d-flex align-items-center justify-content-center">
                        <i class="fa-regular fa-plus fa-3x"></i>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default {
    name: "HomePage",
}
</script>

<style scoped lang="scss">
#jumbotron {
    padding-top: 80px;
    background-image: url(../../../../public/images/surf/background-9.png);
    background-size: cover;
    position: relative;
    z-index: 1;
    overflow: hidden;

    .text {
        position: relative;

        h1 {
            font-size: 8vw;
            font-weight: 900;
            line-height: 8vw;
            position: absolute;
            top: -160px;
            left: -150%;
            right: -100%;
            z-index: 2;

            span {
                color: yellow;
            }
        }
    }
}

#surfboards {
    i {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        background-color: yellow;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            transform: scale(1.1);
        }
    }
}

@media (max-width: 767px) {
    #jumbotron {
        padding-top: 20px;
        .text {
            h1 {
                font-size: 10vw;
                line-height: 10vw;
                top: -120px;
                left: 60px;
            }
        }
    }
}
</style>