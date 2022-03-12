import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        Login
        <button onClick={()=>{
          localStorage.setItem('token','aydl')
          this.props.history.push(`/center`)
        }}>login</button>
      </div>
    )
  }
}
