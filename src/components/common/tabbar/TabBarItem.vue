<template>
  <div class="tab-bar-item"
       @click="btnclick">
    <!-- <img src="../../assets/img/tabbar/tbbar_home.png" alt=""> -->
    <!-- <div>首页</div> -->
    <div v-show="!isActive">
      <slot name="img"></slot>
    </div>
    <div v-show="isActive">
      <slot name="img-click"></slot>
    </div>
    <!-- 封装组件动态绑定style，让其他使用者在组件界面上动态修改样式 -->
    <div :style="isActiveColor">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: true,
    }
  },
  props: {
    path: String,
    activeStyle: {
      type: String,
      default: 'deeppink',
    },
  },
  methods: {
    btnclick() {
      // console.log('btnclick');
      // route代表的网页加载到当前组件时路的路由
      // 这个router代表的是路由跳转创建的那个总router
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path)
      }
    },
  },
  computed: {
    isActive() {
      // 判断当前的路由的path是否等于当前插件的path属性值
      // 返回一个布尔值 渲染v-show
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveColor() {
      // 根据上面属性值判断是否活跃
      // 活跃返回组件的activeStyle props值 在外层动态动态传活跃是什么颜色
      // 否则返回空
      return this.isActive ? { color: this.activeStyle } : {}
    },
  },
}
</script>

<style>
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
  vertical-align: middle;
  border-bottom: 2px;
}
/* .active{
  color: #cf21c7;
} */
</style>