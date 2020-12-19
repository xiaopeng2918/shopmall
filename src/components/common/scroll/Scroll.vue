<template>
  <div class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    }
  },

  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    scrollto(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time)
    },
    uploadMore(){
      console.log('555');
      this.scroll.finishPullUp()
    }
  },

  mounted() {
    this.scroll = new BScroll('.wrapper', {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })

    this.scroll.on('scroll',(position) => {
      this.$emit('contentscroll',position)
      // console.log(position);
    })

    this.scroll.on('pullingUp',() => {
      this.$emit('uploadmore')
    })
  },
}
</script>

<style>
</style>