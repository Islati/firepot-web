<template>
  <v-card class="justify-center">
    <v-card-title class="justify-center"><h3>Ordering from FirePot</h3></v-card-title>
    <v-divider></v-divider>

    <v-row class="justify-center mt-2 mb-2">
      <v-alert type="info" color="info" border="left">Deliveries for <i>Grand Falls - Windsor</i> are offered between
        8AM - 9PM. <br/> You will be required to provide Photo ID on your first order.
      </v-alert>
    </v-row>

    <v-row class="justify-center">
      <div class="ma-2 pa-2 rounded text-template">
        <p>John Alexander</p>
        <i></i>
        <p>66 Main Street, Grand Falls Windsor</p>
        <i></i>
        <p>3.5g Nuken</p>
        <p>14g Sour Diesel</p>
        <p>2x Full Spectrum Brownie</p>
      </div>
    </v-row>

    <v-row class="justify-center mt-4">
      <div class="font-weight-bold text-h5">How to place your order.</div>
    </v-row>
    <v-row class="justify-center mt-2">
      <p>Text <span class="font-italic" style="background-color: #efefef">+1 (709) 500 6995</span> with your order
        using the template above.</p>

    </v-row>

    <v-row class="justify-center mt-2">
      <p class="subtitle-2 font-weight-light">We will provide further instructions via text messaging.</p>
      <p class="subtitle-2 font-weight-light font-italic">Thank you for your patience.</p>
    </v-row>

    <v-row class="justify-center mt-2">
      <v-img :src="this.interacImage" max-height="50" contain></v-img>
    </v-row>

    <v-row class="justify-center mt-2">
      <p class="text-h6 font-weight-light">Interac eTransfer only for payments.</p>
    </v-row>
  </v-card>

</template>

<script>
import interacImage from '@/assets/interac.png'

export default {
  name: "OrderInfoCard",
  data: () => ({
    interacImage: interacImage
  })
}
</script>

<style scoped>

</style>