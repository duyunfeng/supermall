<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <router-view/>
  </div>
</template>
<script>
import MainTabbar from './components/MainTabbar.vue';

export default {
  components: {
    MainTabbar,
  },
};
</script>

<style>
</style>
