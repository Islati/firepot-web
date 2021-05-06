<template>
  <v-dialog v-model="modalVisible" :max-width="this.maxWidth ? this.maxWidth : '80%'">
    <OrderInfoCard :visible="modalVisible" :closeMethod="closeModal"></OrderInfoCard>
  </v-dialog>
</template>

<script>
import OrderInfoCard from "@/views/store/OrderInfoCard";

export default {
  name: "OrderingInfoModal",
  components: {OrderInfoCard},
  props: ['visible', 'maxWidth'],
  data: () => ({}),
  methods: {
    closeModal() {
      this.modalVisible = false;
    }
  },
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