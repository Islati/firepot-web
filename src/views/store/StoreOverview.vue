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
      <v-row v-for="flower in this.$store.state.store.inventory" :key="flower.id"
             class="elevation-2 my-2 rounded">
        <v-col sm="3">
          <v-img max-width="250" max-height="250" :lazy-src="flower.images.cover"
                 :src="flower.images.cover"></v-img>
        </v-col>
        <v-col sm="8">
          <v-row>
            <p class="text-h5 font-weight-light">{{ flower.title }}
              <span
                  class="text-subtitle-2">(${{ flower.products[0].cost }}/{{
                  flower.products[0].name
                }} - ${{
                  flower.products[flower.products.length - 1].cost
                }}/{{ flower.products[flower.products.length - 1].name }})</span>
            </p>
          </v-row>
          <v-row>
            <v-col sm="12">
              <p class="text-caption">{{ flower.description }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="8">
              <v-chip v-for="tag in flower.tags" :key="tag" color="light-green" text-color="white" class="mx-1">{{
                  tag
                }}
              </v-chip>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="2">
              <v-btn rounded outlined text color="purple" :to="`/store/item/${flower.id}`">View
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

  </v-container>
</template>

<script>
import VueCookies from 'vue-cookies';

export default {
  name: "StoreOverview",
  data: () => ({}),
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>