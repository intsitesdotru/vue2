<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Filters</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="hideDrawer">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-expansion-panel expand popout>
        <interval-filter></interval-filter>
        <vehicle-types-filter></vehicle-types-filter>
        <stations-filter></stations-filter>
        <roads-filter></roads-filter>
        <model-filter></model-filter>
      </v-expansion-panel>
    </v-card-text>
  </v-card>
</template>

<script>
  import IntervalFilter from './container-filters/IntervalFilter'
  import VehicleTypesFilter from './container-filters/VehicleTypesFilter'
  import StationsFilter from './container-filters/StationsFilter'
  import RoadsFilter from './container-filters/RoadsFilter'
  import ModelFilter from './container-filters/ModelFilter'

  export default {
    data () {
      return {
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }]
      }
    },
    methods: {
      hideDrawer () {
        this.$emit('hideDrawer')
      }
    },
    components: {
      IntervalFilter,
      VehicleTypesFilter,
      StationsFilter,
      RoadsFilter,
      ModelFilter
    }
  }
</script>