//获取到tabar的图片资源路径
export const getAssets = (imgUrl) => {
  // 1.第一个参数是图片的路径，通常是相对路径。
  // 2.使用 import.meta.url 来获取当前模块的 URL。
  const relativeUrl = `../assets/imgs/${imgUrl}`
  return new URL(relativeUrl, import.meta.url).href;

  //下面为错误示例，不可以在URL传入参数里面使用反引号
  //其他函数可以使用
  // return new URL(`../assets/imgs/${imgUrl}`, import.meta.url).href;
  //核心原因在于模板字符串中的换行符和空格会被保留，当直接内联在 new URL() 中时，如果代码格式化工具（如 Prettier）将模板字符串分割成多行，就会引入不可见的空白字符（换行符 \n 或空格），导致最终路径错误。
  //使用trim()方法可以去除字符串两端的空白字符，确保生成的 URL 是正确的。
  //使用模板字符串时，确保没有多余的空格或换行符
  // return new URL(`../assets/imgs/${imgUrl}`.trim(), import.meta.url).href;
}