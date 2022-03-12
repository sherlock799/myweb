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
  input FilmInput{
    name:String,
    poster:String,
    price:Int
  }  
  type Query{
    getFilm:[Film],
  }
  type Mutation{
    createFilm(input:FilmInput):Film,
    deleteFilm(id:Int!):Int,
    updateFilm(id:Int!,input:FilmInput):Film
  }
  
`)

const root ={
  getFilm(){
    return mydb
  },
  createFilm({input}){
    var obj = {...input,id:mydb.length+1}
    mydb.push(obj)
    return obj
  },
  updateFilm({id,input}){
    var obj = null
    mydb = mydb.map(item=>{
      if(item.id==id){
        obj = {...item,...input}
        return {...item,...input}
      }
      obj = item
      return item
    })
    return obj
  },
  deleteFilm({id}){
    mydb = mydb.filter(item=>item.id!==id)
    return id
  },
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
  id:3,
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

