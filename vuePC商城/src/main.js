import 'babel-polyfill';
import Vue from 'vue';

import online from './online.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.config.devtools = true;
Vue.use(VueAxios,axios);

var vm = new Vue({
    el: '#app',
    render: function (h) {
        return h(online);
    },
    router
});