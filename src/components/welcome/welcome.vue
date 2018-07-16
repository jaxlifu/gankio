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
console.log('welcome script run ')
export default {
  created () {
    console.log('create')
  },
  mounted () {
    console.log('welcome script run ')
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
