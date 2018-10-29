import request from '../utils/api'

export function LoginEffect (payload) {
  return request('/api/user/login', {
    method: 'POST',
    body: payload
  })
}
