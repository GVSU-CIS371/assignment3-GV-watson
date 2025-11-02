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

    beverage_list: [] as { 
      name: string;
      temp: typeof tempretures[0];
      base: typeof bases[0];
      creamer: typeof creamers[0];
      syrup: typeof syrups[0];
    }[],
  }),

  actions: {
    makeBeverage(beverageName: string ) {
      const newBeverage = {
        name: beverageName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };
      this.beverage_list.push(newBeverage);
    },

    showBeverage(old_beverage: {
        name: string;
        temp: string;
        base: typeof bases[0];
        creamer: typeof creamers[0];
        syrup: typeof syrups[0];
        }) {
        this.currentTemp = old_beverage.temp;
        this.currentBase = old_beverage.base;
        this.currentCreamer = old_beverage.creamer;
        this.currentSyrup = old_beverage.syrup;
      },
  },
  persist: true,
});
