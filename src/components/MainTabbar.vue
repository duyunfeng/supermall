<template>
    <div>
      <tab-bar>
      <tab-bar-item link='/home'>
        <img src="../assets/img/tabbar/home.svg" slot='item-icon'>
        <img src="../assets/img/tabbar/home_active.svg" slot='item-icon-active'>
        <div slot='item-text'>发现</div>
      </tab-bar-item>
      <tab-bar-item link='/category'>
        <img src="../assets/img/tabbar/category.svg" slot='item-icon'>
        <img src="../assets/img/tabbar/category_active.svg" slot='item-icon-active'>
        <div slot='item-text'>视频</div>
      </tab-bar-item>
      <tab-bar-item link='/shopcart'>
        <img src="../assets/img/tabbar/shopcart.svg" slot='item-icon'>
        <img src="../assets/img/tabbar/shopcart_active.svg" slot='item-icon-active'>
        <div slot='item-text'>我的</div>
      </tab-bar-item>
      <tab-bar-item link='/profile'>
        <img src="../assets/img/tabbar/profile.svg" slot='item-icon'>
        <img src="../assets/img/tabbar/profile_active.svg" slot='item-icon-active'>
        <div slot='item-text'>账号</div>
      </tab-bar-item>
    </tab-bar>
    </div>
</template>

<script>
import TabBar from './tabbar/TabBar.vue';
import TabBarItem from './tabbar/TabBarItem.vue';

export default {
  components: {
    TabBarItem,
    TabBar,
  },
};
</script>

<style>
@import url('../assets/css/base.css');

</style>
