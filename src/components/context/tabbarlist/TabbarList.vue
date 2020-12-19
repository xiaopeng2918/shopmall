<template>
  <div class="tab-bar-list">
    <tabbar-list-item v-for="(item,index) in goods"
                      class="tab-bar-list-item"
                      :key="index"
                      :good="item"></tabbar-list-item>
  </div>
</template>

<script>
import TabbarListItem from './TabbarListItem'
export default {
  // data(){
  //   return{
  //     goods: this.goods
  //   }
  // },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    TabbarListItem,
  },
}
</script>

<style>
.tab-bar-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  padding: 2px;
}

</style>