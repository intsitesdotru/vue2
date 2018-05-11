<template>
  <v-expansion-panel-content :value="true">
    <div slot="header">Станция поиска</div>
    <v-card>
      <v-card-text class="grey lighten-5">
        <v-select
          label="Код"
          clearable
          :loading="loading"
          :items="stations"
          item-text="name"
          item-value="id"
          v-model="select"
          :value="search"
          autocomplete
        ></v-select>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</template>

<script>
  export default {
    data: () => ({
      select: null,
      search: null
    }),
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      stations () {
        return this.$store.getters.stations
      }
    },
    watch: {
      select (val) {
        console.log(val)
        if (val && val.length < 3) return
        this.checkStations(val)
      }
    },
    methods: {
      checkStations (val) {
        this.$store.dispatch('getStations', val)
      }
    }
  }
</script>
