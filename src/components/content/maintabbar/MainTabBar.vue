<template>
     <tab-bar>
      <tabbar-item path="/home" activeColor="pink">
        <img src="~assets/img/tabbar/1.jpg" slot="item-icon">
        <img src="~assets/img/tabbar/2.jpg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor="pink">
        <img src="~assets/img/tabbar/3.jpg" slot="item-icon">
        <img src="~assets/img/tabbar/4.jpg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="pink">
        <img src="~assets/img/tabbar/5.jpg" slot="item-icon">
        <img src="~assets/img/tabbar/6.jpg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" activeColor="pink">
        <img src="~assets/img/tabbar/7.jpg" slot="item-icon">
        <img src="~assets/img/tabbar/8.jpg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabbarItem from 'components/common/tabbar/TabBarItem'
export default {
    components:{
      TabBar,
      TabbarItem
    }
}
</script>

<style>

</style>