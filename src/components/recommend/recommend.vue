<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <v-day :data="slide"></v-day>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script type="emcascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import vDay from '../day/day.vue'
const TAB_NAME = ['今天', '昨天', '前天', '前三天', '四天前']

export default {
  name: 'v-recommend',
  components: {
    swiper,
    swiperSlide,
    vDay
  },

  created () {
    this.$store.commit('UPDATE_LOADING', true)
    this.$http.get('http://gank.io/api/history/content/5/1').then((response) => {
      this.swiperSlides = response.body.results
      console.log(this.swiperSlides)
      this.$nextTick(() => {
        this.$store.commit('UPDATE_LOADING', false)
      })
    })
  },

  data () {
    return {
      swiperSlides: [],
      TAB_NAME: [],
      playPageShow: false,
      blurBgShow: false,
      rankShow: true,
      routerViewAnimation: 'page-slide',
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender (swiper, index, className) {
          return `<div class="${className}  swiper-pagination-bullet-custom">${TAB_NAME[index]}</div>`
        }
      }
    }
  },

  mounted () {

  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './recommend.styl';
</style>
