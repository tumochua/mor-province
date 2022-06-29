<template>
  <div id="app">
    <ProvinceVue
      :apiData="multiSelect"
      :showListApi="showListApi"
      @handleOk="handleOk"
      @handleDelete="handleDelete"
      :listCheck="listCheck"
      v-model="listCheck"
    />
  </div>
</template>

<script>
import ProvinceVue from "./components/province/Province.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    ProvinceVue,
  },
  data() {
    return {
      multiSelect: [],
      // listCheck: [],
    };
  },

  async created() {
    try {
      let response = await axios.get("https://provinces.open-api.vn/api/");
      this.multiSelect = response.data;
      console.log("check res :", this.multiSelect);
    } catch (err) {
      console.log(err);
    }
  },
  computed: {},

  methods: {
    handleOk() {
      this.toggleCheckBox();
    },
    // toggleCheckBox(value) {
    //   this.listCheck = value;
    //   console.log("check toggleCheckBox ", this.listCheck);
    // },
    // handleDelete(code) {
    //   this.listCheck = this.listCheck.filter((item) => {
    //     return item.code !== code;
    //   });
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Noto Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 480px;
  margin: 0 auto;
}
</style>
