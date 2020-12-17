<template>
  <v-app>
    <v-app-bar
        app
        absolute
        color="#292928"
        dark
    >
      <v-container>
        <v-row>
          <v-cols cols="4">
            <div class="d-flex align-center">
              <v-img
                  alt="Firepot Logo"
                  class="shrink mr-2"
                  contain
                  src="./assets/fire.png"
                  transition="scale-transition"
                  width="40"
              />
              <h1>FirePot</h1>
            </div>
          </v-cols>
          <v-spacer></v-spacer>
          <v-cols cols="2" class="mt-3">

            <v-menu offse-y>
              <template v-slot:activator="{on, attrs}">

                <v-icon v-bind="attrs" v-on="on">mdi-account</v-icon>

              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Login</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Register</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-cols>

        </v-row>
      </v-container>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
