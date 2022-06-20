<template>
  <div>
    <div class="province-body">
      <label
        class="name-province"
        v-for="province in getProvince"
        :key="province.code"
      >
        <input
          type="checkbox"
          v-model="province.checkbox"
          class="province-checkbox"
        />
        <section>
          <option class="province-option">
            {{ province.name }}
          </option>
        </section>
      </label>
    </div>
    <div class="province-btn">
      <button
        @click="handleOk"
        :class="handleBtn[0] ? 'isShow-btn' : 'isDisabled'"
      >
        Đồng ý
      </button>
      <button @click="handlCancel" class="province-btn-cancel">Hủy</button>
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

<style scoped lang="scss">
.province-body {
  width: 507px;
  height: 304px;
  border-radius: 4px;
  box-shadow: rgba(102, 102, 102, 0.2);
  margin: 0 auto;
  overflow-y: scroll;
  position: relative;

  .name-province {
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    &:hover {
      cursor: pointer;
      background: #e7f1fd;
    }
    .province-checkbox {
      width: 16px;
      height: 16px;
      align-self: center;
    }
    .province-option {
      margin: 7px 12px;
    }
  }
}
.isDisabled {
  pointer-events: none;
  background: #dcdcdc;
  border-radius: 6px;
  width: 104px;
  height: 32px;
  margin-right: 11px;
  border: none;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
}
.isShow-btn {
  background-color: #007bc3;
  cursor: pointer;
  text-align: center;
  border: none;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  width: 104px;
  height: 32px;
  border-radius: 6px;
}

::-webkit-scrollbar {
  width: 8px;
  height: 62px;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  background: #dcdcdc;
  width: 8px;
  height: 62px;
  border-radius: 6px;
}
.province-btn {
  width: 480px;
  display: flex;
  margin: 0 auto;
  padding-left: 38px;
  padding-top: 20px;
  .province-btn-cancel {
    cursor: pointer;
    border: none;
    width: 82px;
    height: 24px;
    background: transparent;
    font-size: 16px;
    color: rgba(0, 123, 195, 1);
  }
}
</style>
