/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
//导入数据库操作模块
const db = require('../db/index')
//导入密码加密模块
const bcrypt = require('bcryptjs')
//导入生成token模块
const jwt = require('jsonwebtoken')
const config = require('../config')

// 注册用户的处理函数
exports.regUser = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
    // 判断数据是否合法
    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不能为空！' })
    }
    //定义 SQL 语句
    const sql = `select * from users where username=?`
    //判断用户名是否被占用
    db.query(sql, userinfo.username, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 用户名被占用
        if (results.length >0 ) {
            return res.cc('用户名被占用' )
        }
        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        //定义插入用户的 SQL 语句
        const sql = 'insert into users set ?'
        //调用 `db.query()` 执行 SQL 语句，插入新用户
        db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
            // 执行 SQL 语句失败
            if (err) return res.cc(err)
            // SQL 语句执行成功，但影响行数不为 1
            if (results.affectedRows !== 1) {
                return res.cc('注册用户失败，请稍后再试！')
            }
            // 注册成功
            res.cc('注册成功！' , 0)
        })
    })
    //res.send('reguser OK')这里不能再进行响应了
}
// 登录的处理函数
exports.login = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
    // 判断数据是否合法
    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不能为空！' })
    }
    //定义 SQL 语句
    const sql = `select * from users where username=?`
    db.query(sql,userinfo.username,function(err,results){
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) return res.cc('用户名错误')
        // 判断用户输入的登录密码是否和数据库中的密码一致
        const Rs = bcrypt.compareSync(userinfo.password, results[0].password)
        //if (!Rs) return res.cc('密码错误')
        // 剔除password
        const user = { ...results[0], password: '' }
        // 生成 Token 字符串
        const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
        //将Token 字符串响应给客户端
        res.send({
            status: 0,
            message: '登录成功！',
            // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
            token: 'Bearer ' + tokenStr,
        })
    })
    
}