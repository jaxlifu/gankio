<template>
    <div class="welcome">
        <div class="loader-inner pacman">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
import { saveToLocal } from '../../common/js/store'
export default {
  created () {
    console.log('create')
  },
  mounted () {
    setTimeout(() => {
      this.$router.push({
        name: 'welfare'
      })
      saveToLocal('gank', 'welcome', true)
    }, 1900)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './welcome.styl';
</style>
