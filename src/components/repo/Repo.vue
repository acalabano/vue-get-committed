<template>
    <div class="container is-fluid">
        <div class="columns">
            <div class="column is-one-quarter">
                <input v-model.trim="repoTask"
                       @keyup.enter="addTaskForRepo($route.params.id)"
                       placeholder="Daily Task"/>

                <Tasks :tasks="tasks"
                       @reRenderMapper="mapperRepo">
                </Tasks>

            </div>
            <div class="column">
                <Pixels :pixels="pixels"
                        @reRenderMapper="mapperRepo">
                </Pixels>
            </div>
        </div>
    </div>
</template>

<script>
import { reposRef } from '../../store'
import { mapGetters } from 'vuex'
import Tasks from './Tasks.vue'
import Pixels from '../pixel/Pixels.vue'
import { EventBus } from '../../main'

export default {

    components: {
        Tasks,
        Pixels
    },

    mounted(){
        this.mapperRepo();
        EventBus.$on('reRenderMapper', this.mapperRepo);
    },

    updated(){
        this.mapperRepo();
    },

    data(){
        return{
            repoTask: '',
            repo: {},
            pixelData: ''
        }
    },

    computed: {
        ...mapGetters(['repos']),

        tasks: function(){
            return this.repo.tasks;
        },

        pixels: function () {
            if( this.repo.pixels !== null ) {
                return this.repo.pixels;
            }
            return this.pixels;
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
