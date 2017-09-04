<template>
    <div>
        {{task}}
    </div>
</template>

<script>
import Task from './Task.vue'
import { reposRef } from '../../store'

    export default {
        props: ['task'],

        components: {
            Task
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

        watch: {
            todayDate: function () {
                this.resetCompletedTask();
            }
        },

        methods: {
            resetCompletedTask: function () {
                let id = this.$route.fullPath;
                reposRef.child(id).child('tasks').child('isCompleted').set(false);
            }
        }
    }
</script>