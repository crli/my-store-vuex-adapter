var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//构建外部依赖
var externals = {}
var dev = [
    
]
for(var index in dev) {
    var item = dev[index]
    externals[item] = {
        commonjs: item,
        commonjs2: item,
    }
};

module.exports = {
    //页面入口文件配置
    entry: {
        index: path.join(__dirname, "../src/index"),
    },
    output: {
        // 生成的打包文件名
        path: path.join(__dirname, "../dist/"),
        filename: 'index.js',
        library: 'my-store-vuex-adapter',
        libraryTarget: 'umd',
    },
    externals: externals,
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'], // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, '../src'),
        }, {
            test: /\.ts(x?)$/,
            include: path.join(__dirname, '../src'),
            use: [{
                loader: 'babel-loader',
            }, {
                loader: 'ts-loader',
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    //插件项
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    devtool: 'source-map'
};
