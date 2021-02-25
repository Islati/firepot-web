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
            <v-col sm="12">
              <v-text-field v-model="itemName" :rules="itemNameRules" label="Item Name"
                            placeholder="Bomb Kush; Gas Shatter"
                            required></v-text-field>
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
    search: "",
  }),
  methods: {
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
          tags: this.tags.join(',')
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
</style>