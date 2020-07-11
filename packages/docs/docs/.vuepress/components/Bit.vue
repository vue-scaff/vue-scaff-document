<template>
  <p v-if="false" class="special-thanks">
    <a href="https://www.joenix.com/" target="_blank">
      <span>Special Thanks to</span>
      <img alt="bit" :src="`${$site.base}?.png`" />
    </a>
  </p>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.special-thanks
  font-weight 600
  background-color #f3f6f8
  box-shadow inset 0 1px 2px rgba(0, 0, 0, .1)
  padding 0.6em 1.2em
  border-radius 8px
  display inline-block
  margin 1em 0 !important
  a
    color #999
  img
    height 40px
    border-radius 6px
  img, span
    vertical-align middle
</style>
