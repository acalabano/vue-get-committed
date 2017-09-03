<template>
  <div id="app">

    <Navbar />

    <Sidebar />

    <Homepage />

  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {

    components: {
        Homepage,
        Navbar,
        Sidebar
    }

}
</script>

<style lang="scss">

</style>
