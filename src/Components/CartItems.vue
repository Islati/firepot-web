<template>
  <v-list three-line>
    <template v-for="(item, index) in genCartDisplayData(this.$store.state.cart,this.$store.state.store.inventory)">
      <v-row :key="index">

        <v-list-item>
          <v-list-item-avatar size="150" rounded>
            <v-img :src="item.images.cover"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-row>
              <v-col :sm="cartColumns">
                <v-row>
                  <v-col sm="6">
                    <v-list-item-title><h2>{{ item.title }}</h2></v-list-item-title>
                    <v-chip color="deep-purple lighten-1" text-color="white">{{ item.weight }}</v-chip>
                    <v-chip color="green lighten-1" class="ml-1" text-color="white" v-for="tag in item.tags"
                            :key="tag">{{ tag }}
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col sm="12">
                    <div>{{ item.description }}</div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col sm="1" v-if="removeFromCart">
                <v-icon @click="removeFromCart(item.productId)">mdi-close</v-icon>
              </v-col>
            </v-row>


          </v-list-item-content>

        </v-list-item>

        <v-divider inset></v-divider>
      </v-row>

    </template>
  </v-list>
</template>

<script>
import cartMixin from "@/plugins/cartMixin";

export default {
name: "CartItems",
  mixins: [cartMixin],
  computed: {
    cartColumns() {
      if (this.removeFromCart) {
        return 11;
      } else {
        return 12;
      }
    }
  },
  props: {
    removeFromCart: {
      type: Function,
      required: false
    }
  }
}
</script>

<style scoped>

</style>