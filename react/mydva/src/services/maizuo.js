import request from '../utils/request';

export function getCinemaListService() {
  return request("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5222845",
    {
      headers:{
          'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16454300045948456690515969","bc":"110100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
}
