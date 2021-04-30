<template>
  <v-container class="d-flex justify-center">
    <v-col sm="3">
      <v-row>
        <v-col sm="12">
          <v-card>
            <v-card-title>Categories</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item-group>
                  <v-list-item>
                    <v-list-item-title>All</v-list-item-title>
                  </v-list-item>
                  <v-divider class="mt-2"></v-divider>
                  <v-list-item>
                    <v-list-item-title>Flower</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-col>
    <v-col sm="9">
      <v-row v-for="flower in this.$store.state.store.inventory" :key="flower.id">

      </v-row>

      <v-row>
        <v-col sm="4" v-for="flower in this.$store.state.store.inventory" :key="flower.id">
          <v-card>
            <v-img height="250" :src="flower.images.cover"></v-img>
            <v-card-title>{{ flower.title }}<small class="ml-1">($10 - $140)</small></v-card-title>
            <v-card-text>
              <div>{{ flower.description }}</div>
            </v-card-text>
            <v-card-text>
              <v-chip v-for="tag in flower.tags" :key="tag" color="green" text-color="white" class="mx-1">{{
                  tag
                }}
              </v-chip>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="deep-purple darken-1" text
                     @click="$router.push({name: 'store-item', params: {itemId: flower.id}})">View
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-col>

      </v-row>
    </v-col>

  </v-container>
</template>

<script>
export default {
  name: "StoreOverview",
  data: () => ({}),
  computed: {}
}
</script>

<style scoped>

</style>