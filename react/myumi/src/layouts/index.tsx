import { NavLink } from 'umi'
import './index.less'

export default function Index(props:any) {

  if(props.location.pathname==='/city'||props.location.pathname.includes("/detail")){
    return <div>{props.children}</div>
  }

  return (
    <div>
      {props.children}
      <div className='box'>
        <div className='tabbar'><NavLink to='/film' activeClassName='active'>film</NavLink></div>
        <div className='tabbar'><NavLink to='/cinema' activeClassName='active'>cinema</NavLink></div>
        <div className='tabbar'><NavLink to='/center' activeClassName='active'>center</NavLink></div>
      </div>
    </div>
    
  )
}
