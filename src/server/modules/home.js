import AXLRequest from '../request/index.js';

export function getHotSuggests() {
  return AXLRequest.get({
    url: '/home/hotSuggests',
    timeout: 10000,
  })
}

export function getCategories() {
  return AXLRequest.get({
    url: '/home/categories',
    timeout: 10000,
  })
}

export function getHouserContentData(currentPage) {
  return AXLRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}