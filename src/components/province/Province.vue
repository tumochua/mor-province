<template>
  <div>
    <input-select @showHideSelect="showHideSelect"></input-select>
    <list-api-vue
      v-if="showListApi"
      :apiDatas="apiData"
      @handleOk="handleOk"
      @toggleCheckBox="toggleCheckBox"
      v-model="listCheck"
    ></list-api-vue>
    <result-vue
      :results="listCheck"
      @handleDelete="handleDelete"
      v-if="showResult"
    ></result-vue>
    <!-- <input-select
      @showHideSelect="showHideSelect"
      @handleBlur="handleBlur"
    ></input-select>
    <check-box-vue v-show="checkBox"></check-box-vue>
    <div v-show="showSelect" class="test">
      <select-option-vue @handleOk="handleOk"></select-option-vue>
    </div> -->
  </div>
</template>

<script>
import InputSelect from "./InputSelect.vue";
import ListApiVue from "./ListApi.vue";
import ResultVue from "./Result.vue";
// import CheckBoxVue from "./CheckBox.vue";
// import SelectOptionVue from "./SelectOption.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "ProvinceVue",
  components: {
    InputSelect,
    ListApiVue,
    ResultVue,
    // SelectOptionVue,
    // CheckBoxVue,
  },
  props: {
    apiData: {
      type: Object,
    },
    result: {
      type: Object,
    },
  },
  data() {
    return {
      listCheck: [],
      showListApi: false,
      showResult: false,
    };
  },
  created() {
    // console.log("check multiSelect", this.apiData);
    console.log("check result province : ", this.result);
  },
  computed: {
    ...mapState({
      provinces: (state) => state.provinces,
    }),
    ...mapGetters(["getProvince"]),
  },

  methods: {
    handleOk() {
      this.showResult = true;
      this.showListApi = false;
    },
    toggleCheckBox(value) {
      this.listCheck = value;
    },
    showHideSelect() {
      this.showListApi = !this.showListApi;
    },
    handleDelete(code) {
      this.listCheck = this.listCheck.filter((item) => {
        return item.code !== code;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
