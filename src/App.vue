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
          <v-col cols="4">
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
          </v-col>
          <v-spacer></v-spacer>

          <v-col cols="2" class="mt-3">

            <!--            TODO Implement Render of this bar only if they're not logged in. otherwise it's the other one. (logged in bar)-->
            <v-menu offset-y>
              <template v-slot:activator="{on, attrs}">
                <v-icon v-bind="attrs" v-on="on">mdi-account-circle</v-icon>
              </template>
              <v-list>
                <v-list-item-group active-class="" v-model="selectedItem" color="success">
                  <v-list-item @click="switchToView('/login')">
                    <v-list-item-content>
                      <v-list-item-title class="text--primary">Login</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="text--primary">Register</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-col>

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
    selectedItem: 0
  }),
  methods: {
    switchToView(view) {
      console.log(`Switching to view ${view}`)
      this.$router.push(view);
    }
  }
};
</script>
