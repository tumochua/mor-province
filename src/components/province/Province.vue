<template>
  <div>
    <input-select></input-select>
    <!-- <input-select @showHideSelect="showHideSelect"></input-select> -->
    <list-api-vue
      :apiDatas="apiData"
      @handleOk="handleOk"
      @toggleCheckBox="toggleCheckBox"
    ></list-api-vue>
    <result-vue
      :listCheck="listCheck"
      @handleDelete="handleDelete"
    ></result-vue>

    <!-- <list-api-vue
      v-if="showListApi"
      :apiDatas="apiData"
      @handleOk="handleOk"
      @toggleCheckBox="toggleCheckBox"
      v-model="listCheck"
    ></list-api-vue>
    <result-vue
      :listCheck="listCheck"
      @handleDelete="handleDelete"
      v-if="showResult"
    ></result-vue> -->
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
    // listCheck: {
    //   type: Array,
    // },
    // modelValue: Array,
  },
  data() {
    return {
      // listCheck: [],
      // showListApi: false,
      // showResult: false,
      listCheck: [],
    };
  },
  created() {
    // console.log("check listCheck", this.listCheck);
    // console.log("check result province : ", this.result);
  },
  computed: {
    ...mapState({
      provinces: (state) => state.provinces,
    }),
    ...mapGetters(["getProvince"]),
  },

  methods: {
    handleOk() {
      // this.showResult = true;
      // this.showListApi = false;
    },
    toggleCheckBox(value) {
      this.listCheck = value;
      console.log("check toggleCheckBox ", this.listCheck);
    },
    // toggleCheckBox(value) {
    //   this.$emit("toggleCheckBox", value);
    // },
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
