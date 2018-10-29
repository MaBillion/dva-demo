import * as homeServices from '../services/Home'

export default {

  namespace: 'Home',

  state: {},

  effects: {
    *fetchInitState({payload}, { call, put }) {  // eslint-disable-line
     const data =  yield call(homeServices.fetchInitState)
      yield put({ type: 'reqInitState' });
    }
  },

  reducers: {
    reqInitState(state) {
      return { ...state };
    }
  }
};
