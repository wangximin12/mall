<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style>
.recommend{
display: flex;
width: 100%;
text-align: center;
font-size: 12px;
padding: 10px 0 20px;
border-bottom: 8px solid #eee;
}
.recommend-item{
flex: 1;
}
.recommend-item img {
  width: 75px;
  height: 75px;
  margin-bottom: 8px;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color:red
}
</style>