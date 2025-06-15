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

  const scrollListenerHandler = debounce(() => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    console.log(clientHeight, scrollTop, scrollHeight)
    if (clientHeight + scrollTop >= scrollHeight - 50) {
      console.log("滚动到底部啦")
      isReachBottom.value = true
    }
  }, 300)

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler);
  });

  return { isReachBottom }
}