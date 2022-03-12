const express = require("express")
const {buildSchema} = require("graphql")
const graphqlHttp = require("express-graphql")

var MySchema = buildSchema(`

  type Account{
    name:String,
    age:Int,
  }
  type Film{
    id:Int,
    name:String,
    poster:String,
    price:Int
  }
  type Query{
    hello: String,
    getName: String,
    getList:[Int],
    getInfo:Account,
    getFilm:[Film],
    getFilmDetail(id:Int!):Film
  }
`)

const root ={
  hello:()=>{
    var str = "hello world"
    return str
  },
  getName:()=>{
    return 'cx'
  },
  getList:()=>{
    return [1,2,3]
  },
  getInfo(){
    return{
      name:'xss',
      age:22
    }
  },
  getFilm(){
    return mydb
  },
  getFilmDetail({id}){
    return mydb.filter(item=>item.id===id)[0]
  }
}

var mydb = [{
  id:1,
  name:'111',
  poster:"http://aaa",
  price:23
},{
  id:2,
  name:'222',
  poster:"http://bbb",
  price:45
},{
  id:1,
  name:'333',
  poster:"http://ccc",
  price:67
},]
var app = express()

app.use("/graphql",graphqlHttp({
  schema:MySchema,
  rootValue:root,
  graphiql:true,
}))

app.listen(4000)

