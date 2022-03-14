<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
         class="tab-control-item"
         :class="{active:index === currentIndex}"
         @click="itemClick(index)"
         >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0    
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    },

  },
}
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.tab-control-item span {
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

.active {
  color :rgb(238, 139, 156);
}

.active span {
  border-bottom: 3px solid rgb(238, 139, 156);
}
</style>