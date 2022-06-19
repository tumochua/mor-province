const actions = {
  handleApiGetListProvince({ commit }) {
    fetch("https://provinces.open-api.vn/api/?depth=1")
      .then((response) => response.json())
      .then((data) => {
        console.log("check data province :", data);
        commit(
          "setProvince",
          data.map((item) => {
            item.checkbox = false;
            return item;
          })
        );
      });
  },
  deleteProvince({ commit }, payload) {
    commit("deleteProvince", payload);
  },
};

export default actions;
