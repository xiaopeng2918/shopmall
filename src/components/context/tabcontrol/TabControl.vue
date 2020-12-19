<template>
  <div class="tab-control">
    <div v-for="(item,index) in tabcontrols" class="tab-control-item" :key="index" :class="{ isactive: index === currentindex}" @click="itemclick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentindex: 0,
    }
  },
  props: {
    tabcontrols: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    itemclick(index){
      this.currentindex = index;
      this.$emit('Tabclick', index)
    }
  }
}
</script>

<style>
/* 每个样式后面不能加分号 */
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    z-index: 8;
  }
  
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .isactive{
    color: var(--color-high-text);
  }
  
  .isactive span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>