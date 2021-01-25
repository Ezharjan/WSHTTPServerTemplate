import "reflect-metadata";              // TypeORM 必须库
import "module-alias/register";         // 文件引用别名（@/）
import express from 'express';          // express
import bodyParser from 'body-parser';   // 请求数据解析
import router from '@/router';          // router

let port = 8080;  // 端口号

const app = express();  // 初始化 express

const path = require('path'); //系统路径模块
app.use(express.static(path.join(__dirname, '/public')))
///console.log(__dirname);// ./LiveRequestServer/dist

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);   // 添加路由

// 监听端口
app.listen(port, () => {
    console.log(`Application has started on Port ${port}`);
});
