import { useHistory } from "umi"

function Center(props:any) {

  const history = useHistory()
  return (
    <div>
      Center
      <button onClick={()=>{
        localStorage.removeItem("token")
        history.push('/login')
      }}>退出登录</button>
    </div>
  )
}

Center.wrappers = ["@/wrappers/Auth"]

export default Center