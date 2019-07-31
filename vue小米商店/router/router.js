import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import search from '../pages/search.vue'
import message from '../pages/message.vue'
import personal from '../pages/personal.vue'
import dynamic from '../pages/dynamic.vue'
import chatRoom from '../pages2/chatRoom.vue'
import show from '../pages2/show.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/search', component: search },
        {
            path: '/message', component: message
        },
        { path: '/chatRoom', component: chatRoom },
        { path: '/personal', component: personal },
        { path: '/dynamic', component: dynamic },
        { path:'/show/:id',component:show}
    ],
    linkActiveClass: 'item-active'
})