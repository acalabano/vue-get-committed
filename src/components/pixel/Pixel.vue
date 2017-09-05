<template>
    <div>
        <div>
            {{ pixel.pixelDate }}
        </div>
        <div class="pixel-task-container">
            <PixelTasks :pixel="pixel" :pixelKey="pixelKey"></PixelTasks>
        </div>
    </div>
</template>

<script>
import PixelTasks from './PixelTasks.vue'

    export default {
        props: ['pixel', 'pixelKey'],

        components: {
            PixelTasks
        }
    }
</script>