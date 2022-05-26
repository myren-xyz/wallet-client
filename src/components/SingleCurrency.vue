<template>
  <div>
    <div id="wrapper">
      <div class="flex space-between center-v">
        <div class="info flex">
          <div id="currency-logo" :class="{ default: !currency.image }">
            <img v-if="currency.image" id="logo" :src="currency.image" />
          </div>
          <div class="info-text">
            <p class="currency-name">{{ currency.name }}</p>
            <p>0</p>
          </div>
        </div>
        <p class="value">$0.00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currency"],
};
</script>

<style lang="sass" scoped>
@import '@/global.sass'

.flex
  display: flex

.space-between
    justify-content: space-between

.center-v
  align-items: center

#wrapper
  margin: $std-margin-internal

.default
  background: linear-gradient(45deg, #e5e5e5, grey)
  border-radius: 50%

#currency-logo
  width: 50px
  height: 50px
  #logo
    width: 100%
    height: 100%
    border: none

.info-text
  margin-left: 10px
  display: flex
  flex-direction: column
  justify-content: center
  p
    font-size: 12px

.currency-name
  color: $main-white
</style>
