import React,{useEffect,useState} from 'react'
import { useHistory } from 'umi'

export default function Login() {

  const history = useHistory()
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  useEffect(() => {
    fetch('/user').then(res=>res.json())
    .then(res=>{
      console.log(res);
    })
  }, [])
  
  return (
    <div>
      username:<input type="text" onChange={(e)=>{setusername(e.target.value)}}/>
      <br/>
      password:<input type="password" onChange={(e)=>{setpassword(e.target.value)}}/>
      <button onClick={()=>{
        fetch("/user/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },body:JSON.stringify({
            username,
            password
          })
        }).then(res=>res.json())
        .then(res=>{
          if(res.ok){
            localStorage.setItem("token",username)
            history.push('/center')
          }else{
            alert("用户名密码错误")
          }
        })
      }}>login</button>
      <br/>{username}--{password}
    </div>
  )
}
