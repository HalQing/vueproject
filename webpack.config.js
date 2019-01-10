//导path路径包
const path = require('path');

//导入内存中生成html页面的插件，只要是插件都需要放入plugins中
const HtmlWebpackPlugin = require('html-webpack-plugin');
//vue的loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 开发接口
module.exports = {
    //源文件位置
    entry:path.join(__dirname,'./src/main.js'),//入口

    //导出位置
    output: {
        path:path.join(__dirname,'./dist'),//输入目录
        filename: "bundle.js",//文件名
    },

    //方式一：
    // package.json文件配置
    // "scripts": {
    //     "test": "echo \"Error: no test specified\" && exit 1",
    //     "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"
    //   },
    //方式二 ： webpack-dev-Server插件调用配置
    // devServer: {
    //         open:true,
    //         port:3000,
    //         contentBase:'src',
    // },
    // 插件配置
    plugins: [
        new HtmlWebpackPlugin({
            //需要导入的页面
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html',//使用index名字可以直接显示
        }),
        new VueLoaderPlugin(),
    ],
    // loader的配置
    module: {
        //匹配规则
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},//css文件loader的配置
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//less文件loader的配置
            //{test:/\.sass$/,use:['style-loader','css-loader','sass-loader']},//sass文件loader的配置
            //写法一：自动命名，防止从名
            // {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},//url文件loader的配置
            //写法二：能显示原来的文件名
            //{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=348557'},//url文件loader的配置
            //写法三：能显示原来的文件名，8位哈希值，防止重名
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?name=[hash:8]-[name].[ext]'},//url文件loader的配置
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//字体文件loader的配置
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//js文件loader的配置,不包括node_modules文件夹中的
            {test:/\.vue$/,use:'vue-loader'},//vue组件loader的配置
        ],
    },
    resolve: {
        //vue加载方式二
        alias:{//别名
            'vue$':'vue/dist/vue.js',//vue路径
        }
    }
};