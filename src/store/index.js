import { createStore } from "vuex";

export default createStore({
  state: {
    currencies: [
      {
        id: 0,
        name: "USDT",
        image: "https://cryptologos.cc/logos/thumbs/tether.png?v=022",
      },
      {
        id: 1,
        name: "TRX",
        image: "https://cryptologos.cc/logos/thumbs/tron.png?v=022",
      },
      { id: 2, name: "BZL" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
