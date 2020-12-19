<template>
  <div class="recommend"> 
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
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
    text-align: center;
    padding: 15px 0px 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
    font-size: 12px;
  }
  .recommend-item img{
    width: 73px;
    height: 73px;
    margin-bottom: 10px;
  }
</style>