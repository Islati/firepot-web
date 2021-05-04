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
          <v-col sm="4">
            <div class="d-flex align-center" @click="$router.push('/')" style="cursor: pointer;">
              <v-img
                  alt="Firepot Logo"
                  class="shrink mr-2"
                  contain
                  src="./assets/fire.png"
                  transition="scale-transition"
                  width="40"
                  @click="this.$router.push('/home');"
              />
              <h1>FirePot</h1>
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col sm="3" class="mt-3">
            <OrderingInfoModal @close="orderingInfoModalVisible = false" :visible="orderingInfoModalVisible" max-width="800px"></OrderingInfoModal>
            <v-btn rounded color="info" active-class="" text @click="orderingInfoModalVisible = true">How to Order</v-btn>
          </v-col>


<!--          <v-col sm="1" class="mt-3">-->
<!--            &lt;!&ndash;            <v-btn icon to="/login">&ndash;&gt;-->
<!--            &lt;!&ndash;              <v-icon>mdi-account-circle</v-icon>&ndash;&gt;-->
<!--            &lt;!&ndash;            </v-btn>&ndash;&gt;-->

<!--            &lt;!&ndash;            TODO Implement Render of this bar only if they're not logged in. otherwise it's the other one. (logged in bar)&ndash;&gt;-->
<!--            <v-menu offset-y>-->

<!--              <template v-slot:activator="{on : {click}}">-->
<!--                <v-btn icon @click="click">-->
<!--                  <v-icon>mdi-account-circle</v-icon>-->
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

<!--                  <v-divider v-if="this.$store.getters.isAdmin"></v-divider>-->
<!--                  <v-list-item to="/admin" link v-if="this.$store.getters.isAdmin">-->
<!--                    <v-list-item-content>-->
<!--                      <v-list-item-title class="text&#45;&#45;primary">Admin Panel</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                  </v-list-item>-->
<!--                </v-list-item-group>-->
<!--              </v-list>-->
<!--            </v-menu>-->
<!--          </v-col>-->

<!--          <v-col sm="1" class="mt-3" v-if="this.isLoggedIn">-->
<!--            <v-menu offset-y>-->

<!--              <template v-slot:activator="{on : {click}}">-->
<!--                <v-btn icon @click="click">-->
<!--                  <v-icon>mdi-store</v-icon>-->
<!--                </v-btn>-->
<!--              </template>-->
<!--              <v-list>-->
<!--                <v-list-item-group>-->
<!--                  <v-list-item to="/store" link v-if="this.$store.getters.isLoggedIn">-->
<!--                    <v-list-item-content>-->
<!--                      <v-list-item-title class="text&#45;&#45;primary">Shop</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                  </v-list-item>-->

<!--                  <v-list-item to="/cart" link v-if="this.$store.getters.isLoggedIn">-->
<!--                    <v-list-item-content>-->
<!--                      <v-list-item-title class="text&#45;&#45;primary">Cart</v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                  </v-list-item>-->
<!--                </v-list-item-group>-->
<!--              </v-list>-->
<!--            </v-menu>-->
<!--          </v-col>-->

        </v-row>
      </v-container>


    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import OrderingInfoModal from "@/views/store/OrderingInfoModal";
export default {
  name: 'App',
  components: {OrderingInfoModal},
  data: () => ({
    selectedLoginItem: -1,
    orderModalVisible: false
  }),
  computed: {
    orderingInfoModalVisible: {
      get() {
        return this.orderModalVisible;
      },
      set(value) {
        this.orderModalVisible = value;
      }
    }
  },
}
</script>
