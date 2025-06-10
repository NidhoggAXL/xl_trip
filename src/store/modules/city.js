import { getCityAll } from "@/server";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    cityData: {}
  }),
  actions: {
    async fetchCityData() {
      const res = await getCityAll();
      this.cityData = res.data;
    }
  },
})

export default useCityStore;