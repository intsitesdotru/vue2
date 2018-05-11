export const getters = {
  stations (state) {
    return state.stations
  },
  roads (state) {
    return state.roads
  },
  vehicleTypes (state) {
    return state.vehicleTypes
  },
  error (state) {
    return state.error
  },
  loading (state) {
    return state.loading
  },

  isAuthenticated (state) {
    return state.isAuthenticated
  }
}
