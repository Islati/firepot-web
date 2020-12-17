<template>
  <v-container class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col sm="5">
        <form @submit.prevent="submit">
          <v-card>
            <v-card-title class="text-center">Register</v-card-title>
            <v-card-text>
              <v-row v-if="errorMessage.length > 0" justify="center">
                <v-alert type="error">
                  {{ errorMessage }}
                </v-alert>
              </v-row>

              <v-row>
                <v-col sm="6">
                  <v-text-field v-model="firstName" label="First Name" required clearable></v-text-field>
                </v-col>

                <v-col sm="6">
                  <v-text-field v-model="lastName" label="Last Name" required clearable></v-text-field>
                </v-col>
              </v-row>
              <v-row>
              </v-row>
              <v-row>
                <v-col sm="12">
                  <v-text-field v-model="email" label="Email" required clearable></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="12">
                  <v-text-field v-model="password" label="Password" required></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn outlined rounded text color="success">Join</v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

const axios = require('axios').default;

export default {
  name: "Login",

  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    errorMessage: ""
  }),
  methods: {
    submit: function (e) {

      let vm = this;

      axios({
        url: 'http://localhost:5000/auth/register/',
        method: 'POST',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          firstName: vm.$data.firstName,
          lastName: vm.$data.lastName,
          email: vm.$data.email,
        })
      }).then(response => {
        let json = response.data;

        if (json['status'] !== 'success') {
          this.errorMessage = json['message'];
          return;
        }

        let auth = json['payload']['auth'];
        vm.$store.commit('setAuthToken', auth);

        vm.$router.push({path: "/home"})
      })

      e.preventDefault();
    }
  }

}
</script>

<style scoped>

</style>