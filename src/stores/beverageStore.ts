import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";


export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],

    base: bases,
    currentBase: bases[0],

    creamer: creamers,
    currentCreamer: creamers[0],

    syrup: syrups,
    currentSyrup: syrups[0],
  }),

  actions: {
    makeBeverage() {},
    showBeverage() {},
  },
  persist: true,
});
