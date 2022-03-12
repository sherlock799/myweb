import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { useEffect } from 'react'
import { connect } from 'umi'
import { SpinLoading } from 'antd-mobile'

function Cinema(props:any) {

  useEffect(() => {
    if (props.list.length===0) {
      props.dispatch({
        type:"cinema/getList",
        payload:{
          cityId:props.cityId
        }
      })
    }else{
      console.log("已缓存");
      
    }
  }, [])
  
  return (
    <div>
      <NavBar back={props.cityName} right={<SearchOutline/>} backArrow={false} onBack={()=>{
        props.history.push('/city')
        props.dispatch({
          type:"cinema/clearList"
        })
      }}>影院</NavBar>
      {props.loading&&<SpinLoading style={{ '--size': '24px' }} />}
      <div>
        {
          props.list.map((i:any)=>
            <div key={i.cinemaId}>{i.name}</div>
          )
        }
      </div>
    </div>
  )
}

export default connect((state:any)=>{
  return{
    loading:state.loading.global,
    cityId:state.city.cityId,
    cityName:state.city.cityName,
    list:state.cinema.list
  }
})(Cinema)