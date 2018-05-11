<template>
  <v-app>
    <v-navigation-drawer
      v-if="isAuthenticated"
      app
      v-model="drawer"
      mobile-break-point="1023"
    >
      <container-filters @hideDrawer="drawer = false"></container-filters>
    </v-navigation-drawer>
    <v-toolbar
      v-if="isAuthenticated"
      app
    >
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon v-html="drawer ? 'chevron_left' : 'chevron_right'"></v-icon>
      </v-btn>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="titleApp"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn flat @click="userSignOut">
        <v-icon left>exit_to_app</v-icon>
        Выйти
      </v-btn>
    </v-toolbar>

    <v-toolbar
      v-if="!isAuthenticated"
      app
    >
      <v-toolbar-title v-text="titleApp"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn :icon="$vuetify.breakpoint.xsOnly" primary to="/signin">
        <v-icon :left="!$vuetify.breakpoint.xsOnly">lock_open</v-icon>
        <span v-if="!$vuetify.breakpoint.xsOnly">Вход</span>
      </v-btn>
      <v-btn :icon="$vuetify.breakpoint.xsOnly" primary to="/signup">
        <v-icon :left="!$vuetify.breakpoint.xsOnly">person</v-icon>
        <span v-if="!$vuetify.breakpoint.xsOnly">Регистрация</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-alert error dismissible v-model="alert">{{ error }}</v-alert>
      </v-container>

      <main>
        <v-container fluid>
          <router-view />
        </v-container>
      </main>
    </v-content>

    <v-footer
      app
      absolute
      inset
    >
      <span>&nbsp; &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import ContainerFilters from './components/ContainerFilters'

  export default {
    data () {
      return {
        drawer: this.$vuetify.breakpoint.xsOnly,
        fixed: false,
        titleApp: 'Vagony',
        alert: false
      }
    },
    computed: {
      error () {
        return this.$store.getters.error
      },
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      }
    },
    watch: {
      error (value) {
        if (value) {
          this.alert = true
        }
      },
      alert (value) {
        if (!value) {
          this.$store.dispatch('setError', null)
        }
      }
    },
    methods: {
      userSignOut () {
        this.$store.dispatch('userSignOut')
      }
    },
    name: 'App',
    components: {
      ContainerFilters
    }
  }
</script>
