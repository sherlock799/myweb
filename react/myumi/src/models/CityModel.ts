export default {
  namespace:"city",
  state:{
    cityName:'北京',
    cityId:"110100"
  },

  reducers:{
    changeCity(state:any,action:any){
      return{
        ...state,
        cityName:action.payload.cityName,
        cityId:action.payload.cityId,
      }
    }
  }
}