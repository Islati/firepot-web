<template>
  <v-container class="d-flex align-center">
    <v-row>
      <v-col sm="1">
        <v-row>
          <v-col sm="2">
            <img :src="require('@/assets/cNNbis leaf.png')" height="200" width="auto" alt="Products"
                 style="cursor:pointer;"/>
          </v-col>

        </v-row>

        <v-row>
          <v-col sm="2">
            <img :src="require('@/assets/usericon.png')" height="200" width="auto" alt="Products"
                 style="cursor: pointer;"/>
          </v-col>
        </v-row>


        <v-row>
          <v-col sm="2">
            <img :src="require('@/assets/reports.png')" height="200" width="auto" alt="Products"
                 style="cursor: pointer;"/>
          </v-col>
        </v-row>

      </v-col>

      <v-col offset="1" sm="10">
        <v-row v-if="this.activeView === 'inventory'">
          <inventory-view></inventory-view>
        </v-row>
        <!--          This where the panel tabel / overview go.-->
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';
import InventoryView from "@/views/admin/InventoryView";

export default {

  name: "InventoryOverview",
  components: {
    'inventory-view': InventoryView
  },
  methods: {
    activateView: function(view) {
      this.activeView = view;
    }
  },
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
    activeView: "inventory",
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