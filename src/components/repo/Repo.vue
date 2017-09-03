<template>
    <button @click="showPixels(repos, repo)">
      {{ repo.repoName }}
    </button>
</template>

<script>
  import { reposRef } from '../../store'

  export default {
    props:["repo", "repos"],

    methods: {
        showPixels: function (repos, repo) {
            repos.map( repoNeeded => {
                if(repoNeeded['.key'] === repo['.key'] ){
                    reposRef.child(repoNeeded['.key']).child('pixels').child('show').set(true);
                } else {
                    reposRef.child(repoNeeded['.key']).child('pixels').child('show').set(false);
                }
            })
        }
    }
  }
</script>
