<template>
  <div>
    <div class="list-api">
      <div class="list-select">
        <div v-for="apiData in apiDatas" :key="apiData.code">
          <label class="list-checkbox">
            <input
              type="checkbox"
              :value="apiData"
              v-model="resultApi"
              class="check-box-input"
            />
            {{ apiData.name }}
          </label>
        </div>
      </div>
    </div>
    <div class="btn-ctn">
      <button @click="handleOk()" :class="resultApi ? 'btn-ok' : 'btn-disble'">
        Đồng ý
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListApi",
  props: {
    apiDatas: {
      type: Object,
    },
  },
  data() {
    return {
      resultApi: [],
    };
  },
  created() {
    console.log("check multiSelect  ", this.apiDatas);
  },
  methods: {
    handleOk() {
      this.$emit("handleOk");
    },
    toggleCheckBox(value) {
      this.$emit("toggleCheckBox", value);
    },
  },
  watch: {
    resultApi: function (value) {
      const list = Array.from(value);
      this.$emit("toggleCheckBox", list);
    },
  },
};
</script>

<style scoped lang="scss">
.list-api {
  background-color: #ffff;
  overflow-y: scroll;
  .list-select {
    height: 304px;
    border-radius: 4px;
    margin: 0 auto;
    .list-checkbox {
      padding: 7px;
      text-align: left;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #e7f1fd;
      }
      .check-box-input {
        width: 16px;
        height: 16px;
        margin-right: 12px;
      }
    }
  }
}
.btn-ctn {
  position: relative;
  .btn-ok {
    position: absolute;
    left: 10px;
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
  .btn-disble {
    pointer-events: none;
    background-color: red;
  }
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
</style>
