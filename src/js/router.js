//单页面跳转显示
import VueRouter from 'vue-router'

import account from '../views/account.vue'
import goods from '../views/goods.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

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
    ],
});

export default router; //供外部调用