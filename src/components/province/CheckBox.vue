<template>
  <div>
    <div v-for="getCheckbox in getCheckboxs" :key="getCheckbox">
      <div v-if="getCheckbox.checkbox">
        <div>
          {{ getCheckbox.name }}
          <span @click="handleDelete(getCheckbox.code)">x</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CheckBox",
  computed: {
    ...mapState["provinces"],
    ...mapGetters(["getCheckboxs"]),
  },
  methods: {
    handleDelete(code) {
      console.log("check code :", code);
      this.$store.dispatch("deleteProvince", code);
    },
  },
};
</script>

<style></style>
