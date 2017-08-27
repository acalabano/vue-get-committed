<template>
    <div>
        <input v-model.trim="repoName" @keyup.enter="addRepo"/>

        <li v-for="repo in repos">
            <h2> {{repo}} </h2>
        </li>
    </div>
</template>

<script>
    import { reposRef } from '../store';
    import Vuex from 'vuex';

    export default {

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