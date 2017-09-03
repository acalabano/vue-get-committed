<template>
    <div>
        <input v-model.trim="repoName" @keyup.enter="addRepo"/>

        <div v-for="repo in repos" :key="repo['.key']">
            <Repo :repos="repos" :repo="repo"> </Repo>
        </div>
    </div>
</template>

<script>
    import { reposRef } from '../../store';
    import Repo from './Repo.vue';
    import { mapGetters } from 'vuex';

    export default {

        components: {
            Repo
        },
        computed: {
            ...mapGetters([
                'repos'
            ])
        },

        data () {
            return {
                repoName: ''
            }
        },

        methods: {
            addRepo() {
                if( this.repoName.trim() ) {
                    reposRef.push({
                        repoName: this.repoName,
                        pixels:{
                            show: "false"
                        }
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