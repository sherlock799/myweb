//导入数据库操作模块
const db = require('../db/index')

// 获取用户信息的处理函数
exports.getUserInfo = (req,res)=>{
    //
    const sql = 'select id,username,password,gender,email from users where id=?'
    //
    db.query(sql,req.user.id,(err,results)=>{
        if(err) return res.cc(err)
        if(results.length !==1) return res.cc('false')
    //
    res.send({
        status: 0,
        message: 'ok',
        data: results[0]
    })
    })
}