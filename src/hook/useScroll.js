import { ref, onMounted, onUnmounted } from "vue"

export default function useScroll() {
  const isReachBottom = ref(false)

  // 防抖函数
  const debounce = (fn, delay) => {
    let timer = null;
    return function(...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = debounce(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 50) {
      console.log("滚动到底部啦")
      isReachBottom.value = true
    }
  }, 200)

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}