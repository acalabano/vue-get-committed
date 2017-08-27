<<template>
  <div>
    <Pixels> </Pixels>
  </div>
</template>

<<script>
  import Pixels from './Pixels.vue'

  export default {
    props:["repo"],

    components: {
      Pixels
    }
  }
</script>
