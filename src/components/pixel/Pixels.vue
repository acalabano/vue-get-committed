<template>
  <div>
    <div class="title"> Pixels </div>
    <section>
      <button @click="addPixel"> Add Pixel </button>
      <div v-for="(pixel, key) in pixels" :key="pixels['.key']">
        <div class="pixel-box">
          <Pixel :pixel="pixel" :pixelKey="key"></Pixel>
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import { reposRef } from '../../store'
import Pixel from './Pixel.vue'

export default {

    props: ['pixels'],

    components: {
        Pixel
    },

    computed: {
        todayDate: function(){
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth()+1;
            const yyyy = today.getFullYear();

            if (dd<10) {
                dd = '0'+dd
            }

            if (mm<10) {
                mm = '0'+mm
            }

            today = yyyy + '-' + mm + '-' + dd;
            return today
        }
    },

    methods: {
        addPixel: function () {
            let id = this.$route.fullPath;
            reposRef.child(id).child('pixels').push({
                pixelColor: 'rgb(235, 237, 240)',
                pixelDate: this.todayDate,
                show: false
            });
            this.$emit('reRenderMapper')
        }
    }
}

</script>


