import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VAlert,
  VBtn,
  VCard,
  VDatePicker,
  VDataTable,
  VExpansionPanel,
  VFooter,
  VGrid,
  VIcon,
  VList,
  VMenu,
  VNavigationDrawer,
  VProgressLinear,
  VSelect,
  VTextField,
  VToolbar,
  transitions
} from 'vuetify'

import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAlert,
    VBtn,
    VCard,
    VDatePicker,
    VDataTable,
    VExpansionPanel,
    VFooter,
    VGrid,
    VIcon,
    VList,
    VMenu,
    VNavigationDrawer,
    VProgressLinear,
    VSelect,
    VTextField,
    VToolbar,
    transitions
  }
})
