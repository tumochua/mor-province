const getters = {
  getProvince(state) {
    return state.provinces.flat(1);
  },
  getCheckboxs(state) {
    return state.provinces.flat(1).map((province) => {
      province.checkbox === true;
      return province;
    });
  },
};

export default getters;
