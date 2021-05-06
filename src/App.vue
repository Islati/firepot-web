<template>
  <v-app>
    <v-app-bar
        app
        color="#292928"
        dark
        elevation="1"
    >
      <v-container>
        <v-row>
          <v-col md="4" xs="2">
            <div class="d-flex align-center" @click="logoClick" style="cursor: pointer;">
              <v-img
                  alt="Firepot Logo"
                  class="shrink mr-2"
                  contain
                  src="@/assets/fire.png"
                  transition="scale-transition"
                  width="40px"
                  @click="logoClick"
              />
              <h3 v-if="$vuetify.breakpoint.mobile">FirePot</h3>
            </div>
          </v-col>

          <v-spacer v-if="$vuetify.breakpoint.smAndUp"></v-spacer>

          <v-col xs="2" md="3" offset-md="1" sm="3" :class="!$vuetify.breakpoint.mobile ? 'mt-3' : ''" v-if="this.$store.getters.isAgeVerified">
            <OrderingInfoModal @close="orderingInfoModalVisible = false" :visible="orderingInfoModalVisible"
                               :max-width="$vuetify.breakpoint.mobile ? '95%' : '650px'"></OrderingInfoModal>
            <v-btn rounded color="info" text @click="showOrderInfoModal">Order</v-btn>
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
