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
              <template v-slot:item.actions="{item}">
                <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon small class="mr-2" @click="deleteItem(item)">mdi-delete</v-icon>
              </template>

            </v-data-table>
          </v-card-text>


        </v-card>
      </v-col>


      <v-col sm="12" v-if="this.selectedItemAction === 'new-product'">
        <new-inventory-item :on-item-created="this.itemCreatedCallback"></new-inventory-item>
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
    this.updateInterval = setInterval(this.updateTable, 5000)
    this.updateTable();
  },
  destroyed() {
    clearInterval(this.updateInterval);
  },
  methods: {
    editItem() {

    },
    deleteItem(item) {
      axios({
        method: 'POST',
        url: 'http://localhost:5000/admin/inventory/delete-item/',
        headers: {'Authorization': `Bearer ${this.$store.state.authToken}`, 'Content-Type': 'application/json'},
        data: JSON.stringify({
          id: item.id
        })
      }).then(response => {
        let json = response.data;

        console.log(json);
        if (json.status !== 'success') {
          this.$toast.error(json.message, {duration: 7000});
          return;
        }

        this.$toast.success(json.message, {duration: 6500})
      })
    },
    updateTable() {
      axios({
        method: 'get',
        url: 'http://localhost:5000/admin/inventory/list/',
        headers: {'Authorization': `Bearer ${this.$store.state.authToken}`}
      }).then(response => {
        let json = response.data;
        console.log(json);

        let product_table = []

        for (let item of json['payload']) {

          let _tags = [];

          for (let tag of item['tags']) {
            _tags.push(tag['name']);
          }

          product_table.push({
            'id': item['id'],
            'name': item['name'],
            'description': `${item['description'].substr(0, 100)}..`,
            'tags': _tags,
            'products': item['products'].length,
            'images': item['images'].length
          });
        }


        this.table.products = product_table;
      });
    },
    itemCreatedCallback() {
      this.updateTable();
    }
  },
  data: () => ({
    loading: true,
    updateInterval: null,
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
        },
        {
          text: 'Images',
          align: 'start',
          sortable: false,
          value: 'images'
        },
        {
          text: 'Actions',
          align: 'start',
          sortable: false,
          value: 'actions'
        }
      ],
      products: []
    }
  })
}
</script>

<style scoped>

</style>