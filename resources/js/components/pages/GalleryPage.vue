<template>
    <main>
        <GalleryDrinksSlider/>
        <GalleryCountersSlider/>
    </main>
</template>

<script>
import GalleryDrinksSlider from '../GalleryDrinksSlider.vue';
import GalleryCountersSlider from '../GalleryCountersSlider.vue';

export default{
    name: "GalleryPage",
    components: { GalleryDrinksSlider, GalleryCountersSlider }
}
</script>

<style lang="scss" scoped>
    main{
        min-height: 200vh;
        padding-top: 250px;
        background-image: url('../../../../public/images/test/grey-marble.jpg');
        background-size: cover;
    }

</style>