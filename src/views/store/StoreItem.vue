<template>
  <v-container class="d-flex justify-center">
    <v-col offset-sm="3" sm="6">
      <v-card>
        <v-carousel v-model="activeCarouselItem">
          <v-carousel-item v-for="(galleryImage, i) in storeItem.images.gallery" :key="i" :src="galleryImage.src"
                           transition="fade-transition" reverse-transition="fade-transition"></v-carousel-item>
        </v-carousel>
        <v-card-title>{{ storeItem.title }}</v-card-title>
        <v-card-text>
          <div>{{ storeItem.description }}</div>
        </v-card-text>
        <v-card-text>
          <v-chip v-for="tag in storeItem.tags" :key="tag" color="green" text-color="white" class="mx-1">{{ tag }}</v-chip>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title>Select Amount</v-card-title>
        <v-card-text>
          <v-chip-group>
            <v-chip v-for="(product, id) in storeItem.products" :key="id"></v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-actions>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "StoreItem",
  data: () => ({
    activeCarouselItem: 0,
    selectedProductAmount: 0
  }),
  props: {
    storeItem: Object
  }
}
</script>

<style scoped>

</style>