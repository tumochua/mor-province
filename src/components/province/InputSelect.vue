<template>
  <div>
    <input
      class="input-province"
      placeholder="Chọn tỉnh thành"
      @click="handleShowSelect"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "InputSelect",
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    handleShowSelect() {
      this.$emit("showHideSelect");
    },
  },
};
</script>

<style scoped>
.input-province {
  width: 480px;
  border-radius: 8px;
  border: 1px solid #007bc3;
  font-size: 16px;
  padding: 16px 10px;
}
</style>
