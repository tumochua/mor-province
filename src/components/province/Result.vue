<template>
  <div>
    <div v-for="(item, index) in results" :key="index">
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
    results: {
      type: Object,
    },
  },
  data() {
    return {};
  },

  created() {
    console.log("check result : ", this.results);
  },
  methods: {
    handleDelete(data) {
      this.$emit("handleDelete", data);
    },
  },
};
</script>

<style></style>
