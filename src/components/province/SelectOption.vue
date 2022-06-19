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
        <button
          @click="handleOk"
          :class="handleBtn[0] ? 'isShow' : 'isDisabled'"
        >
          đồng ý
        </button>
        <button @click="handlCancel">hủy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProvince", "getCheckboxs", "getBtnCheckBox"]),
    ...mapState({
      provinces: (state) => state.provinces,
    }),
    handleBtn() {
      return this.getBtnCheckBox.map((item) => item.checkbox);
    },
  },
  methods: {
    handleOk() {
      this.$emit("handleOk");
    },
    handlCancel() {
      this.$store.dispatch("handlCancel");
    },
  },
};
</script>

<style scoped>
.name-province {
  display: flex;
  justify-content: center;
}
.isDisabled {
  pointer-events: none;
}
</style>
