var webpack = require('webpack');
var path = require('path');

module.exports  = {
    mode: 'development',
    entry : __dirname + '/client/index.js',
    module : {
        rules : [
            {test : /\.jsx$/,
             exclude : /node_modules/,
             use : {
                 loader : 'babel-loader',
                 options : {
                     presets : ['@babel/preset-env', "@babel/preset-react"]
                 }
             }
            
            }
        ]
    },
    output : {
        path: __dirname + '/public/dist/',
        filename: 'bundle.js'
    }
}