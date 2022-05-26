import { createStore } from "vuex";

export default createStore({
  state: {
    currencies: [
      { id: 0, name: "USDT" },
      { id: 1, name: "TRX" },
      { id: 2, name: "BZL" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
