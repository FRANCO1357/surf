<template>
    <div>
        <AppHeader/>
        <router-view></router-view>
        <AppFooter/>
    </div>
</template>

<script>
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';

export default{
    name: "App",
    components: { AppHeader, AppFooter }
}
</script>

<style scoped>
</style>