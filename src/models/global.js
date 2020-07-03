export default {
  namespace: 'global',
  state: { name: '', idNumber: '', school: '', studentId: '', startTime: '', endTime: '' },
  effects: {
    *init({ payload }, { call, put, take, race }) {
      const userInfo = localStorage.userInfo;
      const userData = userInfo ? JSON.parse(userInfo) : {};
      yield put({ type: 'save', payload: userData });
    },
  },
  reducers: {
    save(state, action) {
      localStorage.userInfo = JSON.stringify(action.payload);
      return { ...state, ...action.payload };
    },
  },
   subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {
      });
    },
  },
};
