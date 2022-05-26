<template>
  <header id="main-header">
    <h1>WALLET</h1>
    <p>log in</p>
  </header>
  <nav id="navigation">
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/history">History</router-link> -->
    <router-link to="/setting">Setting</router-link>
  </nav>
  <router-view />
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
@import './global.sass'

*, *::after, *::before
  box-sizing: border-box
  margin: 0
  padding: 0

html
  background-color: $main-black

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $accent-white
  font-family: 'Poppins', sans-serif
  margin-bottom: calc(80px + $std-margin)

#main-header
  display: flex
  align-items: center
  justify-content: space-between
  background-color: $accent-black
  color: $main-white
  padding: 0 20px
  height: 80px
  margin-bottom: $std-margin
  h1
    font-size: 16px
    font-weight: normal
    letter-spacing: 12px
  p
    color: $action-blue

#navigation
  position: fixed
  bottom: 0
  background-color: $accent-black
  width: 100%
  height: 80px
  display: flex
  align-items: center
  justify-content: space-around

  a
    font-size: 16px
    color: $accent-white
    text-decoration: none
    transition: 0.1s all ease-in-out
    padding: 16px

    &::after
      display: block
      content: ' '
      position: relative
      top: 0px
      left: calc(50% - 2px)
      width: 4px
      height: 0px
      border-radius: 50%
      background-color: white
      transition: 0.1s all ease-in-out

    &.router-link-exact-active
      color: $main-white
      &::after
        top: 5px
        height: 4px
</style>
