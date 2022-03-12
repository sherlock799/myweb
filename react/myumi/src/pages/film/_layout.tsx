import React from 'react'
import { NavLink, Redirect,useLocation } from 'umi'
import './layout.css'
export default function Film(props:any) {

  const location = useLocation()

  if(location.pathname==='/film'|| location.pathname==='/film/'){
    return <Redirect to='/film/nowplaying'/>
  }

  return (
    <div>
      <div className='box2'>
        <NavLink to='/film/nowplaying' className='tabbar' activeClassName='active'>nowplaying</NavLink>
        <NavLink to='/film/comingsoon' className='tabbar' activeClassName='active'>comingsoon</NavLink>
      </div>
      <div className='box1'>
        {props.children}
      </div>
      
    </div>
  )
}
