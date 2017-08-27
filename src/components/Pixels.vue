<template>
  <div>
      <input v-model.trim="pixelDate" @keyup.enter="addPixel" />
  </div>    
</template>

<script>
    import { pixelsRef } from '../store';
    import { mapGetters } from 'vuex';

    export default {

        computed: {

            todayDate(){
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

        data() {
            return {
                pixelDate: this.todayDate
            }
        },

        methods: {
            addPixel() {
                if (this.pixelDate.trim()){
                    pixelsRef.push({
                        pixelDate: this.pixelDate
                    });
                    this.pixelDate=''
                }
            },
        },

        mounted (){
            this.$store.dispatch('setPixelsRef', pixelsRef)
        }
    }

</script>


