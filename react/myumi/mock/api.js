export default {
  "GET /user":{name:"cx",age:18},
  "POST /user/login":(req,res)=>{
    console.log(req.body);
    if(req.body.username==="cx"&&req.body.password==="123"){
      res.send({
      ok:1
      })
    }else{
      res.send({
        ok:0
      })
    }
  }
}