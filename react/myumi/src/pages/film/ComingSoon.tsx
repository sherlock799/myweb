import React, { useEffect } from 'react'

export default function ComingSoon() {

  useEffect(() => {
    fetch("/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=F15D13A0951A11ECA49C9F45F8FAB2BCE6A2D2477F2A4EF28E2F49E35F1F3052&optimus_risk_level=71&optimus_code=10",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
    })
  
  }, [])
  
  return (
    <div>ComingSoon</div>
  )
}
