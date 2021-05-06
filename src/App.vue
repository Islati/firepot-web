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
            <div class="d-flex align-center" @click="logoClick" style="cursor: pointer;">
              <v-img
                  alt="Firepot Logo"
                  class="shrink mr-2"
                  contain
                  src="@/assets/fire.png"
                  transition="scale-transition"
                  width="40"
                  @click="logoClick"
              />
              <h1>FirePot</h1>
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col sm="3" class="mt-3" v-if="this.$store.getters.isAgeVerified">
            <OrderingInfoModal @close="orderingInfoModalVisible = false" :visible="orderingInfoModalVisible"
                               max-width="650px"></OrderingInfoModal>
            <v-btn rounded color="info" active-class="" text @click="showOrderInfoModal">How to Order</v-btn>
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

import OrderingInfoModal from "@/views/store/OrderingInfoModal";

export default {
  name: 'App',
  components: {OrderingInfoModal},
  data: () => ({
    selectedLoginItem: -1,
    orderModalVisible: false
  }),
  methods: {
    showOrderInfoModal() {
      if (this.orderingInfoModalVisible || !this.$store.getters.isAgeVerified) {
        return;
      }

      this.orderingInfoModalVisible = true;
    },
    logoClick() {
      if (!this.$store.getters.isAgeVerified) {
        this.$router.push("/verify").catch(e => {
        })
        return;
      }

      this.$router.push("/store").catch(e => {
      })
    }
  },
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
