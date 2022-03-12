import { connect } from 'dva'
import React, { Component } from 'react'

class Cinema extends Component {

  componentDidMount() {
    if(this.props.list.length===0){
      this.props.dispatch({
        type:"maizuo/getCinemaList"
      })
    }else{
      console.log('已缓存');
    }
  }
  render() {
    return (
      <div>
        {
          this.props.list.map(
            i=><div key={i.cinemaId}>{i.name}</div>
          )
        }
      </div>
    )
  }
}

export default connect(state=>({
    list:state.maizuo.list
  })
)(Cinema)