//单页面跳转显示
import VueRouter from 'vue-router'

import account from '../views/account.vue'
import goods from '../views/goods.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

import home from '../views/home.vue'
import member from '../views/member.vue'
import cart from '../views/cart.vue'
import search from '../views/search.vue'

import newsList from '../views/newsList.vue'
import newsInfo from '../views/newsInfo.vue'

//创建路由对象
const router =  new VueRouter({
    routes:[
        {
            path:'/account',
            component:account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register},
            ],

        },
        {path:'/goods',component:goods},
        {path:'/',redirect:'/home'},//重定向
        {path:'/home', component:home,},
        {path:'/member',component:member},
        {path:'/cart',component:cart},
        {path:'/search',component:search},

        {path:'/home/newsList', component:newsList,},
        {path:'/home/newsInfo/:id', component:newsInfo,},
    ],
    linkActiveClass:'mui-active',//设置切换时覆盖高亮的类：router-link-active，改用mui-active
});

export default router; //供外部调用