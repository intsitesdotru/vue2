<template>
  <v-expansion-panel-content :value="false">
    <div slot="header">Тип ПС</div>
    <v-card>
      <v-card-text class="grey lighten-5">
        <v-select
          clearable
          chips
          deletable-chips
          :items="vehicleTypes"
          label="Выбрать тип"
          multiple
          item-text="name"
          item-value="id"
          v-model="selectedTypes"
        ></v-select>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</template>

<script>
  export default {
    data: () => ({
      selectedTypes: []
    }),
    computed: {
      vehicleTypes () {
        return this.$store.getters.vehicleTypes
      }
    },
    created () {
      if (this.vehicleTypes.length === 0) {
        this.$store.dispatch('getVehicleTypes')
      }
    }
  }
</script>
