<template>
<!-- ref明确的获取某个子组件或元素,children获取所有的子组件 -->
  <div ref = 'wrapper' class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      // button可以点击,但div等必须设置click:true才能被点击 
      click: true,
      pullUpLoad: this.pullUpLoad
    })
    // 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3){
    this.scroll.on('scroll',position => {
      // 发送事件
      this.$emit('scroll',position)
      // 验证滚动
      // console.log(position)
    })}
    // 监听滚到底部
    if (this.pullUpLoad) {
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
         setTimeout(() => {
                this.scroll.finishPullUp()
            }, 1000);
    })
    }
  },
  methods: {
      scrollTo(x,y,time = 300){
        this.scroll.scrollTo(x,y,time)
  },
      refresh(){
        this.scroll && this.scroll.refresh()
  },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
  }
  },

}
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 93px);
  overflow: hidden;
} 
</style>