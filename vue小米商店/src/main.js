import Vue from 'vue'
import app from './app.vue'
import router from '../router/router.js'

import { Header, Swipe, SwipeItem, Tabbar, TabItem ,Search,Badge} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);
Vue.component(Badge.name, Badge);

import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);
Vue.config.devtools = true;
var vm = new Vue({
    el: '#app',
    render(h) {
        return h(app)
    },
    router
})
