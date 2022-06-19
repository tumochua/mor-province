<template>
  <div>
    <input placeholder="Chọn tỉnh thành" @click="handleShowSelect" />
  </div>
</template>

<script>
export default {
  name: "InputSelect",
  methods: {
    handleShowSelect() {
      this.$emit("showHideSelect");
    },
  },
};
</script>

<style></style>
