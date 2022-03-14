<template>
  <div class="wrapper" ref = 'bs'> 
    分类
    <ul class="content">
      <button @click="click">按钮</button>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    </ul>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
let wrapper = document.querySelector('.wrapper')
export default {
  data() {
    return {
      scroll:null
    }
  },
  created() {
    // created生效的时候模板还没加载完成,所以不会生效
    // this.scroll = new BScroll(wrapper)
  },
  //  实例渲染完成后执行
  mounted() {
    // 最好通过$refs拿DOM,因为class可以有很多DOM
    this.scroll = new BScroll(this.$refs.bs,{
      //  实时监听位置
      probeType: 3,
      // 上拉加载更多
      pullUpLoad: true

    })
    this.scroll.on('scroll',position => {
      // console.log(position)
    })
    this.scroll.on('pullingUp',() => {
      // console.log('上拉加载更多')
      console.log("上拉加载更多")
      setTimeout(() => {
                this.scroll.finishPullUp()
            }, 1000);
    })
  },
  methods: {
    click(){
      console.log('按钮')
    }
  },
}
</script>

<style>
.wrapper {
  height: 150px;
  /* background-color: red; */
  /* 原生js实现滚动,超出部分自动隐藏 */
  /* overflow-y: scroll; */
  overflow: hidden;
}
</style>