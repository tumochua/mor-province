<template>
  <div>
    <input-select
      @showHideSelect="showHideSelect"
      @handleBlur="handleBlur"
    ></input-select>
    <check-box-vue v-show="checkBox"></check-box-vue>
    <div v-show="showSelect" class="test">
      <select-option-vue @handleOk="handleOk"></select-option-vue>
    </div>
  </div>
</template>

<script>
import InputSelect from "./InputSelect.vue";
import CheckBoxVue from "./CheckBox.vue";
import SelectOptionVue from "./SelectOption.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "ProvinceVue",
  components: {
    InputSelect,
    SelectOptionVue,
    CheckBoxVue,
  },

  data() {
    return {
      showSelect: false,
      checkBox: true,
    };
  },
  computed: {
    ...mapState({
      provinces: (state) => state.provinces,
    }),
    ...mapGetters(["getProvince"]),
  },
  created() {
    this.$store.dispatch("handleApiGetListProvince");
  },
  methods: {
    showHideSelect() {
      this.showSelect = !this.showSelect;
      this.checkBox = !this.checkBox;
    },
    handleOk() {
      this.checkBox = true;
      this.showSelect = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
