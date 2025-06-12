import { getCityAll } from "@/server";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    // city数据
    cityData: {},
    // 当前城市
    currentCity: { cityName: "广州"}
  }),
  actions: {
    async fetchCityData() {
      const res = await getCityAll();
      this.cityData = res.data;
    }
  },
})

export default useCityStore;