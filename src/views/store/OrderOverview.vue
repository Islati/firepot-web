<template>
  <!--  Checkout page is after the cart is submitted, checkout holds payment instructions.-->
  <v-container class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col sm="6">
        <v-card class="justify-center">
          <v-card-title class="justify-center"><h3>Order Confirmed</h3></v-card-title>

          <v-row class="justify-center my-2">
            <div>Thanks for your support :)</div>
          </v-row>

          <v-divider></v-divider>

          <v-row class="justify-center mt-4">
            <div class="font-weight-bold">How to Pay</div>
          </v-row>
          <v-row class="justify-center mt-2">
            <ol>
              <li class="mb-1">Add "freshdaddyb@gmail.com" to your bank contacts with the name "Brandon C".</li>
              <small><i>Please use discretion and avoid names with words such as "cannabis, pot, dope, weed"
                etc.</i></small>
              <li class="mt-1">Transfer ${{ genCartTotal(this.$store.state.cart, this.$store.state.store.inventory) }}
                to "freshdaddyb@gmail.com"
              </li>
              <v-row>
                <i><b>Title</b>: Order
                  #{{ $route.params.orderId }}</i>
              </v-row>
              <v-row>
                <i><b>Password</b>: canada</i>
              </v-row>
              <v-row>
                <i>No message required.</i>
              </v-row>

              <li class="mt-1 mb-2">Await for us to accept your order, and give you the shipping details!</li>
            </ol>
          </v-row>

          <v-row class="justify-center mt-2">
            <div>We will update this page with (and email you) your tracking number when it's available.</div>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cartMixin from "@/plugins/cartMixin";

export default {
  name: "OrderOverview",
  data: () => ({}),
  mixins: [cartMixin],
  created() {
    /* Make a request and get order details */
  }
}
</script>

<style scoped>

</style>