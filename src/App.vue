<template>
  <Header/>
<router-view class="router"></router-view>
</template>
<script>
import Home from './views/Home.vue';
import Header from './components/Header.vue';
export default{
    components: { Home, Header }
}
</script>
<style>
.router{

background-color: aqua;
height: 100%;
}
</style>
