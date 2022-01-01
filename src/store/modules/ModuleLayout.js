import axios from "axios";

import toggleArrayItemByValue from "../helpers/toggleArrayItemByValue";

export default {
  namespaced: true,
  state() {
    return {
      imageLayout: "medium",
      detailsTabSelected: "Information",
      categoriesOpen: [],
      collectionTabSelected: "Kategorier",
      mode: "dark",
      apiLoading: false,
      apiSuccess: true,
      apiResponse: null,
    };
  },
  mutations: {
    setImageLayout(state, layout) {
      state.imageLayout = layout;
    },
    setDetailsTabSelected(state, tab) {
      state.detailsTabSelected = tab;
    },
    categoryOpenToggle(state, category) {
      toggleArrayItemByValue(state.categoriesOpen, category.name);
    },
    setCollectionTabSelected(state, tab) {
      state.collectionTabSelected = tab;
    },
    setMode(state, mode) {
      state.mode = mode;
    },
    setApiData(state, data) {
      state.apiResponse = data;
    },
    setApiLoading(state, loading) {
      state.apiLoading = loading;
    },
    setApiSuccess(state, success) {
      state.apiSuccess = success;
    },
  },
  actions: {
    loadApiData(context) {
      context.commit("setApiLoading", true);

      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          context.commit("setApiData", response.data);
          context.commit("setApiSuccess", true);
          context.commit("setApiLoading", false);
        })
        .catch((error) => {
          context.commit("setApiData", null);
          context.commit("setApiSuccess", false);
          context.commit("setApiLoading", false);
        });
    },
  },
};
