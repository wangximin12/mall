<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll :probe-type = 3 
            ref = 'scroll'>
    <detail-swiper :top-images = 'topImages' />
    <detail-base-info :goods = "goods" />
    <detail-shop-info :shop = "shop" />
    <detail-goods-info :detail-info = "detailInfo"
                        @imageLoad = "imageLoad" />
    <detail-param-info :param-info="paramInfo" />
    <detail-comment-info :comment-info = "commentInfo"/>
    <goods-list :goods = "recommends"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailnavBar.vue' 
import DetailSwiper from './childComps/DetailSwiper.vue' 
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue' 
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

import Scroll from 'components/common/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'

import {itemListenerMixin} from 'common/mixin.js'
export default {
  name:"Detail",
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      isShowMain: false,
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends:[],
    }
  },
created() {

  // 获取iid
  this.iid = this.$route.params.iid
  // 根据iid请求数据
  getDetail(this.iid).then(res => {
    const data = res.result
    this.topImages = data.itemInfo.topImages
  // 获取商品信息
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    // 获取店铺信息
    this.shop = new Shop(data.shopInfo)
    // 不显示mian
    this.$bus.$emit('isShowMain',this.isShowMain)
    // 获取商品详细信息
    this.detailInfo = data.detailInfo
    // 获取参数信息
    this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    // 取出评论信息
    if(data.rate.cRate !== 0){
      this.commentInfo = data.rate.list[0]
      console.log(data.rate.list[0])
    }
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
  })
},
mounted() {

},
destroyed() {
  this.$bus.$off('imageLoad',this.itemImgListener)
},
methods: {
  imageLoad() {
    this.$refs.scroll.refresh()
  }
},

components: {
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  DetailGoodsInfo,
  DetailParamInfo,
  DetailCommentInfo,
  Scroll,
  GoodsList
}
}
</script>

<style>
</style>