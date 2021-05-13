<template>
  <v-card class="justify-center pa-2" style="overflow-x: hidden">
    <v-card-title class="justify-center"><h3>Ordering FirePot</h3></v-card-title>
    <v-divider></v-divider>

    <v-row class="justify-center mt-2">
      <v-col sm="10" md="8">
        <v-alert type="info" color="info" border="left">
          <p class="text-center">Deliveries for <i>Grand Falls - Windsor</i> are offered between
            8AM - 5PM.</p>

          <p class="text-center">Pickups are available from 8am to 9pm</p>

          <p class="text-center">
            You will be required to provide a picture of your Photo ID on your first order.
          </p>
        </v-alert>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4" md="4">
        <p class="text-center text-subtitle-1 font-weight-light font-italic font-weight-bold">Order Template</p>

        <div class="ml-2 mr-2 pl-2 pr-2 rounded text-center" style="background-color: #efefef">
          <p class="font-weight-light">John Alexander</p>
          <p class="subtitle-1 font-italic font-weight-light">(Delivery / Pickup)</p>
          <p class="subtitle-1 font-italic font-weight-light">66 Main Street</p>
          <p class="font-weight-light">3.5g Nuken</p>
          <p class="font-weight-light">14g Sour Diesel</p>
        </div>
      </v-col>

    </v-row>
    <v-row class="justify-center">
      <v-col sm="12">
        <p class="text-center">Text <span class="font-italic" style="background-color: #efefef">+1 (709) 500 6388</span>
          with your order or any questions you may have.</p>

        <p class="text-center">Thank you for your support ♥</p>
        <v-row class="justify-center">
          <v-img :src="this.interacImage" max-height="25" contain></v-img>
        </v-row>

        <p class="subtitle-2 font-weight-light text-center">Interac eTransfer supported.</p>

        <p class="text-h6 font-weight-light"></p>

        <v-row class="justify-center pb-2">
          <v-btn type="success" outlined rounded text @click="$props.closeMethod">Okay!</v-btn>
        </v-row>

      </v-col>
    </v-row>


  </v-card>

</template>

<script>
import interacImage from '@/assets/interac.png'

export default {
  name: "OrderInfoCard",
  props: ['closeMethod'],
  data: () => ({
    interacImage: interacImage
  })
}
</script>

<style scoped>

</style>