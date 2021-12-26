import { createStore } from "vuex";
import { categories } from "./categories.js";
import { images } from "./images.js";

function removeSelectedCategory(state, name) {
  const index = state.categoriesSelected.indexOf(name);
  if (index === -1) return;
  state.categoriesSelected.splice(index, 1);
}

function removeSelectedImage(state, name) {
  const index = state.imagesSelected.indexOf(name);
  if (index === -1) return;
  state.imagesSelected.splice(index, 1);
}

function removeImage(state, name) {
  console.log(state);
  const index = state.images.indexOf(name);
  if (index === -1) return;
  state.images.splice(index, 1);
}

function removeOpenCategory(state, name) {
  const index = state.categoriesOpen.indexOf(name);
  if (index === -1) return;
  state.categoriesOpen.splice(index, 1);
}

export default createStore({
  state() {
    return {
      categories: categories,
      images: images,
      categoriesSelected: [],
      categoriesOpen: [],
      imagesSelected: [],
      imageLayout: "default",
      collectionTabSelected: "Kategorier",
      detailsTabSelected: "Information",
      detailsImageFull: false,
      searchModel: "",
    };
  },
  mutations: {
    categoryRemove(state, name) {
      if (state.categoriesSelected.includes(name)) {
        removeSelectedCategory(state, name);
      }
    },
    categorySelectToggleMultiple(state, category) {
      // Toggle current
      if (state.categoriesSelected.includes(category.name)) {
        removeSelectedCategory(state, category.name);
      } else {
        state.categoriesSelected.push(category.name);
      }

      // If parent has children
      if (category.parent !== null) {
        removeSelectedCategory(state, category.parent);
      } else {
        // Radera alla children om aktiv
        /*state.categories.forEach((item) => {
          if (item.parent === category.parent) {
            console.log("match" + item.parent);

            const index = getCategoryIndex(state, category.parent);
            if (index === -1) {
              state.categoriesSelected.splice(index, 1);
            }
          }
        });*/
      }
    },
    categorySelectToggleSingle(state, name) {
      if (state.categoriesSelected.includes(name)) {
        state.categoriesSelected = [];
      } else {
        state.categoriesSelected = [name];
      }
    },
    categoryOpenToggle(state, category) {
      if (state.categoriesOpen.includes(category.name)) {
        removeOpenCategory(state, category.name);
      } else {
        state.categoriesOpen.push(category.name);
      }
    },
    imageSelectToggleSingle(state, name) {
      if (state.imagesSelected.includes(name)) {
        state.imagesSelected = [];
      } else {
        state.imagesSelected = [name];
      }
    },
    imageRemoveSelected(state) {
      state.imagesSelected.forEach((item) => {
        console.log(item);
        removeImage(state, item);
      });
    },
    imageSelectToggleMultiple(state, name) {
      if (state.imagesSelected.includes(name)) {
        removeSelectedImage(state, name);
      } else {
        state.imagesSelected.push(name);
      }
    },
    imageLayout(state, layout) {
      state.imageLayout = layout;
    },
    setCollectionTabSelected(state, tab) {
      state.collectionTabSelected = tab;
    },
    setDetailsTabSelected(state, tab) {
      state.detailsTabSelected = tab;
    },
    setDetailsImageFull(state, isFull) {
      state.detailsImageFull = isFull;
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

      //if (state.categories.includes(category.name)) return true;
      //if (state.categories.includes(category.parent)) return true;
    },
  },
});
