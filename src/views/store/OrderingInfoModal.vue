<template>
  <v-dialog v-model="modalVisible" :max-width="this.maxWidth ? this.maxWidth : '500px'">
    <OrderInfoCard :visible="modalVisible"></OrderInfoCard>
  </v-dialog>
</template>

<script>
import OrderInfoCard from "@/views/store/OrderInfoCard";

export default {
  name: "OrderingInfoModal",
  components: {OrderInfoCard},
  props: ['visible', 'maxWidth'],
  data: () => ({}),
  computed: {
    modalVisible: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>