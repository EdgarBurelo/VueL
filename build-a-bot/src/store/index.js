import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './module/robots';
import usersModule from './module/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
