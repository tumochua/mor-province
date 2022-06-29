<template>
  <div id="app">
    <ProvinceVue
      :apiData="multiSelect"
      @handleOk="handleOk"
      @handleDelete="handleDelete"
      :showListApi="showListApi"
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
    handleOk() {},
    toggleCheckBox() {},
    handleDelete() {},
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
