<template>
  <div id="app">

    <Navbar></Navbar>

    <Homepage></Homepage>

    <Repos></Repos>

  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import Navbar from './components/Navbar.vue'
import Pixel from './components/Pixel.vue'
import Pixels from './components/Pixels.vue'
import Repos from './components/Repos.vue'

export default {

    components: {
        Homepage,
        Navbar,
        Pixel,
        Pixels,
        Repos
    },



}
</script>

<style lang="scss">

</style>
