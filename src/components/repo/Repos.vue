<template>
    <div>
        <input v-model.trim="repoName" @keyup.enter="addRepo"/>

        <div v-for="repo in repos" :key="repo['.key']">
            <router-link
                    tag="button"
                    class="btn btn-primary"
                    :to="{ name: 'repo', params: { id: repo['.key'] } }">
                {{ repo.repoName }}
            </router-link>
        </div>
    </div>
</template>

<script>
    import { reposRef } from '../../store';
    import { mapGetters } from 'vuex';

    export default {
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