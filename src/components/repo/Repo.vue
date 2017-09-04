<template>
    <div>
        <input v-model.trim="repoTask" @keyup.enter="addTaskForRepo($route.params.id)"/>

        <div v-for="task in tasks" :key="tasks['.key']">
            <Task :task="task"></Task>
        </div>
    </div>
</template>

<script>
import { reposRef } from '../../store'
import { mapGetters } from 'vuex'
import Task from './Task.vue'

export default {

    components: {
        Task
    },

    mounted(){
        this.mapperRepo();
    },

    updated(){
        this.mapperRepo();
    },

    data(){
        return{
            repoTask: '',
            repo: {}
        }
    },

    computed: {
        ...mapGetters(['repos']),

        tasks: function(){
            return this.repo.tasks;
        },

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
        addTaskForRepo: function (id) {
            let repo = this.repo;
            if(this.repoTask.trim()){
                reposRef.child(id).child('tasks').push({
                    taskName: this.repoTask,
                    isCompleted: false,
                    dateToday: this.todayDate
                });
                this.repoTask = '';
            }
        },
        mapperRepo: function () {
            this.repos.map( repo => {
                if(repo['.key'] === this.$route.fullPath){
                    this.repo = repo;
                }
            })
        }
    }
}
</script>
