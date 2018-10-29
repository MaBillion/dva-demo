import * as loginServices from '../services/Login'
import history from '../utils/history'

export default {
  namespace: 'Login',

  state: {},

  effects: {
    *login({payload}, {call, put}) {
      const data = yield call(loginServices.LoginEffect, payload)
      if (data) {
        history.push('/')
      }
    }
  }
}
