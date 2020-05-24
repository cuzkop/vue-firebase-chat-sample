import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-5J40N_vtBWWPR1-aCD85xMiV-Mjx-sg",
    authDomain: "vue-test-c455b.firebaseapp.com",
    databaseURL: "https://vue-test-c455b.firebaseio.com",
    projectId: "vue-test-c455b",
    storageBucket: "vue-test-c455b.appspot.com",
    messagingSenderId: "997345462412",
    appId: "1:997345462412:web:9a43a7d26af4df7ceb93a9",
    measurementId: "G-5T4898LFFD"

});

export const db = firebaseApp.firestore();
