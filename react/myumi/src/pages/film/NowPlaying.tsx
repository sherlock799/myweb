import React,{useEffect,useState} from 'react'

export default function NowPlaying(props:any) {

  const [list, setlist] = useState([])

  useEffect(() => {
    fetch(
      "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9966094",
      {headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16454300045948456690515969","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'}
      }
    ).then(res=>res.json())
    .then(res=>{
      setlist(res.data.films);
    })
  }, [])
  
  return (
    <div>
      {
        list.map((item:any)=>
          <div key={item.filmId} onClick={()=>{
            props.history.push(`/detail/${item.filmId}`)
          }}>
            {item.name}
          </div>
        )
      }
    </div>
  )
}
