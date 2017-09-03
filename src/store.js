import Vue from 'vue';
import Vuex from 'vuex';

import { firebaseMutations, firebaseAction } from 'vuexfire';
import firebase from 'firebase';

Vue.use(Vuex);

const db = firebase.initializeApp({
    apiKey: "AIzaSyBII4YuMsEIqBSSN6WNqaVmmzeLHsvWS-g",
    authDomain: "vue-get-committed.firebaseapp.com",
    databaseURL: "https://vue-get-committed.firebaseio.com",
    projectId: "vue-get-committed",
    storageBucket: "vue-get-committed.appspot.com",
    messagingSenderId: "447622295395"
}).database();

export const reposRef = db.ref('repos');

export const store = new Vuex.Store({

    strict: true,

    state: {
        repos: [], // Will be bound as an array
    },

    mutations: firebaseMutations,

    getters: {
        repos: state => state.repos
    },

    actions: {
        setReposRef: firebaseAction( ( { bindFirebaseRef }, ref) => {
            bindFirebaseRef('repos', ref)
        })
    }
});