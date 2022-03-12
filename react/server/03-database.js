const express = require("express")
const {buildSchema} = require("graphql")
const graphqlHttp = require("express-graphql")
const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'mydb',
})

const sql = `select * from users`

db.query(sql,function (error, results) {
  if (error) throw error;
  mydb = results
})

var MySchema = buildSchema(`
  type Film{
    id:Int,
    username:String,
    password:String,
  }
  input FilmInput{
    name:String,
    poster:String,
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

var app = express()

app.use("/graphql",graphqlHttp({
  schema:MySchema,
  rootValue:root,
  graphiql:true,
}))

app.listen(4000)
