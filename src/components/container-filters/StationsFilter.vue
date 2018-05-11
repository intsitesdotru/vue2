<template>
  <v-expansion-panel-content :value="true">
    <div slot="header">Станция поиска</div>
    <v-card>
      <v-card-text class="grey lighten-5">
        <v-select
          label="Код"
          autocomplete
          clearable
          :loading="loading"
          :items="stations"
          item-text="name"
          item-value="id"
          return-object
          :search-input.sync="search"
          v-model="select"
          @input="onChange"
          @update:searchInput="updateSearchInput"
        ></v-select>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</template>

<script>
  export default {
    data: () => ({
      select: null,
      search: null,
      isChanged: false
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
      search (val) {
        if (!val || val.length < 3) return
        // console.log(this.isChanged)
        if (this.isChanged) {
          // console.log(this.search)
          // console.log(this.select.name)
          // console.log(this.select)
          return
        }
        this.checkStations(val)
      }
    },
    methods: {
      checkStations (val) {
        this.$store.dispatch('filterStationsByCodes', val)
      },
      onChange () {
        this.isChanged = true
      },
      updateSearchInput () {
        console.log('updateSearchInput')
      }
    }
  }
</script>
