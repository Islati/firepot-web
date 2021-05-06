<template>
  <!--TODO  Implement a mood bar! (Progress bars of different colors with labels & percents (showing high levels) of various elements when smoking the kush. -->
  <v-container class="d-flex justify-center">
    <v-col sm="10">
      <v-row>
        <v-card v-if="storeItem !== null">
          <v-row>
            <v-col sm="6">
              <v-carousel v-model="activeCarouselItem">
                <v-carousel-item v-for="(galleryImage, i) in storeItem.images.gallery" :key="i" :src="galleryImage.src"
                                 transition="fade-transition" reverse-transition="fade-transition"></v-carousel-item>
              </v-carousel>
            </v-col>

            <v-col sm="6">
              <v-card-title>{{ storeItem.title }}</v-card-title>
              <v-card-text>
                <div>{{ storeItem.description }}</div>
              </v-card-text>
              <v-card-text>
                <v-chip v-for="tag in storeItem.tags" :key="tag" color="green" text-color="white" class="mx-1">{{
                    tag
                  }}
                </v-chip>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <v-row>
                  <v-col sm="12">
                    <p class="text-subtitle-1">Pricing Breakdown</p>
                  </v-col>
                </v-row>
                <v-row>
                  <ul>
                    <li v-for="product in this.priceSelection" :key="product.index">{{ product }}</li>
                  </ul>
                </v-row>
                <v-row>
                  <v-col offset-sm="8" sm="4">
                    <OrderingInfoModal @close="orderInfoModalVisible = false" :visible="orderInfoModalVisible"
                                       maxWidth="650px"></OrderingInfoModal>
                    <v-btn type="button" text outlined color="info" @click="orderInfoModalVisible = true">
                      Order
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>

        </v-card>
      </v-row>
      <v-row class="my-2">
        <v-btn to="/" text outlined color="red">Back</v-btn>
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
        info.push(`$${product.cost}/${product.name}`)
      }

      return info;
    }
  }
}
</script>

<style scoped>

</style>