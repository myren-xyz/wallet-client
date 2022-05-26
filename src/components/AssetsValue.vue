<template>
  <div>
    <div id="wrapper">
      <p>Balance Estimation:</p>
      <p id="value">$0.00</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/global.sass'
#wrapper
  margin: $std-margin $std-margin-internal
  padding: $std-padding
  background: $accent-black
  height: 100px
  p
    font-size: 12px
  #value
    color: $main-white
    font-size: 28px
</style>
