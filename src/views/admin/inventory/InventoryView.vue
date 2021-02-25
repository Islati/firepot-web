<template>
  <v-container class="d-flex align-center">
    <v-row>
      <v-col sm="12">
        <v-card>
          <v-card-title>Inventory Overview
            <!-- Add inventory items.          -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="green" v-on="on" v-bind="attrs">
                  <v-icon>mdi-plus-box</v-icon>
                </v-btn>
              </template>
              <span>Add Inventory Item</span>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="green" v-on="on" v-bind="attrs">
                  <v-icon>mdi-file-image</v-icon>
                </v-btn>
              </template>
              <span>Add Product Image</span>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs}">
                <v-btn icon color="green" v-on="on" v-bind="attrs">
                  <v-icon>mdi-fire</v-icon>
                </v-btn>
              </template>
            </v-tooltip>

          </v-card-title>

          <v-card-text>
            <v-data-table :headers="table.headers" :items="table.products">

            </v-data-table>
          </v-card-text>


        </v-card>
      </v-col>


      <v-col sm="12" v-if="this.selectedItemAction === 'new-product'">
        <new-inventory-item></new-inventory-item>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';
import CreateItemComponent from "@/views/admin/inventory/CreateItemComponent";

export default {
  name: "InventoryView",
  components: {
    "new-inventory-item": CreateItemComponent
  },
  created() {
    axios({
      method: 'get',
      url: 'http://localhost:5000/store/products',
      headers: {'Authorization': `Bearer ${this.$store.state.authToken}`}
    }).then(response => {
      let json = response.data;
      console.log(json);

      this.table.products = json['payload']['items']
      console.log(JSON.stringify(this.table.products));
    });
  },
  methods: {

  },
  data: () => ({
    loading: true,
    selectedItemAction: "new-product",
    table: {
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Description',
          align: 'start',
          sortable: false,
          value: 'description'
        },
        {
          text: 'Tags',
          align: 'start',
          sortable: false,
          value: 'tags'
        },
        {
          text: 'Products',
          align: 'start',
          sortable: false,
          value: 'products'
        }
      ],
      products: []
    }
  })
}
</script>

<style scoped>

</style>