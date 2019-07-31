import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
// 两个主路由
import app from './app.vue';
import shopping from './shopping.vue';
// app 的子路由
import search from './contents/search.vue';
import game from './contents/game.vue';
import dzsb from './contents/dzsb.vue';
import yf from './contents/yf.vue';
import ws from './contents/ws.vue';
// shopping的子路由
import login from './accounts/login.vue';
import register from './accounts/register.vue';
import shopCart from './accounts/shopCart.vue';

Vue.use(VueRouter);
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/app/dzsb' },
        {
            path: '/app',
            component: app,
            children:[
                {path:'search',component:search},
                {path:'game',component:game},
                {path:'dzsb',component:dzsb},
                {path:'yf',component:yf},
                {path:'ws',component:ws}
            ]
        },
        {
            path:'/shopping',
            component:shopping,
            children:[
                {path:'login',component:login},
                {path:'register',component:register},
                {path:'shopCart',component:shopCart}
            ]
        }
    ]
})

export default router;