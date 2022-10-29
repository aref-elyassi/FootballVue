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
  margin-top: 5rem;
}
</style>
