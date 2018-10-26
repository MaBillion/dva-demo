import * as homeServices from '../services/Home'

export default {

  namespace: 'Home',

  state: {},

  subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
    }
  },

  effects: {
    *fetchInitState({ payload }, { call, put }) {  // eslint-disable-line
     const data =  yield call(homeServices.fetchInitState, payload)
      yield put({ type: 'reqInitState', payload: data });
    },
  },

  reducers: {
    reqInitState(state, action) {
      return { ...state };
    }
  }
};
