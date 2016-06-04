var path = require('path');

module.exports = {
    entry: {
        app: ['./app/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/asserts/',
        filename: 'bundle.js'
    }
};

/**
 * webpack-dev-server --content-base build/
 * localhost:8080
 */

/**
 * hot module replacement
 * --hot
 *
 * auto refresh
 *
 * 1. iframe mode
 *
 * http://localhost:8080/webpack-dev-server/index.html
 *
 * 2. inline mode
 *
 * --inline
 */
