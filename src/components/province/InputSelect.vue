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
  data() {
    return {};
  },
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

<style scoped lang="scss">
.input-province {
  width: 470px;
  border-radius: 8px;
  border: 1px solid #3333;
  font-size: 16px;
  padding: 16px 10px;
  border: 1px solid #007bc3;
  outline: none;
  &:focus {
  }
}
</style>
