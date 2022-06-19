<template>
  <div>
    <div>
      <label
        class="name-province"
        v-for="province in getProvince"
        :key="province.code"
      >
        <input type="checkbox" v-model="province.checkbox" />
        <section>
          <option value="">
            {{ province.name }}
          </option>
        </section>
      </label>
      <div>
        <button @click="handleOk">đồng ý</button>
        <button @click="handlCancel">hủy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProvince", "getBtnIsCheckBox"]),
    ...mapState({
      provinces: (state) => state.provinces,
    }),
  },
  methods: {
    handleOk() {
      this.$emit("handleOk");
    },
    handlCancel() {
      this.$emit("handlCancel");
    },
  },
};
</script>

<style scoped>
.name-province {
  display: flex;
  justify-content: center;
}
</style>
