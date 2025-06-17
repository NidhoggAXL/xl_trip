import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStore = defineStore("main", {
  state: () => ({
    token: "",

    startDate: startDate,
    endDate: endDate,

    // 控制加载页面的隐藏和显示
    isLoading: false
  }),
})

export default useMainStore
