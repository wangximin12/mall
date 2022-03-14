<template>
  <div id="app">
    <!-- 在使用exclude与include时一定要记得给组件加上响应的name -->
    <keep-alive exclude="Detail">
          <router-view/>
    </keep-alive>

    <main-tab-bar class="tabbar" v-show="isShowMain"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'
  export default {
    data() {
      return {
        isShowMain:true
      }
    },
    methods: { 
    },
    mounted() {
        this.$bus.$on('isShowMain', function(bl){
        this.isShowMain = bl
        // console.log(bl)
        })  
    },
    activated() {

    },
      components:{
    MainTabBar
  }
}


</script>
 

<style>
@import '~assets/css/base.css';
.tabbar {
  z-index: 3;
}
</style>

