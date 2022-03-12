import React from 'react'

export default function Detail(props:any) {
  
  console.log(props.match.params.id);
  
  return (
    <div>Detail</div>
  )
}
