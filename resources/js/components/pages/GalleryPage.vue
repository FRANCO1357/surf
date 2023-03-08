<template>
    <main class="px-3">
        <GalleryPageSlider/>
    </main>
</template>

<script>
import GalleryPageSlider from '../GalleryPageSlider.vue';

export default{
    name: "GalleryPage",
    components: { GalleryPageSlider }
}
</script>

<style lang="scss" scoped>
    main{
        min-height: 100vh;
        padding-top: 250px;
        background-image: url('../../../../public/images/test/grey-marble.jpg');
        background-size: cover;
    }

    @media(max-width: 767px){
        main{
            padding-top: 150px;
        }
    }

</style>