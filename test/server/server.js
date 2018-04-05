var express = require('express')
var path = require('path')

var app = express();
var port = 8888;

// 配置静态资源
var app=express();

//cors处理
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);

app.use('/static', express.static(path.join(__dirname, './static')));


app.listen(port, function () {
    console.log('express server is running')
});
