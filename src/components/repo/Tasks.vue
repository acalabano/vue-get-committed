<template xmlns="http://www.w3.org/1999/html">
    <div>
        <div v-for="(task, key) in tasks" :key="tasks['.key']">

            <input type="checkbox" :checked="task.isCompleted" @click="completeTask(task, key)" />
                {{task.taskName}}
            <button @click="removeTask(task, key)"> Delete </button>

        </div>
    </div>
</template>

<script>
import Task from './Tasks.vue'
import { reposRef } from '../../store'
import { mapGetters } from 'vuex'

    export default {
        props: ['tasks'],

        computed: {
            ...mapGetters(['repos']),

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
                // If date changes then set all tasks to false
                this.resetCompletedTask();
            }
        },

        methods: {
            resetCompletedTask: function() {
                let id = this.$route.fullPath;
                reposRef.child(id).child('tasks').child(keyOfTask).child('isCompleted').set(false);
            },
            completeTask: function(task, keyOfTask) {
                let id = this.$route.fullPath;
                if(task.isCompleted === false) {
                    reposRef.child(id).child('tasks').child(keyOfTask).child('isCompleted').set(true);
                } else {
                    reposRef.child(id).child('tasks').child(keyOfTask).child('isCompleted').set(false);
                }
                //Ask the parent Component to reRender the mapperRepo
                this.$emit('reRenderMapper');
            },
            removeTask: function (task, keyOfTask) {
                let id = this.$route.fullPath;
                if(task.isCompleted === false) {
                    reposRef.child(id).child('tasks').child(keyOfTask).remove();
                } else {
                    reposRef.child(id).child('tasks').child(keyOfTask).remove();
                }
                //Ask the parent Component to reRender the mapperRepo
                this.$emit('reRenderMapper');
            }
        }
    }
</script>