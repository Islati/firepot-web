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
          <v-col sm="3">
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

          <v-col sm="1" class="mt-3">
            <v-btn icon to="/login">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>

            <!--            TODO Implement Render of this bar only if they're not logged in. otherwise it's the other one. (logged in bar)-->
<!--            <v-menu offset-y>-->

<!--              <template v-slot:activator="{on : {click}}">-->
<!--                <v-btn icon @click="click">-->
<!--                </v-btn>-->
<!--              </template>-->
<!--              <v-list>-->
<!--                <v-list-item-group>-->
<!--                  <v-list-item to="/login" link v-if="!this.$store.getters.isLoggedIn">-->
<!--                    <v-list-item-content>-->
<!--                      <v-list-item-title class="text&#45;&#45;primary">Login</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                  </v-list-item>-->

<!--                  <v-list-item to="/register" link v-if="!this.$store.getters.isLoggedIn">-->
<!--                    <v-list-item-content>-->
<!--                      <v-list-item-title class="text&#45;&#45;primary">Register</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                  </v-list-item>-->

<!--                  <v-list-item to="/profile" link v-if="this.$store.getters.isLoggedIn">-->
<!--                    <v-list-item-content>-->
<!--                      <v-list-item-title class="text&#45;&#45;primary">Profile</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                  </v-list-item>-->
<!--                </v-list-item-group>-->
<!--              </v-list>-->
<!--            </v-menu>-->
          </v-col>

          <v-col sm="1" class="mt-3" v-if="!this.isLoggedIn">
            <v-btn icon to="/store">
              <v-icon>mdi-store</v-icon>
            </v-btn>
          </v-col>

          <v-col sm="1" class="mt-3" v-if="!this.isLoggedIn">
            <v-btn icon to="/store/cart">
              <v-icon>mdi-cart</v-icon>
            </v-btn>
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
    selectedLoginItem: -1,
  }),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    switchToView(view, clearLoginMenu = false, clearCartMenu = false) {
      console.log(`Switching to view ${view}`)

      if (clearLoginMenu) {
        this.selectedLoginItem = -1;
      }

      if (clearCartMenu) {
        this.selectedCartItem = -1;
      }

      this.$router.push(view);
    },

  }
};
</script>
