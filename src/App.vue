<template>
  <div id="app">

    <Navbar></Navbar>

    <Homepage></Homepage>

    <Repo></Repo>

  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import Navbar from './components/Navbar.vue'
import Pixel from './components/Pixel.vue'
import Pixels from './components/Pixels.vue'
import Repo from './components/Repo.vue'

export default {

    components: {
        Homepage,
        Navbar,
        Pixel,
        Pixels,
        Repo
    },



}
</script>

<style lang="scss">

</style>
