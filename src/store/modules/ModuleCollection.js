import { categories } from "../helpers/categories.js";
import deleteArrayItemByValue from "../helpers/DeleteArrayItemByValue";

function toggle(collection, value) {
  if (collection.includes(value)) {
    deleteArrayItemByValue(collection, value);
  } else {
    collection.push(value);
  }
}

function append(collection, value) {
  if (!collection.includes(value)) {
    collection.push(value);
  }
}

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
      toggle(state.categoriesSelected, category.name);

      // If parent has children - Remove parent
      if (category.parent !== null) {
        const parent = state.categories.find(
          (item) => item.name === category.parent
        );

        deleteArrayItemByValue(state.categoriesSelected, parent.name);
        // If is child - Toggle children
      } else {
        const children = state.categories.filter(
          (item) => item.parent === category.name
        );

        children.forEach((item) => {
          if (state.categoriesSelected.includes(category.name)) {
            append(state.categoriesSelected, item.name);
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
        if (state.categoriesSelected.includes(category.name)) {
          return true;
        }
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
