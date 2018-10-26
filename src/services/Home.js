import request from '../utils/api'

export function fetchInitState (payload) {
    return request('/api/user/login', {
      method: 'POST',
      body:  payload
    })
}
