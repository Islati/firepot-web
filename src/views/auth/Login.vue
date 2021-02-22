<template>
  <v-container class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col sm="5">
        <v-form ref="form" v-model="valid" @submit.prevent="submit" lazy-validation>
          <v-card>
            <v-card-text>
              <v-row v-if="errorMessage.length > 0" justify="center">
                <v-alert type="error">
                  {{ errorMessage }}
                </v-alert>
              </v-row>

              <v-row>
                <v-col sm="12">
                  <v-text-field v-model="email" label="Email" :rules="emailRules" counter required
                                clearable></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="12">
                  <v-text-field v-model="password" :rules="passwordRules" counter label="Password"
                                clearable></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn outlined rounded text color="success" type="submit">Login</v-btn>
              <v-spacer></v-spacer>
              <v-btn outlined rounded text color="primary" @click="$router.push('register')">Register</v-btn>
            </v-card-actions>
          </v-card>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

const axios = require('axios').default;

export default {
  name: "Login",

  data: () => ({
    valid: true,
    errorMessage: "",
    email: "",
    emailRules: [
      v => !!v || "Email is required",
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 8) || "Password must be atleast 8 characters"
    ]
  }),
  methods: {
    submit(e) {

      e.preventDefault();

      if (!this.$refs.form.validate()) {
        e.preventDefault();
        return;
      }

      let vm = this;

      axios({
        url: "http://www.localhost:5000/auth/login/",
        method: "POST",
        responseType: 'JSON',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          email: vm.$data.email,
          password: vm.$data.password
        })
      }).then(response => {
        if (response.status !== 200) {
          this.errorMessage = response.statusText;
          return;
        }

        let json = response.data;

        if (json['status'] !== "success") {
          this.errorMessage = json['message'];
          return;
        }

        let auth = json['payload']['auth'];
        vm.$store.commit('setAuthToken', {token: auth, admin: json['payload']['admin']});


        vm.$router.push({path: "/home"});
      });

      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>