<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" 
    :isDrink="beverageStore.currentBase" 
    :isCreamed="beverageStore.currentCreamer" 
    :isSyruped="beverageStore.currentSyrup" />

    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>

        <div>
          <template v-for="base in beverageStore.base" :key="base.id">
            <input
              type="radio"
              name="base"
              :id="base.id"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            <label :for="base.id">{{ base.name }}</label>
          </template>
        </div>

        <div>
          <template v-for="creamer in beverageStore.creamer" :key="creamer.id">
            <input
              type="radio"
              name="creamer"
              :id="creamer.id"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            <label :for="creamer.id">{{ creamer.name }}</label>
          </template>
        </div>

        <div>
          <template v-for="syrup in beverageStore.syrup" :key="syrup.id">
            <input
              type="radio"
              name="syrup"
              :id="syrup.id"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            <label :for="syrup.id">{{ syrup.name }}</label>
          </template>
        </div>

  
      </li>
    </ul>
    <input type="text" placeholder="Beverage Name" />
    <button>🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px"></div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();





</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
