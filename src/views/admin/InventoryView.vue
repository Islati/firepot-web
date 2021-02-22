<template>
  <v-container class="d-flex justify-center">
    <v-row>
      <v-col sm="8">
        <v-card>
          <v-card-title>Inventory Overview</v-card-title>

          <v-data-table :headers="table.headers">

          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {
  name: "InventoryOverview",
  created() {
    axios({
      method: 'get',
      url: 'http://localhost:5000/store/products',
      headers: {'Authorization': `Bearer ${this.$store.state.authToken}`}
    }).then(response => {
      console.log(response.data)
    });
  },
  data: () => ({
    loading: true,
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
      ]
    }
  })
}
</script>

<style scoped>

</style>