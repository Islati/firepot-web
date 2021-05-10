<template>
  <!--TODO  Implement a mood bar! (Progress bars of different colors with labels & percents (showing high levels) of various elements when smoking the kush. -->
  <v-container class="d-flex justify-center">
    <v-col sm="10">
      <v-row>
        <v-card v-if="storeItem !== null">
          <v-row>
            <v-col sm="4" md="5">
              <v-carousel v-model="activeCarouselItem" continuous
                          :height="$vuetify.breakpoint.mobile ? '420px' : '600px'">
                <v-carousel-item v-for="(galleryImage, i) in storeItem.images.gallery" :key="i"
                                 transition="fade-transition" reverse-transition="fade-transition">
                  <v-img :lazy-src="galleryImage.src" contain :src="galleryImage.src"></v-img>
                </v-carousel-item>
              </v-carousel>
            </v-col>

            <v-col sm="8" md="7">
              <v-card-title class="text-center justify-center">{{ storeItem.title }}</v-card-title>
              <v-card-text>
                <v-row>
                  <p class="text-center">{{ storeItem.description }}</p>

                </v-row>

                <v-row class="justify-center">
                  <v-chip v-for="tag in storeItem.tags" :key="tag" color="green" text-color="white" class="mx-1">{{
                      tag
                    }}
                  </v-chip>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <v-row class="justify-center">
                  <v-col sm="12">
                    <p class="text-subtitle-1 text-center">Pricing Breakdown</p>
                  </v-col>
                </v-row>
                <v-row class="justify-center">
                  <ul>
                    <li v-for="product in this.priceSelection" :key="product.index">{{ product }}</li>
                  </ul>
                </v-row>
                <v-row class="justify-center" v-if="!$vuetify.breakpoint.mobile">
                  <v-col sm="2" class="justify-center">
                    <v-btn to="/" text outlined color="red">Back</v-btn>
                  </v-col>
                  <v-col sm="2" class="justify-center">
                    <OrderingInfoModal @close="orderInfoModalVisible = false" :visible="orderInfoModalVisible"
                                       max-width="650px"></OrderingInfoModal>
                    <v-btn type="button" text outlined color="info" @click="orderInfoModalVisible = true">
                      Order
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row class="justify-center mt-2" v-else>
                  <OrderingInfoModal @close="orderInfoModalVisible = false" :visible="orderInfoModalVisible"
                                     max-width="95%"></OrderingInfoModal>
                  <v-btn type="button" text outlined color="info" @click="orderInfoModalVisible = true">
                    Order
                  </v-btn>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>

        </v-card>
      </v-row>
      <v-row class="my-2">
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import OrderingInfoModal from "@/views/store/OrderingInfoModal";

export default {
  name: "StoreItem",
  components: {OrderingInfoModal},
  data: () => ({
    activeCarouselItem: 0,
    selectedProductItem: 0,
    selectedProductId: 0,
    storeItem: null,
    orderInfoModalVisible: false
  }),
  mounted() {
    if (this.$vuetify.breakpoint.mobile) {

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }, 250)

    }
  },
  methods: {
    selectProduct: function (id) {
      this.selectedProductId = id;
    },
    async addProductToCart(id, amount) {
      await this.$store.dispatch('addToCart', id, amount);
      this.$toast.success("Added to cart", {duration: 2200})
    }
  },
  created() {
    let itemId = this.$route.params.itemId;
    for (const _item of this.$store.state.store.inventory) {
      if (_item.id != itemId) {
        continue;
      }

      this.storeItem = _item;

      this.selectedProductId = _item.products[0].id;
      break;
    }
  },
  computed: {
    showOrderModal: {
      get() {
        return this.orderInfoModalVisible;
      },
      set(value) {
        this.orderInfoModalVisible = value;
      }
    },
    selectedProductPrice() {
      let cost = "N/A"
      for (let product of this.storeItem.products) {
        if (product.id !== this.selectedProductId) {
          continue;
        }
        cost = `$${product.cost}`;
        break;
      }
      return cost;
    },
    priceSelection() {
      let info = [];

      for (let product of this.storeItem.products) {
        if (product.available !== undefined && product.available === false) {
          continue;
        }
        info.push(`$${product.cost}/${product.name}`)
      }

      return info;
    }
  }
}
</script>

<style scoped>

</style>