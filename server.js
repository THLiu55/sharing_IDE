var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('', express.static('./'))

  // 监听端口
http.listen(8080, function(){
});
