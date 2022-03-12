import { getCinemaListService } from "../services/maizuo";

export default {

  namespace: 'maizuo',

  state: {
    isShow:true,
    list:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('初始化');
    },
  },

  effects: {
    *getCinemaList({type}, {call,put}) {
      var res = yield call(getCinemaListService)
      yield put({
        type:"changeList",
        payload:res.data.data.cinemas
      })
    },
  },

  reducers: {
    hide(state){
      return {...state,isShow:false}
    },
    show(state){
      return {...state,isShow:true}
    },
    changeList(state,{payload}){
      return {...state,list:payload}
    }
  },

};
