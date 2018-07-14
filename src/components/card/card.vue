<template>
    <div class="card">
        <img class="img" v-lazy="data.images?data.images[0]+'?imageView2/0/w/200':null">
        <div class="card-content">
            <div class="desc">{{data.desc}}</div>
            <div class="card-content-bottom">
                <div class="who">{{data.who}}</div>
                <div class="time">{{data.time}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'v-card',
  props: {
    data: {
      type: Object
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import './card.styl';
</style>
