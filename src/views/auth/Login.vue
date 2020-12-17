<template>
  <v-container class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col sm="5">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col sm="12">
                <v-text-field v-model="email" label="Email" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="12">
                <v-text-field v-model="password" label="Password"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn outlined rounded text color="success">Login</v-btn>
            <v-btn outlined rounded text color="primary" @click="$router.push('register')">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data: () => ({
    email: "",
    password: ""
  })

}
</script>

<style scoped>

</style>