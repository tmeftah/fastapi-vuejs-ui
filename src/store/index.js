import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true,
    route_name: "",
    links: [
      { name: "Kunden", to: "customers", icon: "mdi-account-group" },
      { name: "Lieferent", to: "suppliers", icon: "mdi-city-variant" },
      { name: "Mitarbeiter", to: "employees", icon: "mdi-human-queue" },
      { name: "Material", to: "matierial", icon: "mdi-semantic-web" },
    ],
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },

    SET_ROUTE_NAME(state, payload) {
      state.route_name = payload;
    },
  },
  actions: {},
  modules: {},
});
