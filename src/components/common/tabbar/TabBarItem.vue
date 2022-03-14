<template>
<!-- 这里是为了展示不同的数据 -->
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive">
    <slot name="item-icon"></slot>
  </div>
 <div v-else>
     <slot name="item-icon-active"></slot>
 </div>
  <!-- 插槽会被替换掉的,随意不要动态绑定类 -->
  <div :style="activeStyle">
      <slot name='item-text' ></slot>
  </div>
</div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"}
  },
  data() {
    return {
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive? {color:this.activeColor}: {}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  },

}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
width: 27px;
height: 27px;
margin-top: 3px;
vertical-align: middle;
}
.active{
  color: red;
}
</style>