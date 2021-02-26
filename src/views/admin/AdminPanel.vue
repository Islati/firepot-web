<template>
  <v-container class="d-flex justify-center">

    <v-row>
      <v-col sm="3" class="mt-5">
        <v-card>
          <v-card-title></v-card-title>

          <v-card-text>
            <v-list rounded v-model="selectedItem.index">
              <v-list-item color="primary" :class="selectedItem.activeView === 'inventory' ? 'selected-list-item' : ''" @click="activateView('inventory')" selectable>
                <v-list-item-icon>
                  <v-icon color="success" size="36">mdi-cannabis</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="title" >Products</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col sm="9">
        <v-row v-if="selectedItem.activeView === 'inventory'">
          <inventory-view></inventory-view>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

import InventoryView from "@/views/admin/inventory/InventoryView";

export default {

  name: "AdminPanel",
  components: {
    'inventory-view': InventoryView
  },
  methods: {
    activateView: function (view) {
      switch(view) {
        case "inventory":
          this.selectedItem.index = 0;
          this.selectedItem.activeView = "inventory";
          break;
        default:
          break;
      }
      this.activeView = view;
    }
  },
  created() {

  },
  data: () => ({
    selectedItem: {
      index: 0,
      activeView: "inventory"
    },
    loading: true,
  })
}
</script>

<style scoped>
   .selected-list-item {
     background-color: #f3f3f3;
   }

</style>