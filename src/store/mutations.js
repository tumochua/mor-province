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
    // if (state.provinces.code === payload) {
    //   console.log("check mution : ", state.provinces.checkbox === payload);
    //   state.provinces.checkbox = false;
    // }
  },
};

export default mutations;
