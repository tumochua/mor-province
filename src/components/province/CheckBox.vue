<template>
  <div class="checked">
    <div v-for="getCheckbox in getCheckboxs" :key="getCheckbox.code">
      <div class="checked-select" v-if="getCheckbox.checkbox">
        <span class="checked-select-name">{{ getCheckbox.name }}</span>
        <span
          @click="handleDelete(getCheckbox.code)"
          class="checked-select-delete"
        >
          <img src="../../assets/delete.png" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CheckBox",
  computed: {
    ...mapState[""],
    ...mapGetters(["getCheckboxs"]),
  },
  methods: {
    handleDelete(code) {
      // this.$store.dispatch("deleteProvince", code);
    },
  },
};
</script>

<style lang="scss" scoped>
.checked {
  width: 480px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  .checked-select {
    display: block;
    padding: 8px;
    line-height: 2;
    .checked-select-name {
      margin-right: 10px;
    }
    .checked-select-delete {
      cursor: pointer;
    }
  }
}
</style>
