<template>
    <footer>
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-lg-4 pr-lg-5">
                    <h3>CONTACT ME</h3>
                    <p class="my-4">Nullam viverra consectetauer quisque cursus et, porttitor risus.</p>
                    <ul class="list-unstyled">
                        <li>+39 3895824766</li>
                        <li>indo@francescomelani.com</li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h3 class="mb-4">USEFUL LINKS</h3>
                    <ul class="list-unstyled">
                        <a href=""><li>HELP & ABOUT US</li></a>
                        <a href=""><li>SHIPPING & RETURNS</li></a>
                        <a href=""><li>REFUND POLICY</li></a>
                        <a href=""><li>HOW IT WORKS</li></a>
                        <a href=""><li>FREE DELIVERY</li></a>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <h3 class="mb-4">LOCALIZATION</h3>
                    <ul class="list-unstyled">
                        <li>Francesco Melani</li>
                        <li>Via Luigi Einaudi 6</li>
                        <li>Castelfranco di Sotto</li>
                        <li>Italia</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    
</template>

<script>
export default{
    name: 'AppFooter',
}
</script>

<style scoped lang="scss">

footer{
    width: 96%;
    margin-left: 2%;

    ul{
        a{
            color: grey;
            cursor: pointer;

            &:hover{
                color: white;
                text-decoration: underline;
            }
        }
    }
}

</style>