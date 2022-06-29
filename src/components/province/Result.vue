<template>
  <div>
    <div v-for="(item, index) in listCheck.flat(1)" :key="index">
      <div>
        {{ item.name }}
        <span @click="handleDelete(item.code)">x</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultVue",
  props: {
    listCheck: {
      type: Object,
    },
  },
  data() {
    return {};
  },

  created() {
    console.log("check result listChecks : ", this.listCheck);
  },
  methods: {
    handleDelete(data) {
      this.$emit("handleDelete", data);
    },
  },
};
</script>

<style></style>
