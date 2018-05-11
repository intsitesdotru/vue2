<template>
  <v-expansion-panel-content key="Xs" :value="true">
    <div slot="header">Период прибытия вагонов</div>
    <v-card>
      <v-card-text class="grey lighten-5">
        <v-menu
          ref="menuStart"
          lazy
          :close-on-content-click="false"
          v-model="menuStart"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          min-width="290px"
          :return-value.sync="startIntervalDate"
        >
          <v-text-field
            slot="activator"
            label="Начало периода"
            v-model="startIntervalDate"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="startIntervalDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menuStart = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menuStart.save(startIntervalDate)">OK</v-btn>
          </v-date-picker>
        </v-menu>

        <v-menu
          ref="menuEnd"
          lazy
          :close-on-content-click="false"
          v-model="menuEnd"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          min-width="290px"
          :return-value.sync="endIntervalDate"
        >
          <v-text-field
            slot="activator"
            label="Окончание периода"
            v-model="endIntervalDate"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="endIntervalDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menuEnd = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menuEnd.save(endIntervalDate)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</template>

<script>
  export default {
    data: () => ({
      startIntervalDate: null,
      endIntervalDate: null,
      menuStart: false,
      menuEnd: false
    })
  }
</script>
