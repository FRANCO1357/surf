<template>
    <div>
        <AppHeader/>
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue';

export default{
    name: "App",
    components: { AppHeader, }
}
</script>

<style scoped>
body{
    background-color: red;
}
</style>