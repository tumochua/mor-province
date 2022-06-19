const mutations = {
  setProvince(state, data) {
    state.provinces.push(data);
  },
  deleteProvince(state, payload) {
    state.provinces.flat(1).map((item) => {
      if (item.code === payload) {
        return (item.checkbox = false);
      }
    });
  },
  handlCancel(state) {
    state.provinces.flat(1).map((item) => (item.checkbox = false));
  },
};

export default mutations;
