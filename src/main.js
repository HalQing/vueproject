//方式一：
//import Vue from '../node_modules/vue/dist/vue.js'
//方式二：需要在webpack.config.js文件中配置： resolve->alisa->'vue$':'vue/dist/vue.js',//vue路径
import Vue from 'vue'
//单页面跳转显示
import VueRouter from 'vue-router'
//注册
Vue.use(VueRouter);

import './css/index.css'
//vue组件
import app from './views/app.vue'
//导入自定义路由模块
import router from './js/router.js'

//导入mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//mui
import './lib/mui/css/mui.css'
Vue.use(MintUi);


new Vue({
    el:"#app",
    data:{
        msg:"我是vue的msg"

    },
    methods:{},
    // components:{
    //     login,//供外部调用
    // },
    // render:function (createElements) {
    //     return createElements(login);
    // }
    //简写
    render:c => c(app),//会清除父容器的组件，再加入
    router,//写入配置，挂载
});