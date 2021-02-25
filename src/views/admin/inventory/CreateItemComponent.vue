<template>
  <v-card class="align-left">
    <v-card-title>Add Item to Inventory
    </v-card-title>

    <v-card-text>
      <v-container class="flex-grow-1">
        <v-form ref="newProductForm" v-model="valid" lazy-validation @submit.prevent="submit">
          <!-- Where errors are displayed -->
          <v-row v-if="errorMessage.length > 0" justify="center">
            <v-alert type="error">
              {{ errorMessage }}
            </v-alert>
          </v-row>

          <v-row>
            <v-col sm="6">
              <v-text-field v-model="itemName" :rules="itemNameRules" label="Item Name"
                            placeholder="Bomb Kush; Gas Shatter"
                            required></v-text-field>
            </v-col>
            <v-col sm="6">

              <v-text-field type="number" v-model="stock" label="Amount in Stock" append-outer-icon="mdi-add"
                            @click:click:append-outer="this.adjustStock('i',1)" prepend-icon="mdi-remove"
                            @click:click:prepend="this.adjustStock('d',1)"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="12">
              <v-textarea v-model="itemDescription" :rules="itemDescriptionRules" label="Item Description"
                          placeholder="Describe the product so our customers will understand." auto-grow required
                          clearable></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="6">
              <v-file-input show-size chips label="Select Cover Image" ref="coverimage" v-model="coverImageFile"
                            @change="this.previewSelectedImage"></v-file-input>
            </v-col>
            <v-col sm="6">
              <v-img v-if="this.coverImage.length > 0" :src="coverImage" height="300" width="300"></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="12">
              <v-combobox multiple
                          v-model="tags"
                          label="Tags"
                          :rules="tagRules"
                          append-icon
                          chips
                          deletable-chips
                          class="tag-input"
                          :search-input.sync="search"
                          @keyup.tab="updateTags"
                          @paste="updateTags">
              </v-combobox>
            </v-col>
          </v-row>

          <!-- Product Variations -->

          <v-row>
            <v-col sm="12">
              <h3>Product Variations</h3>
            </v-col>
            <!-- Control buttons on the bottom.-->
          </v-row>

          <v-row v-for="product in this.products" :key="product.index" class="product-variation-field mt-5">
            <v-col sm="1">
              <v-icon color="primary" class="mt-5" size="16">mdi-asterisk</v-icon>
            </v-col>
            <v-col sm="3">
              <v-text-field type="text" prepend-icon="mdi-rename-box" v-model="products[product.index].name"
                            placeholder="1g" label="Display Name"></v-text-field>
            </v-col>
            <v-col sm="3">
              <v-text-field type="number" v-model="products[product.index].cost" label="Cost" :rules="productCostRules"
                            prepend-inner-icon="mdi-cash-usd-outline" placeholder="10" value="10"></v-text-field>
            </v-col>
            <v-col sm="3">
              <v-text-field type="number" v-model="products[product.index].stock_weight" label="Stock Weight"
                            :rules="stockWeightRules"></v-text-field>
            </v-col>
            <v-col sm="1" offset="1">
              <v-btn icon color="error">
                <v-icon color="dark" class="mt-5" size="24" @click="removeProductVariation(product.index)">mdi-minus
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="12">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon color="green" v-on="on" v-bind="attrs" @click="appendProductVariation">
                    <v-icon>mdi-plus-box-outline</v-icon>
                  </v-btn>
                </template>
                <span>New Product Variant</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-form>

        <v-row>
          <v-col sm="3">
            <v-btn color="success" outlined rounded text type="button" @click="submit">Submit</v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import {loadImageBase64} from "@/utils";
import axios from "axios";

export default {
  name: "CreateItemComponent",
  data: () => ({
    valid: true,
    errorMessage: "",
    itemName: "",
    itemNameRules: [
      v => !!v || "Items require a name"
    ],
    itemDescription: "",
    itemDescriptionRules: [
      v => !!v || "Items require a description"
    ],
    coverImage: "",
    coverImageFile: null,
    tags: [],
    tagRules: [
      v => !!v || "Tags are required",
      v => (v && v.length > 0) || "Use at least 1 tag"
    ],
    stockRules: [
      v => !!v || "Stock amount is required"
    ],
    stock: 0,
    search: "",
    productCostRules: [
      v => !!v || "Product cost is required",
      v => (v && v >= 0) || "Cost must be at least 0"
    ],
    stockWeightRules: [
      v => !!v || "Stock weight is required",
      v => (v && v >= 0) || "Weight must be at least 0"
    ],
    products: [
      {
        index: 0,
        name: "1g",
        stock_weight: 1,
        cost: 10,
      }
    ]
  }),
  methods: {
    removeProductVariation(index) {
      let _products = [];

      for (let product of this.products) {
        if (product.index === index) {
          continue;
        }
        if (product.index > 0) {
          product.index -= 1;
        }
        _products.push(product);
      }

      this.products = _products;
    },
    appendProductVariation() {
      let newIndex = this.products.length;
      if (this.products.length < 1) {
        newIndex = 0;
      }

      console.log(`Creating product variation (index: ${newIndex})`)

      this.products.push({
        index: newIndex,
        name: 'Xg',
        stock_weight: 1,
        cost: 10
      });
    },
    adjustStock(type, amt) {
      switch (type) {
        case "i":
        case "inc":
        case "increment":
          this.stock += amt;
          break;
        case "d":
        case "dec":
        case "decrement":
          this.stock -= amt;
          if (this.stock < 0) {
            this.stock = 0;
          }
          break;
        default:
          break;
      }
    },
    validateNewItemForm: function () {
      return this.$refs.newProductForm.validate();
    },
    previewSelectedImage: function (file) {
      console.log(typeof (file));
      console.log(JSON.stringify(file));
      let vm = this;
      loadImageBase64(file, function (data) {
        vm.coverImage = data;
        console.log(data);
      })
    },
    submit: function (e) {
      if (!this.validateNewItemForm()) {
        console.log("Invalid form");
        e.preventDefault();
        return;
      }

      if (this.tags.length < 1) {
        this.errorMessage = "Every item requires tags"
        return;
      }

      axios({
        url: 'http://localhost:5000/admin/inventory/new/',
        method: 'POST',
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$store.state.authToken}`
        },
        data: JSON.stringify({
          name: this.itemName,
          description: this.itemDescription,
          cover_image_name: this.itemName.toLowerCase().replace(" ", "_"),
          cover_image_data: this.coverImage,
          tags: this.tags.join(','),
          stock: this.stock,
        })
      }).then(response => {
        let json = response.data;

        if (json['status'] !== 'success') {
          this.errorMessage = json['message'];
          return;
        }

        this.$toast.success(json['message']);
        console.log(json['payload'])
      })
    },
    updateTags() {
      this.$nextTick(() => {
        this.select.push(...this.search.split(","));
        this.$nextTick(() => {
          this.search = "";
        });
      });
    }
  }
}
</script>

<style scoped>
.tag-input span.chip {
  background-color: #1976d2;
  color: #fff;
  font-size: 1em;
}

.tag-input span.v-chip {
  background-color: #1976d2;
  color: #fff;
  font-size: 1em;
  padding-left: 7px;
}

.tag-input span.v-chip::before {
  content: "label";
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

.product-variation-field {
  border-color: #e3e3e3;
  border-style: solid;
  border-width: 1px;
  border-radius: 50px
}
</style>