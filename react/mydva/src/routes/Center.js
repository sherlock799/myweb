import { withRouter } from 'dva/router';
import React, { Component } from 'react'
import request from '../utils/request';

export default class Center extends Component {

  componentDidMount() {
    request(
      "/api/mmdb/movie/v3/list/hot.json?ct=北京&ci=1&channelId=4"
    ).then(res=>{
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        Center
        <WithChild/>
      </div>
    )
  }
}

class Child extends Component {
  state = {  } 
  render() { 
    return (
      <button onClick={()=>{
        localStorage.removeItem('token')
        this.props.history.push(`/login`)
      }}>退出登录</button>
    );
  }
}

const WithChild = withRouter(Child)