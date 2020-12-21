<template>
  <v-container class="d-flex justify-center">
    <v-col sm="8">
      <v-card v-if="storeItem !== null">
        <v-row>
          <v-col sm="4">
            <v-carousel v-model="activeCarouselItem">
              <v-carousel-item v-for="(galleryImage, i) in storeItem.images.gallery" :key="i" :src="galleryImage.src"
                               transition="fade-transition" reverse-transition="fade-transition"></v-carousel-item>
            </v-carousel>
          </v-col>

          <v-col sm="8">
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
              <v-chip-group v-model="selectedProductItem">
                <v-chip v-for="product in storeItem.products" :key="product.id" @click="selectProduct(product.id)"
                        color="white" text-color="black">{{ product.name }}
                </v-chip>
              </v-chip-group>
              <div>Select your desired amount</div>
            </v-card-text>
            <v-card-title v-if="selectedProductId != 0">{{ selectedProductPrice }}</v-card-title>
            <v-card-actions>
              <v-btn text color="deep-purple darken-1" @click="$store.dispatch('addToCart',selectedProductId,1)" :disabled="disableCartButton">
                Add to
                Cart
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "StoreItem",
  data: () => ({
    activeCarouselItem: 0,
    selectedProductItem: 0,
    selectedProductId: 0,
    storeItem: null
  }),
  methods: {
    selectProduct: function (id) {
      this.selectedProductId = id;
    }
  },
  created() {
    let itemId = this.$route.params.itemId;
    console.log(`Lookgin for item ID ${itemId}`);
    for (const _item of this.$store.state.store.inventory) {
      if (_item.id != itemId) {
        console.log(`Store item ${_item.id} doesn't match requested id ${itemId}`);
        continue;
      }

      this.storeItem = _item;
      console.log(`Store Item selected: ${this.storeItem.id}`)
      break;
    }
  },
  computed: {
    disableCartButton() {
      return this.selectedProductId == 0;
    },
    selectedProductPrice() {
      let cost = "N/A"
      for (let product of this.storeItem.products) {
        if (product.id != this.selectedProductId) {
          continue;
        }
        cost = `$${product.cost}`;
        break;
      }
      return cost;
    }
  }
}
</script>

<style scoped>

</style>