<template>
    <div class="container is-fluid">
        <div class="input-form-container">
            <input v-model.trim="repoName" @keyup.enter="addRepo" class="input" type="text" placeholder="Create a Repository" />
        </div>
        <div v-for="repo in repos" :key="repo['.key']">
            <div class="field">
                <div class="control">
                    <div class="repos-container">
                        <router-link
                            tag="a"
                            class="repo-link"
                            :to="{ name: 'repo', params: { id: repo['.key'] } }">
                            <span class="subtitle name">{{ repo.repoName }}</span>
                        </router-link>
                        <button @click="deleteRepo(repo)">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
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
            deleteRepo(repo) {
                reposRef.child(repo['.key']).remove();
            }
        },

        mounted () {
          this.$store.dispatch('setReposRef', reposRef);
        }

    }
</script>

<style lang="scss">
    .input-form-container {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .repos-container {
        text-align: center;
        span.name {
            font-size: 36px !important;

            &:hover{
                color: #aa66ff;
                text-decoration: underline;
            }
        }
    }
</style>