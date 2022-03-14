<template>
<!-- 这里是大的框架 -->
      <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style>
#tab-bar{
  display: flex;
  background-color: #e0e0e0;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /*           x    y  距ww离   颜色 */
  box-shadow: 0px -2px 3px rgba(100,100,100,.5);
}
</style>