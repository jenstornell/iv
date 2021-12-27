import { images } from "../helpers/images.js";
import deleteArrayItemByValue from "../helpers/deleteArrayItemByValue";

export default {
  namespaced: true,
  state() {
    return {
      images: images,
      imagesSelected: [],
    };
  },
  mutations: {
    imageRemoveSelected(state) {
      state.imagesSelected.forEach((item) => {
        deleteArrayItemByValue(state.images, item);
      });

      state.imagesSelected = [];
    },
    imageSelectToggleSingle(state, name) {
      if (state.imagesSelected.includes(name)) {
        state.imagesSelected = [];
      } else {
        state.imagesSelected = [name];
      }
    },
    imageSelectToggleMultiple(state, name) {
      if (state.imagesSelected.includes(name)) {
        deleteArrayItemByValue(state.imagesSelected, name);
      } else {
        state.imagesSelected.push(name);
      }
    },
  },
};
