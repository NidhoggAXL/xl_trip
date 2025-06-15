import { getCategories, getHotSuggests, getHouserContentData } from "@/server";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home" ,{
  state: () => ({
    // 热门城市推荐
    hotSuggests: [],
    //推荐类别
    categories: [],
    //房子列表
    houselist: [],
    //记录请求数据的页码
    currentPage: 0,
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
    }, 
    async fetchHouseList() {
      const res = await getHouserContentData(++this.currentPage)
      this.houselist.push(...res.data)
    }
  }
})