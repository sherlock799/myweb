import { IndexBar,List } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { connect } from 'umi'

function City(props:any) {

  const [list, setlist] = useState<any>([])

  const filterCity = (cities:any)=>{
    const letterArr:Array<String> = []
    const newList = []
    for(var i=65;i<91;i++){
      letterArr.push(String.fromCharCode(i))
    }
    for(var m in letterArr){
      var cityitems:any = cities.filter((item:any)=>
        item.pinyin.substring(0,1).toUpperCase()===letterArr[m]
      )
      cityitems.length && newList.push({
        title:letterArr[m],
        items:cityitems
      })
    }
    return newList
  }

  const changeCity=(item:any)=>{
    props.dispatch({
      type:"city/changeCity",
      payload:{
        cityName:item.name,
        cityId:item.cityId
      }
    })
    props.history.push("/cinema")
  }

  useEffect(() => {
    fetch(
      "https://m.maizuo.com/gateway?k=2511126",
      {headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16454300045948456690515969","bc":"110100"}',
        'X-Host': 'mall.film-ticket.city.list'}
      }
    ).then(res=>res.json())
    .then(res=>{
      setlist(filterCity(res.data.cities)) 
    })
  }, [])
  
  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {list.map((item:any) => {
          const { title, items } = item
          return (
            <IndexBar.Panel
              index={title}
              title={title}
              key={title}
            >
              <List>
                {items.map((item:any, index:number) => (
                  <List.Item key={index} onClick={()=>{
                    changeCity(item)
                  }}>
                      {item.name}
                  </List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
  )
}

export default connect(()=>({}))(City)