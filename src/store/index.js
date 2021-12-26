import { createStore } from "vuex";

import ModuleCollection from "./modules/ModuleCollection.js";
import ModuleDetails from "./modules/ModuleDetails.js";
import ModuleLayout from "./modules/ModuleLayout.js";

export default createStore({
  modules: {
    collection: ModuleCollection,
    details: ModuleDetails,
    layout: ModuleLayout,
  },
});
