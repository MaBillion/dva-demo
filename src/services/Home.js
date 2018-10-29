import request from '../utils/api'

export function fetchInitState () {
    return request('/api/req/init', {
      method: 'POST'
    })
}
