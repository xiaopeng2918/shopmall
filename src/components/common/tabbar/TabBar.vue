<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scope>
#tab-bar {
  display: flex;

  background-color: #f6f6f6;
  box-shadow: 0 1px 2px black;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>