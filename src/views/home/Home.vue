<template>
  <div id="home">

    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll ref="scroll"
            @contentscroll="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @uploadmore="uploadmore">
      <home-swiper :banners="banners"></home-swiper>

      <home-recommend-view :recommends="recommends"></home-recommend-view>

      <hot-view></hot-view>

      <tab-control :tabcontrols="['流行','新款','精选']"
                   @Tabclick="Tabclick"
                   class="tab-control"></tab-control>
      <tabbar-list :goods="showgoods"></tabbar-list>
    </scroll>
    <back-top @click.native="backtop"
              v-show="contentScroll"></back-top>
  </div>
</template>

<script>
// 项目组件
import HomeSwiper from 'views/home/childcpn/HomeSwiper'
import HomeRecommendView from 'views/home/childcpn/HomeRecommendView'
import HotView from 'views/home/childcpn/HotView'

// 项目公用组件
import TabControl from 'components/context/tabcontrol/TabControl'
import TabbarList from 'components/context/tabbarlist/TabbarList'
import BackTop from 'components/context/backtop/BackTop'

// 其他项目可用组件
import NavBar from 'components/common/navbar/Navbar'
import Scroll from 'components/common/scroll/Scroll'

// 项目方法
import { getHomeMultidata, getHomedata } from 'network/home'

export default {
  name: 'Home',
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentIndex: 'pop',
      contentScroll: false,
    }
  },
  created() {
    // getHomedata('pop', 1).then((res) => {
    //   console.log(res)
    // })
    this.getHomeMultidata()
    this.getHomedata('pop')
    this.getHomedata('new')
    this.getHomedata('sell')
  },
  methods: {
    /**
     * 关于事件的方法
     */
    Tabclick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentIndex = 'pop'
          break
        case 1:
          this.currentIndex = 'new'
          break
        case 2:
          this.currentIndex = 'sell'
          break
      }
    },
    //home组件下backtop按钮触发的事件
    backtop() {
      this.$refs.scroll.scrollto(0, 0)
    },

    scroll(position) {
      // console.log(position)
      this.contentScroll = -position.y > 3000
    },
    uploadmore(){
      console.log('加载更多');
      // 请求数据
      // 这个操作为异步请求
      // 当页面加载时由于better-scroll不能准确计算页面高度，导致上拉加载更多会出现bug，中途不能滚动
      // 所以在这个封装函数里面调用better-scroll的refresh方法，异步完成后让better-scroll重新获取滚动高度
      // 注意，一定要在异步请求函数里面的末尾加上refresh
      this.getHomedata(this.currentIndex);
      // 由于better-scroll在一个页面默认只会执行一次上拉加载更多
      // 所以这里调用了better-scroll的finishPullUp方法，让它可以在当前页面再执行一次上拉加载更多
      // 这个操作被封装在了scroll组件里面了
      this.$refs.scroll.uploadMore()
    },

    /**
     * 关于网络请求的方法
     */

    // 请求首页轮播图与推荐的数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 请求首页 流行 新款 精选上商品的数据
    getHomedata(type) {
      // 这里goods[type]使用的是对象访问属性的另一种方法，使用.访问在这里报错
      const page = this.goods[type].page + 1
      getHomedata(type, page).then((res) => {
        // console.log(res)
        // 把请求到的数据push到对应数据类型的list中
        this.goods[type].list.push(...res.data.list)
      })
      // 请求完当页数据后需要在对应数据类型页数加一，便于再次调用时请求下一页数据
      this.goods[type].page += 1
      // 当页面加载时由于better-scroll不能准确计算页面高度，导致上拉加载更多会出现bug，中途不能滚动
      // 所以在这个封装函数里面调用better-scroll的refresh方法，异步完成后让better-scroll重新获取滚动高度
      // 注意，一定要在异步请求函数里面的末尾加上refresh
      this.$refs.scroll.scroll.refresh()
    },
  },
  computed: {
    showgoods() {
      return this.goods[this.currentIndex].list
    },
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HotView,

    TabControl,
    TabbarList,
    BackTop,

    NavBar,
    Scroll,
  },
}
</script>

<style>
#home {
  /* padding-top: 44px;
  padding-bottom: 49px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  color: white;
  background-color: var(--color-tint);
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.wrapper {
  position: absolute;
  /* height: 100%; */
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>