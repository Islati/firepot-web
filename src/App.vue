<template>
  <v-app>
    <v-app-bar
        app

        color="#292928"
        dark
    >
      <v-container>
        <v-row>
          <v-col md="4" sm="2">
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

          <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>

          <v-col sm="3" md="3" offset-md="1" class="mt-2" v-if="this.$store.getters.isAgeVerified">
            <OrderingInfoModal @close="orderingInfoModalVisible = false" :visible="orderingInfoModalVisible"
                               :max-width="$vuetify.breakpoint.mobile ? '95%' : '650px'"></OrderingInfoModal>
            <v-btn rounded color="info" active-class="" text @click="showOrderInfoModal">Ordering</v-btn>
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
