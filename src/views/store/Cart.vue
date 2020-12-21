<template>
  <v-container class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col sm="6">
        <v-card>
          <v-card-title class="justify-center"><h2>Your Items</h2></v-card-title>

          <v-card-text>

            <v-list three-line>
              <template v-for="(item, index) in cartItems">
                <v-row :key="item.productId">

                  <v-list-item :key="index">
                    <v-list-item-avatar size="150" rounded>
                      <v-img :src="item.images.cover"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-row>
                        <v-col sm="11">
                          <v-row>
                            <v-col sm="6">
                              <v-list-item-title><h2>{{ item.title }}</h2></v-list-item-title>
                              <v-chip color="deep-purple lighten-1" text-color="white">{{ item.weight }}</v-chip>
                              <v-chip color="green lighten-1" class="ml-1" text-color="white" v-for="tag in item.tags"
                                      :key="tag">{{ tag }}
                              </v-chip>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col sm="12">
                              <div>{{item.description}}</div>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col sm="1">
                          <v-icon @click="$store.dispatch('removeFromCart',item.productId)">mdi-close</v-icon>
                        </v-col>
                      </v-row>


                    </v-list-item-content>

                  </v-list-item>

                </v-row>

                <v-divider inset :key="index"></v-divider>

              </template>
            </v-list>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Cart",
  data: () => ({}),
  methods: {},
  computed: {
    cartItems() {
      var items = [];


      for (let _cartItem of this.$store.state.cart) {
        /* Find the store item that has their product id */
        for (let _storeItem of this.$store.state.store.inventory) {
          /* Look for their item ids */
          for (let _product of _storeItem.products) {

            /*
            If this product is not the one the user has selected
            then we're not going to process
            */
            if (_cartItem.id !== _product.id) {
              continue;
            }


            /* Build an object for the item in their cart */
            items.push({
              title: `${_storeItem.title}`,
              weight: `${_product.name}`,
              unitCost: `${_product.cost}`,
              amount: `${_cartItem.amount}`,
              description: `${_storeItem.description}`,
              images: _storeItem.images,
              productId: _product.id,
              itemId: _storeItem.id,
              tags: _storeItem.tags,

            });
            break;
          }
        }
      }

      return items;
    }
  }
}
</script>

<style scoped>

</style>