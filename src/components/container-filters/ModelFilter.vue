<template>
  <v-expansion-panel-content :value="false">
    <div slot="header">Модель вагона</div>
    <v-card>
      <v-card-text class="grey lighten-5">
        <v-select
          clearable
          chips
          deletable-chips
          :items="models"
          label="Выбрать модель"
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
      models: [
        { name_ru: 'модель1', id: 1 },
        { name_ru: 'модель2', id: 2 }
      ],
      selectedTypes: []
    })
  }
</script>
