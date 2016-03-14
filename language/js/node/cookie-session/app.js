// https://github.com/expressjs/cookie-session

var express = require('express');

var cookieSession = require('cookie-session');

var app = express();

app.use(cookieSession({
    name: 'sessoin',
    secret: 'test'
}));

app.use(function(req, res, next) {
    req.session.views = (req.session.views || 0) + 1;
    res.end(req.session.views + 'views');
});

app.listen(3000);