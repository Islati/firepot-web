<template>
  <v-container class="d-flex justify-center">
    <v-row>
      <v-col sm="12">
        <v-card>
          <v-card-title class="justify-center">Page Not Found</v-card-title>

          <v-card-text>
            <v-row class="justify-center">
              <p>There was an error when locating the page @ {{ $route.fullPath }}.</p>
            </v-row>

            <v-row class="justify-center">
              <p>You will be redirected to the appropriate page in 3 seconds.</p>
            </v-row>

            <v-row class="justify-center">
              <v-btn type="button" color="success" text outlined rounded to="/">Click here to continue!</v-btn>
            </v-row>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageNotFound",
  created() {
    let vm = this;

    let redirect = () => {
      this.$router.push('/').catch((e) => {
      });
    }

    setTimeout(redirect, 3)
  },
}
</script>

<style scoped>

</style>