// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from 'firebase'
import { firebaseConfig } from './config'

import 'babel-polyfill'
import './vuetify'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged(() => {
  new Vue({
    el: '#app',
    router,
    store,
    created () {
      store.dispatch('autoSignIn')
    },
    components: { App },
    template: '<App/>'
  })

  unsubscribe()
})
