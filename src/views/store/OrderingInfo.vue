<template>
  <!--  Checkout page is after the cart is submitted, checkout holds payment instructions.-->
  <v-container class="d-flex justify-center">
    <v-row class="justify-center">
      <v-col sm="10">
        <OrderInfoCard visible="true"></OrderInfoCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import OrderInfoCard from "@/views/store/OrderInfoCard";

export default {
  name: "OrderingInfo",
  components: {OrderInfoCard},
  data: () => ({}),
  created() {
    /* Make a request and get order details */
  }
}
</script>

<style scoped>
.text-template {
  background-color: #efefef
}
</style>