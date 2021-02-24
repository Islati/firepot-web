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
              <v-file-input show-size label="Cover Image" ref="coverimage" v-model="coverImage"
                            @change=""></v-file-input>
            </v-col>
            <v-col sm="6">

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
export default {
  name: "NewInventoryItem",
  data: () => ({
    errorMessage: "",
    itemName: "",
    itemNameRules: [
      v => !!v || "Items require a name"
    ],
    itemDescription: "",
    itemDescriptionRules: [
      v => !!v || "Items require a description"
    ],
    coverImage: [],
    tags: [],
    tagRules: [
      v => !!v || "Tags are required",
      v => (v && v.length > 0) || "Use at least 1 tag"
    ],
    search: "",
  }),
  methods: {
    validateNewItemForm: function () {
      this.$refs.newProductForm.validate();
    },
    previewSelectedImage: function (e) {

    },
    submit: function (e) {
      if (!this.validate()) {
        e.preventDefault();
        return;
      }

      if (this.tags.length == 0) {
        this.errorMessage = "Every item requires tags"
      }
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