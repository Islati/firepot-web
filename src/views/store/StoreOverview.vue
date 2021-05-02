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
                  <v-list-item @click="selectFilter('all')">
                    <v-list-item-content>
                      <v-list-item-title>All</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="mt-2"></v-divider>
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
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-col>
    <v-col sm="9">
      <v-row v-for="item in this.selectedInventoryItems" :key="item.id"
             class="elevation-2 my-2 rounded">
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
              <p class="text-caption">{{ item.description}}</p>
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
      </v-row>
    </v-col>

  </v-container>
</template>

<script>
import VueCookies from 'vue-cookies';
import {capitalize} from "@/utils";

export default {
  name: "StoreOverview",
  data: () => ({
    selectedFilter: 'all',
    validFilters: ['all','flower','indica','sativa','concentrate']
  }),
  computed: {
    selectedInventoryItems() {
      let selection = [];

      if (this.selectedFilter.toLowerCase() == 'all') {
        return this.$store.state.store.inventory;
      }

      for(let item of this.$store.state.store.inventory) {
        let item_tags = item.tags;

        if (!item_tags.includes(capitalize(this.selectedFilter))) {
          continue;
        }

        selection.push(item);
      }

      return selection;
    }
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
    }
  }
}
</script>

<style scoped>

</style>