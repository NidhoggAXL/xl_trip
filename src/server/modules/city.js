import AXLRequest from '../request/index.js';

export function getCityAll() {
  return AXLRequest.get({
    url: '/city/all',
    timeout: 10000,
  })
}

