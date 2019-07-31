const path=require('path');

const htmlWebpackPlugin=require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    mode:'development',
    entry:{
        app:['babel-polyfill','./src/main.js']
    },
    output:{
        path:path.resolve('dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'

        }),
        new  VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader?limit=8000'},
            // {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}