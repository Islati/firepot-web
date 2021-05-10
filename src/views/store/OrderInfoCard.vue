<template>
  <v-card class="justify-center" style="overflow-x: hidden">
    <v-card-title class="justify-center"><h3>Ordering from FirePot</h3></v-card-title>
    <v-divider></v-divider>

    <v-row class="justify-center mt-2">
      <v-col sm="10" md="8">
        <v-alert type="info" color="info" border="left">
          <p>Deliveries for <i>Grand Falls - Windsor</i> are offered between
            8AM - 9PM.</p>
          <p>
            You will be required to provide a picture of your Photo ID on your first order.
          </p>
        </v-alert>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <v-col sm="4" md="4">
        <div class="ml-2 mr-2 pl-2 pr-2 rounded text-center" style="background-color: #efefef">
          <p>John Alexander</p>
          <p>66 Main Street, Grand Falls Windsor</p>
          <p>3.5g Nuken</p>
          <p>14g Sour Diesel</p>
          <p>2x Full Spectrum Brownie</p>
        </div>
      </v-col>

    </v-row>
    <v-row class="justify-center">
      <v-col sm="12">
        <p class="text-center">Text <span class="font-italic" style="background-color: #efefef">+1 (709) 500 6388</span>
          with your order
          using the template above.</p>
        <p class="subtitle-2 font-weight-light text-center">Our delivery drivers do not handle transactions. All orders
          must be paid
          prior to delivery.</p>
        <p class="subtitle-2 font-weight-light text-center">Interac eTransfer only for payments.</p>


        <v-row class="justify-center">
          <v-img :src="this.interacImage" max-height="25" contain></v-img>
        </v-row>

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