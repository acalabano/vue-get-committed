<<template>
  <div>
    <div v-for="pixel in pixels" :key="pixel.pixelDate">
      {{pixel}}
      <!-- <Pixels :pixel="pixel"><Pixels> -->
    </div>
  </div>
</template>

<<script>
  import Pixels from './Pixels'

  export default {
    props:["repo"],

    components: {
      Pixels
    }
  }
</script>
