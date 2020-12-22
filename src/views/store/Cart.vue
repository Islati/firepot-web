<template>
  <v-container class="d-flex justify-center">

    <confirm ref="confirm"></confirm>

    <v-row class="justify-center">
      <v-col sm="6">
        <v-card>
          <v-card-title class="justify-center"><h2>Your Items</h2></v-card-title>

          <v-card-text>

            <v-list three-line>
              <template v-for="(item, index) in this.genCartData()">
                <v-row :key="index">

                  <v-list-item>
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
                              <div>{{ item.description }}</div>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col sm="1">
                          <v-icon @click="removeFromCart(item.productId)">mdi-close</v-icon>
                        </v-col>
                      </v-row>


                    </v-list-item-content>

                  </v-list-item>

                  <v-divider inset></v-divider>
                </v-row>

              </template>
            </v-list>

          </v-card-text>

          <v-card-text>
            <v-row>
              <v-col sm="3" offset-sm="2">
                <h2>Total: <small>${{ genCartTotal() }}</small></h2>
              </v-col>

              <v-spacer></v-spacer>
              <v-col sm="3">
                <v-btn color="success" outlined text>Checkout</v-btn>
              </v-col>
            </v-row>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Confirm from "../../Components/Confirm";

export default {
  name: "Cart",
  components: {Confirm},
  data: () => ({
  }),
  methods: {
    async removeFromCart(productId) {
      const confirm = await this.$refs.confirm.open('Delete', 'Are you sure?', {
        color: 'red'
      });

      if (confirm) {
        await this.$store.dispatch('removeFromCart', productId);
        console.log(`Dispatched remove from cart`)
      }

    },
    genCartData() {
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
      console.log(`Gen cart data called`);
      return items;
    },
    genCartTotal() {
      let amount = 0;
      for(let _item of this.genCartData()) {
        amount += _item.unitCost * _item.amount;
      }
      return amount;
    }

  }
}
</script>

<style scoped>

</style>