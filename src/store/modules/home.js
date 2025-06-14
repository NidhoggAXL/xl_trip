import { getCategories, getHotSuggests } from "@/server";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home" ,{
  state: () => ({
    // 热门城市推荐
    hotSuggests: [],
    //推荐类别
    categories: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getCategories()
      this.categories = res.data
      // console.log(this.categories)
    }
  }
})