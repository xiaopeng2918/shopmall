<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="img"
           src="~assets/img/tabbar/tabbar_home.png"
           alt="">
      <img slot="img-click"
           src="~assets/img/tabbar/tabbar_home_click.png"
           alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="img"
           src="~assets/img/tabbar/tabbar_sort.png"
           alt="">
      <img slot="img-click"
           src="~assets/img/tabbar/tabbar_sort_click.png"
           alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="img"
           src="~assets/img/tabbar/tabbar_shopcart.png"
           alt="">
      <img slot="img-click"
           src="~assets/img/tabbar/tabbar_shopcart_click.png"
           alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="img"
           src="~assets/img/tabbar/tabbar_profile.png"
           alt="">
      <img slot="img-click"
           src="~assets/img/tabbar/tabbar_profile_click.png"
           alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';

export default {
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style>
</style>