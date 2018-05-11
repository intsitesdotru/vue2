<template>
  <v-expansion-panel-content :value="false">
    <div slot="header">Дорога поиска</div>
    <v-card>
      <v-card-text class="grey lighten-5">
        <v-select
          clearable
          chips
          deletable-chips
          :items="roads"
          label="Выбрать дорогу"
          multiple
          item-text="name_ru"
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
      roads () {
        return this.$store.getters.roads
      }
    },
    created () {
      if (this.roads.length === 0) {
        this.$store.dispatch('getRoads')
      }
    }
  }
</script>
