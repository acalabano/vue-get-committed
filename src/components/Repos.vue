<template>
    <div>
        <input v-model.trim="repoName" @keyup.enter="addRepo"/>

        <li v-for="repo in repos" :key="repo.repoName">
            <Repo :repo="repo"> </Repo>
        </li>
    </div>
</template>

<script>
    import { reposRef } from '../store';
    import Repo from './Repo.vue';
    import Vuex from 'vuex';

    export default {

        components: {
            Repo
        },
        computed: Vuex.mapGetters([ 'repos' ]),

        data () {
            return {
                repoName: ''
            }
        },

        methods: {
            addRepo() {
                if( this.repoName.trim() ) {
                    reposRef.push({
                        repoName: this.repoName
                    });
                    this.repoName = ''
                }
            },
        },

        mounted () {
          this.$store.dispatch('setReposRef', reposRef);
        }

    }
</script>