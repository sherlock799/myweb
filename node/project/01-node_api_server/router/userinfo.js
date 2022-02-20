
// 导入路由处理函数模块
const userinfoHandler = require('../router_handler/userinfo')

const express = require('express')
const router = express.Router()

router.get('/userinfo', userinfoHandler.getUserInfo)

module.exports = router