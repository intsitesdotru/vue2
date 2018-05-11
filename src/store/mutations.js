import {
  IS_AUTHENTICATED, STATIONS, ROADS, VEHICLE_TYPES, LOADING, ERROR
} from './mutation-types'

export const mutations = {
  [IS_AUTHENTICATED] (state, payload) {
    state.isAuthenticated = payload
  },
  [STATIONS] (state, payload) {
    state.stations = payload
  },
  [ROADS] (state, payload) {
    state.roads = payload
  },
  [VEHICLE_TYPES] (state, payload) {
    state.vehicleTypes = payload
  },
  [LOADING] (state, payload) {
    state.loading = payload
  },
  [ERROR] (state, payload) {
    state.error = payload
  }
}
