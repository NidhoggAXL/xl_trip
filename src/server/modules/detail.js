import AXLRequest from '../request/index.js';

export function getDetailData(houseId) {
  return AXLRequest.get({
    url: '/detail/infos',
    timeout: 10000,
    params: {
      houseId
    }
  })
}