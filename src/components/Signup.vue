<template>
  <v-layout column>
    <v-flex xs12 text-xs-center mt-5>
      <h3>Регистрация</h3>
    </v-flex>
    <v-flex xs12 sm4 offset-sm4 mt-3>
      <form @submit.prevent="userSignUp">
        <v-layout column>
          <v-flex>
            <v-text-field
              name="email"
              label="Email"
              id="email"
              type="email"
              v-model="email"
              required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name="password"
              label="Password"
              id="password"
              type="password"
              v-model="password"
              required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              v-model="passwordConfirm"
              :rules="[comparePasswords]"
            ></v-text-field>
          </v-flex>
          <v-flex class="text-xs-center" mt-5>
            <v-btn color="primary" type="submit" :disabled="loading">Зарегистрироваться</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        passwordConfirm: '',
        alert: false
      }
    },
    computed: {
      comparePasswords () {
        return this.password === this.passwordConfirm ? true : 'Passwords don\'t match'
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      userSignUp () {
        if (this.comparePasswords !== true) {
          return
        }
        this.$store.dispatch('userSignUp', { email: this.email, password: this.password })
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
          this.$store.dispatch('error', null)
        }
      }
    }
  }
</script>