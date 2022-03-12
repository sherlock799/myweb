export default {
  namespace:"cinema",
  state:{
    list:[],
  },

  effects:{
    *getList(action:any,obj:any):any{
      const {put,call}=obj
      var res = yield call(getListForCinema,action.payload.cityId)
      yield put({
        type:'changeList',
        payload:res
      })
    }
  },

  reducers:{
    changeList(state:any,action:any){
      return {
        ...state,
        list:action.payload
      }
    },
    clearList(state:any){
      return{
        ...state,
        list:[]
      }
    }
  }
}

async function getListForCinema(cityId:any){
  var res = await fetch(
    `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=651101`,{
    headers:{
    'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16454300045948456690515969","bc":"110100"}',
    'X-Host': 'mall.film-ticket.cinema.list'}
    }
  ).then(res=>res.json())
  return res.data.cinemas
}