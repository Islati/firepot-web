<template>
  <v-container class="d-flex justify-center">

    <confirm ref="confirm"></confirm>

    <v-row class="justify-center">
      <v-col sm="6">
        <v-card>
          <v-card-title class="justify-center"><h2>Cart Items</h2></v-card-title>

          <v-card-text>
            <cart-items :remove-from-cart="removeFromCart"></cart-items>
          </v-card-text>

          <v-card-text>


            <v-row>
              <v-col sm="9" offset-sm="1">
                <h3><small>+ Shipping Cost: <i>$20</i> (Canada Post Express, 3 - 5 business days)</small></h3>
              </v-col>
            </v-row>

            <v-row>
              <v-col sm="3" offset-sm="1">
                <h2>Total: <small>${{ genCartTotal(this.$store.state.cart,this.$store.state.store.inventory) }}</small></h2>
              </v-col>

              <v-spacer></v-spacer>
              <v-col sm="3">
                <v-btn color="success" outlined text @click="checkout()">Checkout</v-btn>
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
import Confirm from "@/Components/Confirm";
import cartMixin from "@/plugins/cartMixin";
import CartItems from "@/Components/CartItems";

export default {
  name: "Cart",
  components: {CartItems, Confirm},
  data: () => ({}),
  mixins: [cartMixin],
  methods: {
    async removeFromCart(productId) {
      const confirm = await this.$refs.confirm.open('Delete', 'Are you sure?', {
        color: 'red'
      });

      if (confirm) {
        await this.$store.dispatch('removeFromCart', productId);
        this.$toast.success("Removed item from cart");
      }
    },
    async checkout() {
      const confirm = await this.$refs.confirm.open('Place Order', 'Confirm your order.', {icon: 'mdi-check'});

      if (confirm) {
        await this.$store.dispatch('submitOrder');
        this.$toast.success("Order Submitted");
        setTimeout(() => {
          this.$router.push({name: 'order', params: {orderId: 1}});
        })
      }
    },
  },
}
</script>

<style scoped>

</style>