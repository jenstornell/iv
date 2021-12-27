import { categories } from "../helpers/categories.js";

import deleteArrayItemByValue from "../helpers/deleteArrayItemByValue";
import toggleArrayItemByValue from "../helpers/toggleArrayItemByValue";

export default {
  namespaced: true,
  state() {
    return {
      categories: categories,
      categoriesSelected: [],
    };
  },
  mutations: {
    categoryRemove(state, name) {
      if (state.categoriesSelected.includes(name)) {
        deleteArrayItemByValue(state.categoriesSelected, name);
      }
    },
    categoryRemoveAll(state, category) {
      let items = [];

      state.categoriesSelected.forEach((item) => {
        if (category.name !== item) {
          items.push(item);
        }
      });

      items.forEach((item) => {
        deleteArrayItemByValue(state.categoriesSelected, item);
      });
    },
    categorySelectToggleMultiple(state, category) {
      toggleArrayItemByValue(state.categoriesSelected, category.name);

      // If parent has children - Remove parent
      if (category.parent !== null) {
        const parent = state.categories.find(
          (item) => item.name === category.parent
        );

        deleteArrayItemByValue(state.categoriesSelected, parent.name);
        // If child - Toggle children
      } else {
        const children = state.categories.filter(
          (item) => item.parent === category.name
        );

        children.forEach((item) => {
          if (state.categoriesSelected.includes(category.name)) {
            if (!state.categoriesSelected.includes(item.name)) {
              state.categoriesSelected.push(item.name);
            }
          } else {
            deleteArrayItemByValue(state.categoriesSelected, item.name);
          }
        });
      }
    },
  },
  getters: {
    categoriesByParent: (state) => (parent) => {
      return state.categories.filter((category) => category.parent === parent);
    },
    categoryIsActive: (state) => {
      state.categories.forEach((category) => {
        return state.categoriesSelected.includes(category.name);
      });
    },
  },
  actions: {
    categorySelectToggleSingle(context, category) {
      context.commit("categoryRemoveAll", category);
      context.commit("categorySelectToggleMultiple", category);
    },
  },
};
