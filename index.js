var express = require('express');  // 引入express框架
const db =require("./db/index")


var app = express();
app.set('port', process.env.PORT || 3000);  // 设置执行端口

// 监听端口，执行内容
app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});

app.get('/demo/getList',(req,res)=>{
    let {query} = req // req.query是get请求传参的方法，结构赋值获取query中的参数
    res.status(200).send('params in') // status设置响应状态，send返回响应参数
})