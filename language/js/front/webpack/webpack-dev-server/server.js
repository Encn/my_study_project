var webpack = require('webpack');

var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    proxy: {
        '/api/*': {
            target: 'https://other-server.example.com',
            secure: false,
            bypass: function(req, res, proxyOptions) {
                    return '/mock/data.json';
            }
        }
    }
});

server.listen(8080);
