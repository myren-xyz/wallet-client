<template>
  <div class="setting">
    <div id="wrapper">
      <div id="user">
        <div v-if="!email">
          <p>You are not logged in!</p>
        </div>
        <div v-else>
          <p class="sm">logged in as:</p>
          <p class="white">{{ email }}</p>
        </div>
      </div>
      <div id="security">
        <div v-if="email">
          <p class="item">2FA</p>
          <p class="item">Email passphrase</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="sass" scoped>
@import '@/global.sass'

.setting
  margin: $std-margin-internal

#user
  background: $accent-black
  padding: $std-padding
  margin: $std-margin 0

.white
  color: $main-white

.sm
  font-size: 12px

.item
  color: $main-white
  padding: 8px 0
  cursor: pointer
</style>
