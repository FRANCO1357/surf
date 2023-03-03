<template>
    <main class="px-3">
        <GalleryDrinksSlider/>
        <GalleryCountersSlider/>
        <GalleryLocationsSlider/>
        <GalleryStaffSlider/>
    </main>
</template>

<script>
import GalleryDrinksSlider from '../GalleryDrinksSlider.vue';
import GalleryCountersSlider from '../GalleryCountersSlider.vue';
import GalleryLocationsSlider from '../GalleryLocationsSlider.vue';
import GalleryStaffSlider from '../GalleryStaffSlider.vue';

export default{
    name: "GalleryPage",
    components: { GalleryDrinksSlider, GalleryCountersSlider, GalleryLocationsSlider, GalleryStaffSlider }
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