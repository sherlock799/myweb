import React, { Component } from 'react'
import style from './Tabbar.css'
import {NavLink} from 'dva/router'

export default class Tabbar extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li><NavLink to='/film' activeClassName={style.active}>film</NavLink></li>
          <li><NavLink to='/cinema' activeClassName={style.active}>cinema</NavLink></li>
          <li><NavLink to='/center' activeClassName={style.active}>center</NavLink></li>
        </ul>
      </footer>
    )
  }
}
