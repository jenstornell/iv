export default {
  namespaced: true,
  state() {
    return {
      imageLayout: "medium",
      detailsTabSelected: "Information",
      categoriesOpen: [],
      collectionTabSelected: "Kategorier",
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
      toggle(state.categoriesOpen, category.name);
    },
    setCollectionTabSelected(state, tab) {
      state.collectionTabSelected = tab;
    },
  },
};
