<template>
<div id="home">
<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
<tab-control 
:titles="['流行','新款','精选']" 
@tabClick = "tabClick"
ref = "tabControl1"
class="tabcontrol"
v-show="isShowTab"
></tab-control>
<scroll ref = "scroll" 
        :probe-type = 3 
        @scroll = "contentScroll"
        :pull-up-load = true
        @pullingUp = "loadMore"
        >
<home-swiper :banners='banners'
             @swiperImageLoad = "swiperimageload"></home-swiper>
<home-recommend-view :recommends = 'recommends'></home-recommend-view>
<feature-view></feature-view>
<tab-control 
:titles="['流行','新款','精选']" 
@tabClick = "tabClick"
ref = "tabControl2"
v-show="!isShowTab"
></tab-control>
<goods-list :goods = "showgoods"></goods-list>
</scroll>
<!-- 要想要组件监听事件需要使用.native -->
<back-top @click.native="backClick" v-show="isShow"/>
</div>
</template>

<script>
// 子组件
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
// 公共组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from  'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {itemListenerMixin} from 'common/mixin.js'

export default {
  mixins:[itemListenerMixin],
  data() {
    return {
      banners:[],
      recommends:[],
      goods: {
        pop: {page:0,list:[]},
        new:{page:0,list:[]},
        sell: {page:0,list:[]}
      },
      currentType:'pop',
      isShow: false,
      tabOffsetTop: 0,
      isShowTab: false,
      saveY: 0,
    }
  },
  components:{
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },  
  computed: {
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    // 请求多个数据
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
  },
  methods: {
    // 事件监听
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res => {``
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type){
      let page = this.goods[type].page + 1 
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
    })
    },
    backClick(){
        //                                  x  y  time
          this.$refs.scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position){
      // 判断BackTop是否显示 
      // console.log(position)
      // if(position.y < -1000){
      //   this.isShow = true
      // } else this.isShow = false
      this.isShow = position.y < -1000

      // 决定tabControl是都吸顶(position:fixed)
      this.isShowTab = (-position.y) > this.tabOffsetTop
    },
    loadMore(){
      // console.log('上拉')
      this.getHomeGoods(this.currentType)
    },
    swiperimageload(){
    // 获取tabControl的offsetTop
    // 所有的组件都有以恶搞属性$el用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  // 进来此页面时调用
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  // 离开此页面时调用
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getScrollY()

    // 取消全局时间监听
    this.$bus.$off('imageLoad',this.ItemImgListener)
  },

}
</script>


<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
    background-color: rgb(250, 154, 237);
    color: aliceblue;
    font-size: 20px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
}

.tabcontrol {
  position: relative;
  z-index: 10;
}
</style>
