<template>
  <div id="app">
    <province-vue></province-vue>
  </div>
</template>

<script>
import ProvinceVue from "./components/province/Province.vue";
export default {
  name: "App",
  components: {
    ProvinceVue,
  },
  computed: {},

  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
