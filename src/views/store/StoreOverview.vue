<template>
  <v-container :class="$vuetify.breakpoint.mobile ? '' : 'd-flex justify-center'">
    <template v-if="$vuetify.breakpoint.mobile">
      <v-col sm="12">
        <v-card>
          <v-card-text>
            <v-select label="Menu Items" single-line prepend-icon="mdi-cannabis" :items="validFilterItems"
                      v-model="selectedFilter">All
            </v-select>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col sm="12" v-for="item in this.selectedInventoryItems" :key="item.id"
             class="mt-2 mb-2 elevation-2 rounded" @click="openStoreItem(item.id)">
        <v-col sm="12" v-if="item.stocked === true">
          <v-row class="justify-center">
            <h4>{{ item.title }}</h4>
          </v-row>
          <v-row class="justify-center">
              <span v-if="item.products.length > 1"
                    class="text-subtitle-2">(${{ item.products[0].cost }}/{{
                  item.products[0].name
                }} - ${{
                  item.products[item.products.length - 1].cost
                }}/{{ item.products[item.products.length - 1].name }})</span>
            <span v-else class="text-subtitle-2">
                (${{ item.products[0].cost }}/{{
                item.products[0].name
              }})
              </span>
          </v-row>
        </v-col>
        <v-col sm="12">
          <v-row>
            <v-img :lazy-src="item.images.cover" :src="item.images.cover"></v-img>
          </v-row>
        </v-col>
        <v-col sm="12">
          <v-row class="justify-center">
            <v-chip v-for="tag in item.tags" :key="tag" color="light-green" text-color="white" class="mx-1">{{
                tag
              }}
            </v-chip>
          </v-row>
        </v-col>

        <v-col sm="12">
          <v-row class="justify-center">

            <v-btn rounded outlined text color="purple" :to="`/store/item/${item.id}`">View
            </v-btn>
          </v-row>
        </v-col>

      </v-col>

    </template>

    <template v-if="!$vuetify.breakpoint.mobile">
      <v-col sm="3" md="3">
        <v-card>
          <v-card-title>Categories</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item-group>
                <v-list-item @click="selectFilter('all')">
                  <v-list-item-content>
                    <v-list-item-title>All</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="mt-2 mb-1"></v-divider>
                <v-list-item @click="selectFilter('flower')">
                  <v-list-item-content>
                    <v-list-item-title>Flower</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="selectFilter('concentrate')">
                  <v-list-item-content>
                    <v-list-item-title>Concentrates</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="selectFilter('edibles')">
                  <v-list-item-content>
                    <v-list-item-title>Edibles</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="mt-2 mb-1"></v-divider>

                <v-list-item @click="selectFilter('indica')">
                  <v-list-item-content>
                    <v-list-item-title>Indica</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="selectFilter('sativa')">
                  <v-list-item-content>
                    <v-list-item-title>Sativa</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="selectFilter('hybrid')">
                  <v-list-item-content>
                    <v-list-item-title>Hybrid</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="8">
        <v-row v-for="item in this.selectedInventoryItems" :key="item.id"
               class="elevation-2 my-2 rounded">
          <template v-if="item.stocked === true">
            <v-col sm="3">
              <v-img max-width="250" max-height="250" :lazy-src="item.images.cover"
                     :src="item.images.cover"></v-img>
            </v-col>
            <v-col sm="8">
              <v-row>
                <p class="text-h5 font-weight-light">{{ item.title }}
                  <span v-if="item.products.length > 1"
                        class="text-subtitle-2">(${{ item.products[0].cost }}/{{
                      item.products[0].name
                    }} - ${{
                      item.products[item.products.length - 1].cost
                    }}/{{ item.products[item.products.length - 1].name }})</span>
                  <span v-else class="text-subtitle-2">
                (${{ item.products[0].cost }}/{{
                      item.products[0].name
                    }})
              </span>
                </p>
              </v-row>
              <v-row>
                <v-col sm="12">
                  <p class="text-caption">{{ item.description }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="8">
                  <v-chip v-for="tag in item.tags" :key="tag" color="light-green" text-color="white" class="mx-1">{{
                      tag
                    }}
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="2">
                  <v-btn rounded outlined text color="purple" :to="`/store/item/${item.id}`">View
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>

          </template>
        </v-row>
      </v-col>

    </template>
  </v-container>
</template>

<script>
import VueCookies from 'vue-cookies';
import {capitalize} from "@/utils";

export default {
  name: "StoreOverview",
  data: () => ({
    selectedFilter: 'all',
    validFilters: ['all', 'flower', 'indica', 'sativa', 'concentrate', 'edibles']
  }),
  computed: {
    validFilterItems() {
      let validItems = [];
      for (let item of this.validFilters) {
        validItems.push(capitalize(item));
      }

      return validItems;
    },
    selectedInventoryItems() {
      let selection = [];

      if (this.selectedFilter.toLowerCase() === 'all') {
        let sorted_segments = [];
        let segment_sorts = ['Flower','Concentrate','Edibles'];
        let segment = [];
        for(let segment_filter of segment_sorts){
          for(let item of this.$store.state.store.inventory) {
            if (item.tags.includes(segment_filter)) {
              segment.push(item);
            }
          }
          sorted_segments.push(segment);
          segment = [];
        }

        let sorted_items = [];
        for(let segmented_list of sorted_segments) {
          for(let item of segmented_list) {

            let available_products = [];

            for (let product of item.products.filter(product => product.available === undefined || product.available)) {
              available_products.push(product);
            }

            item.products = available_products;

            sorted_items.push(item);
          }
        }

        return sorted_items.filter(i => i.stocked);
      }

      for (let item of this.$store.state.store.inventory) {
        let item_tags = item.tags;

        if (!item_tags.includes(capitalize(this.selectedFilter)) && this.selectedFilter.toLowerCase() !== 'all') {
          continue;
        }

        let available_products = [];

        for (let product of item.products.filter(product => product.available === undefined || product.available)) {
          available_products.push(product);
        }

        item.products = available_products;
        selection.push(item);
      }

      return selection.filter(i => i.stocked);
    }
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter.toLowerCase();
    },
    openStoreItem(id) {
      this.$router.push(`/store/item/${id}`).catch((e) => {
      })
    }
  }
}
</script>

<style scoped>

</style>