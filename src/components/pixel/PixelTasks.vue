<template>
    <div>
        <input v-model.trim="pixelTask"
               @keyup.enter="addPixelTask(pixelKey)"/>

        <div v-for="pixeltask in pixelTasks">
            {{pixeltask}}
        </div>
    </div>
</template>

<script>
import { reposRef } from '../../store'
import { EventBus } from '../../main'

    export default {
        props: ['pixelKey', 'pixel'],
        data(){
            return {
                pixelTask: ''
            }
        },

        computed: {
            pixelTasks: function () {
                return this.pixel.pixelTasks
            }
        },

        methods: {
            addPixelTask: function (key) {
                let id = this.$route.fullPath;
                if(this.pixelTask.trim()) {
                    reposRef.child(id).child('pixels').child(key).child('pixelTasks').push({
                        taskName: this.pixelTask,
                        isCompleted: false
                    });
                    this.pixelTask = '';
                }
                EventBus.$emit('reRenderMapper');
            }
        }
    }
</script>