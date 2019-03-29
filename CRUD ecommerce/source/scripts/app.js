import connect from './database/connect';
import router from './controller/router';
import store from './controller/store';

new Vue({
    router,
    store,
    el: '#app'
});

