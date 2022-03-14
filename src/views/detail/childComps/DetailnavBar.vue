<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick"> < </div>
      <div slot = 'center' class="title">
        <div v-for="(item,index) in titles" 
             class="title-item"
             @click="tabClick(index)"
             :class="{active:index === currentIndex}"
             >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  },
components: {
  NavBar
}
}
</script>

<style>
.title {
  display: flex;
  font-size: 16px;
}

.title-item {
  flex: 1;
}

.actie {
  color: pink;
}
</style>