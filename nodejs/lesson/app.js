var express = require('express');
// superagent(http://visionmedia.github.io/superagent/ ) 是个 http 方面的库，可以发起 get 或 post 请求。
// cheerio(https://github.com/cheeriojs/cheerio ) 大家可以理解成一个 Node.js 版的 jquery，
// 用来从网页中以 css selector 取数据，使用方式跟 jquery 一样一样的。
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function(req, res, next) {
    superagent.get('https://cnodejs.org/').end(function(err, sres) {
        if (err) {
            return next(err);
        }
        var $ = cheerio.load(sres.text);
        var items = [];
        $('#topic_list .topic_title').each(function(idx, element) {
            var $element = $(element);
            items.push({
                title: $element.attr('title'),
                href: $element.attr('href')
            });
        });
        res.send(items);
    });
});

app.listen(3000,function(){
	console.log('app is listening at port 3000');
});