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
import './lib/mui/css/icons-extra.css'
Vue.use(MintUi);

//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
//Vue.http.options.root ='http://xxxxxx';//请求根路径，注意：后面接口地址前面不需要/


//过滤器调用的格式 {{ name | 过滤器名称 }}
//过滤器的定义语法
//全局过滤器===>Vue.filter('过滤器的名称',function(){});
// Vue.filter('dateFormat',function (time,pattern='YYYY-MM-DD HH:mm:ss') {
//     //根据传入的时间格式化
//     const  date = new Date(time);
//     const year = date.getFullYear();
//     const month = (date.getMonth()+1).toString().padStart(2,'0');//从0开始,保留两位自动补0
//     //const day = date.getDay();//星期
//     const day = (date.getDate()).toString().padStart(2,'0');//日期,保留两位自动补0
//     //return year+'-'+month+'-'+day;
//     //模板字符串
//     // return `${year}-${month}-${day}`;
//
//     if(pattern && pattern.toLowerCase()==='yyyy-mm-dd'){
//         //模板字符串
//         return `${year}-${month}-${day}`;
//     }else{
//         const hour = (date.getHours()).toString().padStart(2,'0');//保留两位自动补0
//         const min = (date.getMinutes()).toString().padStart(2,'0');//保留两位自动补0
//         const sec = (date.getSeconds()).toString().padStart(2,'0');//保留两位自动补0
//
//         //模板字符串
//         return `${year}-${month}-${day}  ${hour}:${min}:${sec}`;
//     }
// });


import moment from 'moment'
Vue.filter('dateFormat',function (time,pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(time).format(pattern);
});


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