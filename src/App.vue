<template >
  <div class="app">
    <Header/>
    <router-view class="router"></router-view>
  </div>
</template>
<script>
import Home from './views/Home.vue';
import Header from './components/Header.vue';
export default{
    components: { Home, Header }
}
</script>
<style>
.app{

}
</style>
