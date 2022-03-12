import { connect } from 'dva';
import React, { useEffect } from 'react'

function Detail(props) {

  useEffect(() => {
    props.dispatch({
      type:'maizuo/hide'
    })
    return () => {
      props.dispatch({
        type:'maizuo/show'
      })
    }
  }, [])
  return (
    <div>Detail</div>
  )
}

export default connect()(Detail)