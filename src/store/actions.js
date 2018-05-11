import {
  IS_AUTHENTICATED, STATIONS, ROADS, VEHICLE_TYPES, LOADING, ERROR
} from './mutation-types'

import axios from 'axios'
import {API_BASE} from '../config'

import firebase from 'firebase'
import router from '@/router'

export const actions = {
  filterStationsByCodes ({ commit }, payload) {
    commit(LOADING, true)
    axios.get(`${API_BASE}/stations?filter=${payload}`)
      .then(r => {
        commit(STATIONS, r.data)
        commit(LOADING, false)
        commit(ERROR, null)
      })
      .catch(error => {
        commit(LOADING, false)
        commit(ERROR, '/stations?filter ' + error.message)
      })
  },

  getRoads ({ commit }) {
    commit(LOADING, true)

    axios.get(`${API_BASE}/roads`)
      .then(r => {
        commit(ROADS, r.data)
        commit(LOADING, false)
        commit(ERROR, null)
      })
      .catch(error => {
        commit(LOADING, false)
        commit(ERROR, '/roads' + error.message)
      })
  },

  getVehicleTypes ({ commit }) {
    commit(LOADING, true)

    axios.get(`${API_BASE}/vehicle-types`)
      .then(r => {
        commit(VEHICLE_TYPES, r.data)
        commit(LOADING, false)
        commit(ERROR, null)
      })
      .catch(error => {
        commit(LOADING, false)
        commit(ERROR, '/vehicle-types ' + error.message)
      })
  },

  setError ({ commit }, payload) {
    commit(ERROR, payload)
    commit(LOADING, false)
  },

  setLoading ({ commit }, payload) {
    commit(LOADING, payload)
  },

  userSignUp ({commit}, payload) {
    commit(LOADING, true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit(IS_AUTHENTICATED, true)
        commit(LOADING, false)
        commit(ERROR, null)
        router.push('/')
      })
      .catch(error => {
        commit(ERROR, error.message)
        commit(LOADING, false)
      })
  },
  userSignIn ({commit}, payload) {
    commit(LOADING, true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit(IS_AUTHENTICATED, true)
        commit(LOADING, false)
        commit(ERROR, null)
        router.push('/')
      })
      .catch(error => {
        commit(ERROR, error.message)
        commit(LOADING, false)
      })
  },
  autoSignIn ({commit}, payload) {
    commit(IS_AUTHENTICATED, true)
  },
  userSignOut ({commit}) {
    firebase.auth().signOut()
    commit(IS_AUTHENTICATED, false)
    router.push('' +
      '/signin')
  }
}
